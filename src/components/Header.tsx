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

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-[1180px] items-start justify-between gap-4">
        <Link
          href="/"
          aria-label="ARCHIPAR"
          className={`premium-glass group flex items-center gap-3 rounded-full border border-white/25 px-4 py-3 text-black shadow-xl transition duration-500 md:gap-4 md:px-5 ${
            compact ? "bg-[#f4f0e8]/88" : "bg-[#f4f0e8]/72"
          }`}
        >
          <Image
            src="/images/logo/archipar-logo.png"
            alt="ARCHIPAR"
            width={44}
            height={44}
            priority
            className="h-9 w-9 object-contain transition duration-500 group-hover:scale-105 md:h-11 md:w-11"
          />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-black/86 sm:block md:text-[15px]">
            ARCHIPAR
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="premium-glass hidden items-center gap-1 rounded-full border border-white/25 bg-[#f4f0e8]/82 px-2 py-2 text-[12px] font-semibold uppercase tracking-[0.13em] text-black/74 shadow-xl md:flex">
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
              className="rounded-full bg-[#111] px-5 py-3 text-white shadow-lg shadow-black/10 transition hover:bg-[#8a6a43] hover:text-white"
            >
              Заявка
            </Link>
          </nav>

          <nav className="premium-glass flex items-center gap-1 rounded-full border border-white/25 bg-[#f4f0e8]/86 px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-black/76 shadow-xl md:hidden">
            <Link
              href="/bath-complexes"
              className="rounded-full px-3 py-3 transition hover:bg-black hover:text-white"
            >
              Комплексы
            </Link>
            <Link
              href="/#request"
              className="rounded-full bg-[#111] px-3 py-3 text-white transition hover:bg-[#8a6a43] hover:text-white"
            >
              Заявка
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
