import { useEffect } from 'react';

/**
 * Adds an `is-visible` class to any element with `data-reveal` as it scrolls
 * into view, driving the fade/slide-up animations defined in index.css.
 *
 * Sections load their content async (from the API), so a MutationObserver
 * watches for newly added [data-reveal] elements and registers them too.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // Very old browser: just show everything.
      const showAll = () =>
        document
          .querySelectorAll<HTMLElement>('[data-reveal]')
          .forEach((el) => el.classList.add('is-visible'));
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeAll = () =>
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
        .forEach((el) => io.observe(el));

    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
