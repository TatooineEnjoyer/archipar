"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

export default function RevealGroup({
  children,
  className = "",
  threshold = 0.18,
}: RevealGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = groupRef.current;

    if (!group) {
      return;
    }

    const items = Array.from(
      group.querySelectorAll<HTMLElement>("[data-reveal-item]"),
    );

    if (items.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-revealed"));
      return;
    }

    const mobile = window.matchMedia("(max-width: 767px)").matches;

    if (mobile) {
      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const item = entry.target as HTMLElement;
            item.style.setProperty("--reveal-delay", "60ms");
            item.classList.add("is-revealed");
            itemObserver.unobserve(item);
          });
        },
        {
          threshold: 0.14,
          rootMargin: "0px 0px -7% 0px",
        },
      );

      items.forEach((item) => itemObserver.observe(item));

      return () => itemObserver.disconnect();
    }

    const groupObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        items.forEach((item, index) => {
          item.style.setProperty("--reveal-delay", `${index * 95}ms`);
          item.classList.add("is-revealed");
        });

        groupObserver.disconnect();
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    groupObserver.observe(group);

    return () => groupObserver.disconnect();
  }, [threshold]);

  return (
    <div ref={groupRef} className={`reveal-group reveal-group--ready ${className}`}>
      {children}
    </div>
  );
}
