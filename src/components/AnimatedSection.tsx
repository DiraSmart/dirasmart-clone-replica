import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

/** Reveal-on-scroll without framer-motion: keeps the animation chunk off the home's critical path. */
const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { rootMargin: "-80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden =
    direction === "up" ? "translate3d(0,24px,0)" :
    direction === "down" ? "translate3d(0,-24px,0)" :
    direction === "left" ? "translate3d(24px,0,0)" : "translate3d(-24px,0,0)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translate3d(0,12px,0)",
        transition: `opacity 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
