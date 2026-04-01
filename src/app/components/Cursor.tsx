"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHover(true);
    const handleLeave = () => setHover(false);

    window.addEventListener("mousemove", move);

    // detect hover on buttons & links
    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-[999] rounded-full transition-all duration-150 
${hover ? "w-12 h-12 bg-primary/40 cursor-glow" : "w-6 h-6 bg-primary/20"} 
border border-primary`}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}