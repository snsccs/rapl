export type RaplBlogType = "article" | "podcast" | "leadership_article";

export interface RaplBlogRecord {
  id: number;
  slug: string;
  seo_slug?: string | null;
  title: string;
  subtitle?: string | null;
  content: string;
  category: string;
  type: RaplBlogType;
  badge?: string | null;
  featured_image?: string | null;
  podcast_url?: string | null;
  recorded_link?: string | null;
  podcast_platform?: string | null;
  podcast_start_time?: string | null;
  podcast_end_time?: string | null;
  timezone?: string | null;
  tags: string[];
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  author?: string | null;
  views_count: number;
  meta_title?: string | null;
  meta_description?: string | null;
  custom_schema?: Record<string, unknown> | null;
}

export const RAPL_API_BASE = (import.meta.env.PUBLIC_RAPL_API_BASE_URL || "https://api.snsccs.com").replace(/\/$/, "");

/** Resolves a backend-relative upload path (e.g. `/uploads/rapl-blogs/x.jpg`) to an absolute URL. */
export const raplAssetUrl = (value?: string | null) => {
  if (!value) return "";
  if (/^https?:\/\//i.test(value) || value.startsWith("data:")) return value;
  return `${RAPL_API_BASE}${value.startsWith("/") ? "" : "/"}${value}`;
};

/**
 * Build-time fetch of all published RAPL posts of a given type. Used both by
 * the /blogs listing page and by each detail page's getStaticPaths(), so a
 * fresh Astro build always reflects exactly what's published right now —
 * this is what the backend's rebuild-on-publish webhook re-triggers.
 *
 * Deliberately THROWS on a network/HTTP/shape failure instead of falling
 * back to an empty list: the deploy pipeline runs `aws s3 sync --delete`,
 * so a build that silently treated "backend unreachable" the same as
 * "zero published posts" would delete every live /blogs and /podcasts page
 * on the next deploy during a transient outage. Failing the Astro build
 * instead leaves the previously-deployed content on S3 untouched. A
 * genuinely empty (but successful) result is not an error and returns [].
 */
export async function fetchPublishedRaplBlogs(
  type: RaplBlogType,
  limit = 100,
  includeContent = false,
): Promise<RaplBlogRecord[]> {
  // The public list endpoint drops `content` unless asked for it
  // (`attributes: { exclude: ['content'] }` in raplBlog.controller.js), to keep
  // listing payloads small. Detail pages render `blog.content`, so without this
  // flag every post published as just a title and image with an empty body.
  // Listing pages leave it off — they only need the card fields.
  const contentParam = includeContent ? "&include_content=true" : "";
  const response = await fetch(
    `${RAPL_API_BASE}/api/rapl/blogs?type=${type}&is_published=true&limit=${limit}${contentParam}`,
  );
  if (!response.ok) {
    throw new Error(`[rapl] Failed to fetch published ${type}s: HTTP ${response.status} ${response.statusText}`);
  }
  const payload = await response.json();
  if (!payload || payload.success !== true || !Array.isArray(payload.data)) {
    throw new Error(`[rapl] Unexpected response shape fetching published ${type}s from ${RAPL_API_BASE}.`);
  }
  return payload.data;
}

export const raplBlogHref = (blog: RaplBlogRecord) => {
  const slug = blog.seo_slug || blog.slug;
  return blog.type === "podcast" ? `/podcasts/${slug}` : `/blogs/${slug}`;
};

export const formatRaplDate = (value?: string | null) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

/** Formats a start/end pair as e.g. "42 min" or "1h 5m"; null if either is missing/invalid or end isn't after start. */
export const formatRuntimeMinutes = (start?: string | null, end?: string | null): string | null => {
  if (!start || !end) return null;
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return null;
  const minutes = Math.round((endDate.getTime() - startDate.getTime()) / 60000);
  if (minutes <= 0) return null;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;
};

export interface CardPreview {
  leadHtml: string;
  topics: string[];
}

/**
 * Pulls a short preview out of the post's own content HTML, for cards that
 * need more than just the title/subtitle — e.g. the featured podcast card,
 * which otherwise reads as empty whenever a post has no `subtitle` set
 * (there's no separate "card excerpt" field in the CMS).
 *
 * `leadHtml` is the intro: every <p> that appears before the first heading,
 * capped at two paragraphs. `topics` is the first bullet/numbered list found
 * anywhere in the content (typically a "What you'll learn" list), flattened
 * to plain-text items, capped at eight.
 */
export const extractCardPreview = (html: string): CardPreview => {
  if (!html) return { leadHtml: "", topics: [] };

  const headingIndex = html.search(/<h[1-6][^>]*>/i);
  const introSlice = headingIndex === -1 ? html : html.slice(0, headingIndex);
  const leadHtml = [...introSlice.matchAll(/<p[^>]*>[\s\S]*?<\/p>/gi)]
    .slice(0, 2)
    .map((match) => match[0])
    .join("");

  const listMatch = html.match(/<(ul|ol)[^>]*>([\s\S]*?)<\/\1>/i);
  const topics = listMatch
    ? [...listMatch[2].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((match) => match[1].replace(/<[^>]+>/g, "").trim())
        .filter(Boolean)
        .slice(0, 8)
    : [];

  return { leadHtml, topics };
};

export interface SectionNavItem {
  id: string;
  label: string;
}

/**
 * Walks the admin-authored content HTML for h2–h6 headings, gives each an id
 * (skipping ones that already have one), and returns the modified HTML plus
 * the {id, label} list those ids point to. The "In this discussion" sidebar
 * on a podcast detail page is just this list rendered as anchor links — there
 * is no separate CMS field for it, the nav is derived from whatever headings
 * the post's content happens to contain.
 */
export const injectSectionAnchors = (html: string): { html: string; navItems: SectionNavItem[] } => {
  const navItems: SectionNavItem[] = [];
  let count = 0;
  const withIds = html.replace(/<h([2-6])((?:\s[^>]*)?)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    const label = inner.replace(/<[^>]+>/g, "").trim();
    if (!label) return match;
    count += 1;
    const id = `podcast-section-${count}`;
    navItems.push({ id, label });
    if (/\sid=/i.test(attrs)) return match;
    return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
  });
  return { html: withIds, navItems };
};

/** Matches youtube.com/watch, youtu.be/, youtube.com/embed/ and /live/ links; returns the video ID or null. */
export const extractYouTubeId = (url?: string | null): string | null => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      return parsed.pathname.slice(1) || null;
    }
    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      if (parsed.pathname === "/watch") return parsed.searchParams.get("v");
      const embedMatch = parsed.pathname.match(/^\/(embed|live|shorts)\/([^/?]+)/);
      if (embedMatch) return embedMatch[2];
    }
  } catch {
    return null;
  }
  return null;
};
