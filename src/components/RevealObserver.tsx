import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reveal-on-scroll for any element carrying `data-reveal`.
 * Adds `is-visible` once the element enters the viewport; CSS in index.css does the motion.
 * Watches the DOM so lazily loaded sections are picked up automatically.
 */
const RevealObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    };
    observeAll();

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
};

export default RevealObserver;
