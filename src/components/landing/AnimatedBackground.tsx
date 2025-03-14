"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className }: AnimatedBackgroundProps = {}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-black",
        className,
      )}
    >
      {/* Mountain silhouette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] bg-blue-900/10 dark:bg-blue-900/20"
        style={{
          clipPath:
            "polygon(0% 100%, 20% 60%, 40% 80%, 60% 40%, 80% 70%, 100% 30%, 100% 100%)",
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      {/* Floating clouds */}
      <div
        className="absolute left-[10%] top-[20%] h-16 w-32 rounded-full bg-white/30 dark:bg-white/10 blur-xl"
        style={{
          transform: `translate(${Math.sin(scrollY * 0.001) * 20}px, ${Math.cos(scrollY * 0.001) * 10}px)`,
        }}
      />
      <div
        className="absolute right-[15%] top-[30%] h-20 w-40 rounded-full bg-white/40 dark:bg-white/10 blur-xl"
        style={{
          transform: `translate(${Math.cos(scrollY * 0.002) * 15}px, ${Math.sin(scrollY * 0.002) * 15}px)`,
        }}
      />
      <div
        className="absolute left-[30%] top-[50%] h-12 w-28 rounded-full bg-white/30 dark:bg-white/10 blur-xl"
        style={{
          transform: `translate(${Math.sin(scrollY * 0.0015) * 25}px, ${Math.cos(scrollY * 0.0015) * 12}px)`,
        }}
      />

      {/* Subtle particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-500/20 dark:bg-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + (Math.sin(scrollY * 0.002 + i) + 1) / 4,
              transform: `scale(${1 + Math.sin(scrollY * 0.001 + i) * 0.5})`,
              boxShadow: "0 0 8px 2px rgba(59, 130, 246, 0.1)",
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-transparent to-white/50 dark:to-slate-950/50"
        style={{ opacity: 0.3 + scrollY / 2000 }}
      />
    </div>
  );
};

export default AnimatedBackground;
