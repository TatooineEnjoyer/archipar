"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

const navItems = [
  { label: "Комплексы", href: "/bath-complexes" },
  { label: "Бани", href: "/baths" },
  { label: "Сауны", href: "/saunas" },
  { label: "Хамамы", href: "/hamams" },
  { label: "Проекты", href: "/#portfolio" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frameId = 0;

    function handleScroll() {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollProgress = Math.min(scrollY / 180, 1);
  const isScrolled = scrollY > 36;

  const barParallaxY = -18 + scrollProgress * 18 + Math.min(scrollY * 0.018, 7);
  const glowParallaxY = -Math.min(scrollY * 0.035, 12);

  const requestButtonStyle = {
    "--header-request-bg": isScrolled
      ? "rgba(138, 106, 67, 0.86)"
      : "rgba(255, 255, 255, 0.10)",
    "--header-request-border": isScrolled
      ? "rgba(138, 106, 67, 0.78)"
      : "rgba(255, 255, 255, 0.42)",
    "--header-request-color": "#ffffff",
    "--header-request-hover-bg": isScrolled
      ? "rgba(111, 83, 50, 0.96)"
      : "rgba(255, 255, 255, 0.92)",
    "--header-request-hover-color": isScrolled ? "#ffffff" : "#111111",
    "--header-request-shadow": isScrolled
      ? "0 12px 34px rgba(0, 0, 0, 0.16), 0 0 18px rgba(200, 170, 120, 0.12)"
      : "0 10px 28px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
  } as CSSProperties;

  return (
    <header
      className={`site-header fixed left-0 top-0 z-50 isolate w-full overflow-hidden transition-[padding] duration-700 ease-out ${
        isScrolled ? "py-4" : "py-6 md:py-8"
      }`}
    >
      {/* Прозрачная полоса с параллаксом */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full border-b border-black/[0.04] shadow-[0_18px_55px_rgba(0,0,0,0.055)] backdrop-blur-xl"
        style={{
          opacity: scrollProgress * 0.92,
          transform: `translate3d(0, ${barParallaxY}px, 0)`,
          background:
            "linear-gradient(180deg, rgba(248, 245, 240, 0.52) 0%, rgba(248, 245, 240, 0.34) 100%)",
        }}
      />

      {/* Лёгкий золотой отблеск внутри полосы */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
        style={{
          opacity: scrollProgress * 0.45,
          transform: `translate3d(0, ${glowParallaxY}px, 0)`,
          background:
            "radial-gradient(circle at 50% -40%, rgba(200, 170, 120, 0.26), transparent 62%)",
        }}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Логотип бюро */}
        <Link
          href="/"
          aria-label="ARCHIPAR"
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
        >
          <div className="relative h-8 w-8 overflow-hidden md:h-9 md:w-9">
            <Image
              src="/images/logo/archipar-logo.png"
              alt="ARCHIPAR"
              fill
              priority
              className={`object-contain transition-all duration-500 group-hover:scale-[1.03] ${
                !isScrolled ? "invert brightness-200" : ""
              }`}
            />
          </div>

          <span
            className={`font-serif text-sm font-light uppercase tracking-[0.25em] transition-colors duration-500 md:text-base ${
              isScrolled ? "text-[#121212]" : "text-white"
            }`}
          >
            ARCHIPAR
          </span>
        </Link>

        {/* Навигация для больших экранов */}
        <div className="hidden items-center gap-8 md:flex">
          <nav
            className={`flex items-center gap-6 text-[11px] font-light uppercase tracking-[0.2em] transition-colors duration-500 lg:gap-8 ${
              isScrolled ? "text-black/70" : "text-white/70"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled
                    ? "hover:text-[#121212] after:bg-[#8a6a43]"
                    : "hover:text-white after:bg-[#c8aa78]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#request"
            style={requestButtonStyle}
            className="header-request-link border px-6 py-2.5 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md transition-all duration-300"
          >
            Оставить заявку
          </Link>
        </div>

        {/* Навигация для телефонов */}
        <div className="flex items-center gap-5 md:hidden">
          <Link
            href="/#portfolio"
            className={`text-[11px] font-light uppercase tracking-widest transition-colors duration-500 ${
              isScrolled ? "text-black/70" : "text-white/80"
            }`}
          >
            Проекты
          </Link>

          <Link
            href="/#request"
            style={requestButtonStyle}
            className="header-request-link border px-4 py-2 text-[10px] font-medium uppercase tracking-widest backdrop-blur-md transition-all duration-300"
          >
            Заявка
          </Link>
        </div>
      </div>
    </header>
  );
}
