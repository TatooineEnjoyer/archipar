"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Комплексы", href: "/bath-complexes" },
  { label: "Бани", href: "/baths" },
  { label: "Сауны", href: "/saunas" },
  { label: "Хамамы", href: "/hamams" },
  { label: "Кейсы", href: "/#cases" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandOpacity = Math.max(0, 1 - scrollY / 120);
  const brandTranslate = Math.min(scrollY * 0.18, 24);
  const brandVisible = scrollY < 130;

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8 lg:px-14">
      <div className="flex items-start justify-between gap-4">
        <nav className="flex max-w-[calc(100vw-32px)] items-center gap-1 rounded-full border border-black/5 bg-[#f4f0e8]/75 px-2 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/72 shadow-[0_20px_70px_rgba(0,0,0,.10)] backdrop-blur-xl md:gap-2 md:px-3 md:text-[11px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-3 transition hover:bg-black hover:text-white md:px-5"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#request"
            className="hidden rounded-full bg-black px-5 py-3 text-white transition hover:bg-[#8a6a43] md:block"
          >
            Заявка
          </Link>
        </nav>

        <Link
          href="/"
          aria-label="ARCHIPAR"
          className="hidden items-center gap-3 rounded-full border border-black/5 bg-[#f4f0e8]/75 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,.10)] backdrop-blur-xl transition duration-500 md:flex"
          style={{
            opacity: brandOpacity,
            transform: brandVisible
              ? `translateY(-${brandTranslate}px)`
              : "translateY(-32px)",
            pointerEvents: brandVisible ? "auto" : "none",
          }}
        >
          <Image
            src="/images/logo/archipar-logo.png"
            alt="ARCHIPAR"
            width={30}
            height={30}
            className="h-8 w-8 object-contain"
          />

          <span className="text-xs font-extrabold uppercase tracking-[0.32em]">
            ARCHIPAR
          </span>
        </Link>
      </div>
    </header>
  );
}
