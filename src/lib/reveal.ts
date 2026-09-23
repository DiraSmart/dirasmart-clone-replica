import type { CSSProperties } from "react";

/** Inline style for a staggered reveal delay; pair with `data-reveal` on the element. */
export const revealDelay = (index: number, stepMs = 70): CSSProperties =>
  ({ "--reveal-delay": `${index * stepMs}ms` }) as CSSProperties;
