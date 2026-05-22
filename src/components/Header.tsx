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
        
        {/* Логотип с плавным исчезновением при скролле */}
        <Link
          href="/"
          aria-label="ARCHIPAR"
          className={`premium-glass group flex shrink-0 items-center gap-3 rounded-full border border-white/25 px-4 py-2.5 text-black shadow-xl transition-colors duration-500 md:gap-4 md:px-5 ${
            compact ? "bg-[#f4f0e8]/90" : "bg-[#f4f0e8]/75"
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
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain transition duration-500 group-hover:scale-105 md:h-10 md:w-10"
          />
          <span className="hidden font-serif text-[14px] font-light uppercase tracking-[0.25em] text-black/90 sm:block md:text-[15px]">
            ARCHIPAR
          </span>
        </Link>

        {/* Правая часть: Навигация */}
        <div className="ml-auto flex items-center justify-end gap-2">
          
          {/* Десктопное меню */}
          <nav className={`premium-glass hidden items-center gap-1 rounded-full border border-white/25 px-2 py-2 font-serif text-[11px] font-light uppercase tracking-[0.15em] text-black/80 shadow-xl transition-colors duration-500 md:flex ${
            compact ? "bg-[#f4f0e8]/90" : "bg-[#f4f0e8]/80"
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-[#8a6a43] hover:text-white hover:tracking-[0.18em] focus-visible:bg-[#8a6a43] focus-visible:text-white active:bg-[#6f5332] active:text-white lg:px-5"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#request"
              className="rounded-full bg-[#8a6a43] px-5 py-2.5 text-white font-medium shadow-md shadow-[#8a6a43]/15 transition-all duration-300 hover:bg-[#6f5332] hover:shadow-lg focus-visible:bg-[#6f5332] active:bg-[#5d4428]"
            >
              Заявка
            </Link>
          </nav>

          {/* Мобильное меню */}
          <nav className="premium-glass flex items-center gap-1 rounded-full border border-white/25 bg-[#f4f0e8]/85 px-1.5 py-1.5 font-serif text-[11px] font-light uppercase tracking-[0.12em] text-black/80 shadow-xl md:hidden">
            <Link
              href="/bath-complexes"
              className="rounded-full px-3 py-2 transition hover:bg-[#8a6a43] hover:text-white"
            >
              Комплексы
            </Link>
            <Link
              href="/#request"
              className="rounded-full bg-[#8a6a43] px-3 py-2 text-white font-medium transition hover:bg-[#6f5332]"
            >
              Заявка
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}
