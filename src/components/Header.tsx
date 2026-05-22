"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Комплексы", href: "/bath-complexes" },
  { label: "Бани", href: "/baths" },
  { label: "Сауны", href: "/saunas" },
  { label: "Хамамы", href: "/hamams" },
  { label: "Проекты", href: "/#portfolio" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-black/10 bg-[#f8f5f0]/92 py-4 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="container-premium flex items-center justify-between">
        <Link
          href="/"
          aria-label="ARCHIPAR"
          className="group flex items-center gap-3"
        >
          <div className="relative h-8 w-8 overflow-hidden md:h-9 md:w-9">
            <Image
              src="/images/logo/archipar-logo.png"
              alt="ARCHIPAR"
              fill
              priority
              sizes="36px"
              className={`object-contain transition-all duration-500 group-hover:scale-[1.03] ${
                isScrolled ? "" : "invert brightness-200"
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

        <div className="hidden items-center gap-8 md:flex">
          <nav
            className={`flex items-center gap-6 text-[11px] font-light uppercase tracking-[0.2em] transition-colors duration-500 lg:gap-8 ${
              isScrolled ? "text-black/70" : "text-white/75"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 transition-colors duration-300 hover:text-[#c8aa78]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#request"
            className="px-6 py-2.5 text-[10px] font-semibold uppercase tracking-widest"
          >
            Оставить заявку
          </Link>
        </div>

        <div className="flex items-center gap-5 md:hidden">
          <Link
            href="/#portfolio"
            className={`text-[11px] font-light uppercase tracking-widest transition-colors duration-500 ${
              isScrolled ? "text-black/70" : "text-white/85"
            }`}
          >
            Проекты
          </Link>

          <Link
            href="/#request"
            className="px-4 py-2 text-[10px] font-semibold uppercase tracking-widest"
          >
            Заявка
          </Link>
        </div>
      </div>
    </header>
  );
}
