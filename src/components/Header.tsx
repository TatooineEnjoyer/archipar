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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandOpacity = Math.max(0, 1 - scrollY / 130);
  const brandTranslate = Math.min(scrollY * 0.22, 34);
  const brandVisible = scrollY < 135;

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8 lg:px-14">
      <div className="flex items-start justify-between gap-4">
        <Link
          href="/"
          aria-label="ARCHIPAR"
          className="premium-glass flex items-center gap-3 rounded-full border border-black/5 px-4 py-3 transition duration-500"
          style={{
            opacity: brandOpacity,
            transform: brandVisible
              ? `translateY(-${brandTranslate}px)`
              : "translateY(-36px)",
            pointerEvents: brandVisible ? "auto" : "none",
          }}
        >
          <Image
            src="/images/logo/archipar-logo.png"
            alt="ARCHIPAR"
            width={30}
            height={30}
            className="h-7 w-7 object-contain md:h-8 md:w-8"
          />

          <span className="hidden text-xs font-medium uppercase tracking-[0.32em] text-black/82 sm:block">
            ARCHIPAR
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="premium-glass hidden items-center gap-1 rounded-full border border-black/5 px-2 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-black/72 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 transition hover:bg-black hover:text-white lg:px-5"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#request"
              className="rounded-full bg-black px-5 py-3 text-white transition hover:bg-[#8a6a43]"
            >
              Заявка
            </Link>
          </nav>

          <nav className="premium-glass flex items-center gap-1 rounded-full border border-black/5 px-2 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-black/72 md:hidden">
            <Link
              href="/bath-complexes"
              className="rounded-full px-3 py-3 transition hover:bg-black hover:text-white"
            >
              Комплексы
            </Link>

            <Link
              href="/#request"
              className="rounded-full bg-black px-3 py-3 text-white"
            >
              Заявка
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
