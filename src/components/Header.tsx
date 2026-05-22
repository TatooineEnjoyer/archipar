"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Типологии", href: "/#typologies" },
  { label: "Парные", href: "/baths" },
  { label: "Сауны", href: "/saunas" },
  { label: "Хамамы", href: "/hamams" },
  { label: "Портфолио", href: "/#portfolio" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#f8f5f0]/80 border-b border-black/5 py-4 backdrop-blur-md shadow-sm"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="container-premium max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
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
              className={`object-contain transition-all duration-500 group-hover:scale-103 ${
                !isScrolled ? "invert brightness-200" : ""
              }`}
            />
          </div>
          <span
            className={`font-serif text-sm font-light tracking-[0.25em] transition-colors duration-500 uppercase md:text-base ${
              isScrolled ? "text-[#121212]" : "text-white"
            }`}
          >
            ARCHIPAR
          </span>
        </Link>

        {/* Навигация для десктопа */}
        <div className="hidden items-center gap-8 md:flex">
          <nav
            className={`flex items-center gap-6 lg:gap-8 font-light text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${
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
            className={`border px-6 py-2.5 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 ${
              isScrolled
                ? "border-[#121212] bg-[#121212] text-white hover:bg-[#8a6a43] hover:border-[#8a6a43]"
                : "border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
            }`}
          >
            Инициировать проект
          </Link>
        </div>

        {/* Навигация для мобильных устройств */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/#portfolio"
            className={`text-[10px] uppercase tracking-widest font-light transition-colors duration-500 ${
              isScrolled ? "text-black/60" : "text-white/60"
            }`}
          >
            Работы
          </Link>
          <Link
            href="/#request"
            className={`border px-4 py-2 text-[9px] font-semibold uppercase tracking-widest transition-all duration-300 ${
              isScrolled
                ? "border-[#121212] bg-[#121212] text-white"
                : "border-white/30 bg-white/10 text-white backdrop-blur-sm"
            }`}
          >
            Бриф
          </Link>
        </div>

      </div>
    </header>
  );
}
