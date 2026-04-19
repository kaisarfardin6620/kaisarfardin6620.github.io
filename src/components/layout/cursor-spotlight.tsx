"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    const root = document.documentElement;

    const update = (x: number, y: number) => {
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
    };

    const onMove = (event: MouseEvent) => {
      update(event.clientX, event.clientY);
    };

    const onLeave = () => {
      update(-9999, -9999);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] cursor-spotlight"
    />
  );
}
