// Shared speaking enquiry modal for the three public websites.
class SpeakingInquiryModal extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host{font-family:Arial,sans-serif;color:#0b1f3b}*{box-sizing:border-box}
        dialog{border:0;border-radius:16px;padding:0;width:min(640px,calc(100vw - 32px));max-height:calc(100dvh - 32px);color:#0b1f3b;background:#fff;box-shadow:0 20px 70px #0005}
        dialog::backdrop{background:#07172bc9}header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:24px 28px;border-bottom:1px solid #e1e7ed}h2{font-size:24px;margin:0}button{font:inherit;cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #5b89b3;outline-offset:3px}
        .close{background:transparent;border:0;font-size:28px;line-height:1;width:40px;height:40px;color:inherit}.content{padding:24px 28px}.intro{margin:0 0 24px;line-height:1.5;color:#526276}.fields{display:grid;grid-template-columns:1fr 1fr;gap:18px}.wide{grid-column:1/-1}label{display:flex;flex-direction:column;gap:7px;font-size:15px;font-weight:600}input,select,textarea{width:100%;min-width:0;border:1px solid #becbd8;border-radius:7px;padding:11px 12px;background:white;color:#0b1f3b;font:400 16px Arial,sans-serif;min-height:44px}textarea{resize:vertical;min-height:110px}.submit{width:100%;margin-top:24px;background:#0b1f3b;color:#fff;border:0;border-radius:8px;min-height:48px;padding:12px 20px;font-weight:600}.submit:disabled{opacity:.65;cursor:wait}.status{line-height:1.5;margin:16px 0 0}.error{color:#ac2020}.success{text-align:center;padding:24px 0;line-height:1.6}.success h3{font-size:24px} [hidden]{display:none!important}
        @media(max-width:500px){header,.content{padding:20px}.fields{grid-template-columns:1fr}h2{font-size:22px}}
      </style>
      <dialog aria-labelledby="speaking-title">
        <header><h2 id="speaking-title">Invite Samia to Speak</h2><button class="close" type="button" aria-label="Close speaking enquiry">×</button></header>
        <div class="content">
          <form>
            <p class="intro">Tell us about your event and how to contact you. All fields are required except the event time.</p>
            <div class="fields">
              <label>Name<input name="name" autocomplete="name" maxlength="120" required></label>
              <label>Email<input name="email" type="email" autocomplete="email" maxlength="254" required></label>
              <label class="wide">Contact number<input name="contact" type="tel" autocomplete="tel" maxlength="80" required></label>
              <label class="wide">Event / occasion<input name="eventName" placeholder="Conference, keynote, workshop..." maxlength="200" required></label>
              <label>Event date<input name="eventDate" type="date" required></label>
              <label>Time and timezone (optional)<input name="eventTime" placeholder="e.g. 2pm, Toronto time" maxlength="100"></label>
              <label class="wide">Location<input name="location" placeholder="City / venue or virtual platform" maxlength="300" required></label>
              <label class="wide">Event format<select name="format" required><option value="">Select event format</option><option value="in_person">In person</option><option value="virtual">Virtual</option></select></label>
              <label class="wide">Message<textarea name="message" placeholder="Share the audience, topic and any other event details." maxlength="5000" required></textarea></label>
            </div>
            <button class="submit" type="submit">Send enquiry</button>
            <p class="status" role="status" aria-live="polite" hidden></p>
          </form>
          <div class="success" role="status" hidden><h3>Thank you!</h3><p>Your speaking enquiry has been sent. Samia’s team will follow up with you.</p><button type="button" class="submit done">Close</button></div>
        </div>
      </dialog>`;
    this.dialog = root.querySelector('dialog');
    this.form = root.querySelector('form');
    this.status = root.querySelector('.status');
    this.success = root.querySelector('.success');
    this.submit = root.querySelector('.submit');
    this.pending = false;
    this.onTrigger = event => {
      const trigger = event.target instanceof Element && event.target.closest('[data-speaking-inquiry]');
      if (!trigger) return;
      event.preventDefault(); event.stopPropagation();
      if (this.dialog.open) return;
      if (!this.pending && !this.success.hidden) { this.form.reset(); this.form.hidden = false; this.success.hidden = true; }
      this.status.hidden = true;
      this.previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      this.dialog.showModal();
    };
    document.addEventListener('click', this.onTrigger, true);
    root.querySelectorAll('.close,.done').forEach(button => button.addEventListener('click', () => this.dialog.close()));
    this.dialog.addEventListener('click', event => { if (event.target === this.dialog) { const box = this.dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) this.dialog.close(); } });
    this.dialog.addEventListener('close', () => { document.body.style.overflow = this.previousOverflow || ''; });
    this.form.addEventListener('submit', async event => {
      event.preventDefault();
      if (this.pending || !this.form.reportValidity()) return;
      const values = Object.fromEntries(new FormData(this.form));
      const payload = Object.fromEntries(Object.entries(values).map(([key,value]) => [key,String(value).trim()]));
      // Require meaningful input even when a required text field contains spaces.
      if (Object.entries(payload).some(([key,value]) => key !== 'eventTime' && !value)) { this.showError('Please complete all required fields.'); return; }
      this.pending = true; this.submit.disabled = true; this.submit.textContent = 'Sending...'; this.status.hidden = true;
      try {
        const base = (this.getAttribute('api-base') || 'https://api.snsccs.com').replace(/\/$/, '');
        const response = await fetch(base + '/api/speaking-inquiries', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...payload,source:location.origin + location.pathname}) });
        const result = await response.json();
        if (!response.ok || result.success !== true) throw new Error(result.message || 'Your enquiry could not be sent. Please try again.');
        this.form.hidden = true; this.success.hidden = false; root.querySelector('.done').focus();
      } catch (error) { this.showError(error instanceof Error ? error.message : 'Your enquiry could not be sent. Please try again.'); }
      finally { this.pending = false; this.submit.disabled = false; this.submit.textContent = 'Send enquiry'; }
    });
  }
  showError(message) { this.status.textContent = message; this.status.className = 'status error'; this.status.hidden = false; }
  disconnectedCallback() { document.removeEventListener('click',this.onTrigger,true); if (this.dialog?.open) { this.dialog.close(); document.body.style.overflow = this.previousOverflow || ''; } }
}
if (!customElements.get('speaking-inquiry-modal')) customElements.define('speaking-inquiry-modal', SpeakingInquiryModal);
