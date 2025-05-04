import { cn } from "@/lib/utils";
import React from "react";

type GridBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function GridBackgroundDemo({ children, className }: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full bg-white dark:bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          // ↓↓↓ Subtle lines in dark mode
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
        )}
      />
      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Actual content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
