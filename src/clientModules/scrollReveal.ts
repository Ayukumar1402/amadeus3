/**
 * Scroll-triggered reveal animations. Any element with class="reveal"
 * fades/lifts into place the first time it enters the viewport (see the
 * .reveal / .reveal.is-visible rules in custom.css). This is on top of the
 * load-time `.fade-section` keyframe — that one plays once when a page
 * mounts, this one plays as the agent actually scrolls, so long topic
 * pages (flowcharts, command tables, GEVR walkthroughs) feel alive as you
 * read down them rather than dumping everything in at once.
 *
 * Progressive enhancement: `.js-scroll-reveal` is added to <html> only
 * once this module runs, and custom.css shows everything by default
 * unless that class is present — so nothing depends on JS to be readable.
 * Docusaurus is a client-rendered SPA, so a MutationObserver re-scans for
 * newly mounted `.reveal` nodes after client-side navigations.
 */

function initScrollReveal(): void {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  document.documentElement.classList.add('js-scroll-reveal');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    {rootMargin: '0px 0px -8% 0px', threshold: 0.05},
  );

  const observeAll = () => {
    document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((el) => {
      if (prefersReducedMotion) {
        el.classList.add('is-visible');
      } else {
        io.observe(el);
      }
    });
  };

  observeAll();

  const mo = new MutationObserver(() => observeAll());
  mo.observe(document.body, {childList: true, subtree: true});
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
}

export default (): void => {};
