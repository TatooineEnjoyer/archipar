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

  const compact = scrollY > 40;
  const brandOpacity = Math.max(0, 1 - scrollY / 150);
  const brandTranslate = Math.min(scrollY * 0.42, 72);
  const brandScale = Math.max(0.9, 1 - scrollY / 1600);
  const brandVisible = scrollY < 170;

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-[1280px] items-start justify-between gap-4">
        <Link
          href="/"
          aria-label="ARCHIPAR"
          className={`premium-glass group flex shrink-0 items-center gap-3 rounded-full border border-white/25 px-4 py-3 text-black shadow-xl transition-colors duration-500 md:gap-4 md:px-5 ${
            compact ? "bg-[#f4f0e8]/88" : "bg-[#f4f0e8]/72"
          }`}
          style={{
            opacity: brandOpacity,
            transform: `translate3d(0, -${brandTranslate}px, 0) scale(${brandScale})`,
            pointerEvents: brandVisible ? "auto" : "none",
          }}
        >
          <Image
            src="/images/logo/archipar-logo.png"
            alt="ARCHIPAR"
            width={48}
            height={48}
            priority
            className="h-10 w-10 object-contain transition duration-500 group-hover:scale-105 md:h-12 md:w-12"
          />
          <span className="hidden text-[15px] font-semibold uppercase tracking-[0.3em] text-black/86 sm:block md:text-base">
            ARCHIPAR
          </span>
        </Link>

        <div className="ml-auto flex items-center justify-end gap-2">
          <nav className="premium-glass hidden items-center gap-1 rounded-full border border-white/25 bg-[#f4f0e8]/82 px-2 py-2 text-[12px] font-semibold uppercase tracking-[0.13em] text-black/74 shadow-xl md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 transition hover:bg-[#8a6a43] hover:text-white focus-visible:bg-[#8a6a43] focus-visible:text-white active:bg-[#6f5332] active:text-white lg:px-5"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#request"
              className="rounded-full bg-[#8a6a43] px-5 py-3 text-white shadow-lg shadow-[#8a6a43]/20 transition hover:bg-[#6f5332] hover:text-white focus-visible:bg-[#6f5332] focus-visible:text-white active:bg-[#5d4428] active:text-white"
            >
              Заявка
            </Link>
          </nav>

          <nav className="premium-glass flex items-center gap-1 rounded-full border border-white/25 bg-[#f4f0e8]/86 px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-black/76 shadow-xl md:hidden">
            <Link
              href="/bath-complexes"
              className="rounded-full px-3 py-3 transition hover:bg-[#8a6a43] hover:text-white focus-visible:bg-[#8a6a43] focus-visible:text-white active:bg-[#6f5332] active:text-white"
            >
              Комплексы
            </Link>
            <Link
              href="/#request"
              className="rounded-full bg-[#8a6a43] px-3 py-3 text-white transition hover:bg-[#6f5332] hover:text-white focus-visible:bg-[#6f5332] focus-visible:text-white active:bg-[#5d4428] active:text-white"
            >
              Заявка
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
