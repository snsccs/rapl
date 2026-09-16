export interface RaplBlogRecord {
  id: number;
  slug: string;
  seo_slug?: string | null;
  title: string;
  subtitle?: string | null;
  content: string;
  category: string;
  type: "article" | "podcast";
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
  type: "article" | "podcast",
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
