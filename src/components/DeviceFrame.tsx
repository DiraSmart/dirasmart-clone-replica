import type { ReactNode } from "react";

interface DeviceFrameProps {
  children: ReactNode;
  className?: string;
  /** Adds a gentle 3D tilt on hover (pointer devices only, motion-safe). */
  tilt?: boolean;
}

/**
 * CSS phone bezel for raw app screenshots, so they read as a product mockup instead of a flat image.
 * Screenshots that already include a rendered device should not be wrapped.
 */
const DeviceFrame = ({ children, className = "", tilt = true }: DeviceFrameProps) => (
  <div
    className={`relative inline-block rounded-[2.4rem] bg-[#0d1117] p-[10px] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.08)] ${
      tilt
        ? "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out-strong [@media(hover:hover)]:hover:[transform:perspective(1200px)_rotateY(-6deg)_rotateX(3deg)]"
        : ""
    } ${className}`}
  >
    {/* camera / speaker */}
    <div aria-hidden="true" className="absolute left-1/2 top-[14px] z-10 h-[6px] w-[68px] -translate-x-1/2 rounded-full bg-black/70" />
    <div className="overflow-hidden rounded-[1.9rem] bg-black">{children}</div>
  </div>
);

export default DeviceFrame;
