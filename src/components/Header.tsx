"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const navItems = [
  { label: "Комплексы", href: "/bath-complexes" },
  { label: "Бани", href: "/baths" },
  { label: "Сауны", href: "/saunas" },
  { label: "Хамамы", href: "/hamams" },
];

const isDesktopPointer = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const isMobilePointer = () =>
  window.matchMedia("(max-width: 980px), (hover: none), (pointer: coarse)")
    .matches;

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const mobileBrandPrimedRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const initialScrollY = Math.max(window.scrollY, 0);
    lastScrollYRef.current = initialScrollY;
    setIsCompact(initialScrollY > 4 || isMobilePointer());

    const updateFromScroll = () => {
      frameRef.current = null;

      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY <= 4) {
        // На компьютере полное меню возвращается только на самой вершине.
        // На телефоне остаётся компактный логотип: первое касание раскрывает меню.
        setIsCompact(isMobilePointer());
        mobileBrandPrimedRef.current = false;
      } else if (delta > 0.5) {
        // На любом движении вниз меню сразу сворачивается.
        setIsCompact(true);
        mobileBrandPrimedRef.current = false;
      }

      // Движение вверх намеренно ничего не раскрывает.
      lastScrollYRef.current = currentScrollY;
    };

    const handleScroll = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateFromScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleBrandHover = () => {
    if (isDesktopPointer()) {
      setIsCompact(false);
    }
  };

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isMobilePointer()) {
      return;
    }

    if (!mobileBrandPrimedRef.current) {
      event.preventDefault();
      mobileBrandPrimedRef.current = true;
      setIsCompact(false);
    }
  };

  return (
    <header
      className={`site-header ${
        isCompact ? "site-header--compact" : "site-header--expanded"
      }`}
    >
      <div className="site-header__inner">
        <Link
          href="/"
          className="site-header__brand"
          onMouseEnter={handleBrandHover}
          onFocus={handleBrandHover}
          onClick={handleBrandClick}
          aria-label="ARCHIPAR — перейти на главную"
        >
          <span className="site-header__logo-mark" aria-hidden="true">
            <Image
              src="/images/logo/archipar-logo.png"
              alt=""
              fill
              priority
              sizes="38px"
              className="site-header__logo-image"
            />
          </span>

          <span className="site-header__wordmark">ARCHIPAR</span>

          <ChevronRight
            className="site-header__toggle-icon"
            aria-hidden="true"
            strokeWidth={1.4}
          />
        </Link>

        <div className="site-header__menu-cluster" aria-hidden={isCompact}>
          <nav className="site-header__center-nav" aria-label="Основная навигация">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__nav-link"
                tabIndex={isCompact ? -1 : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__right-actions">
            <Link
              href="/#portfolio"
              className="site-header__projects-link"
              tabIndex={isCompact ? -1 : undefined}
            >
              Проекты
            </Link>

            <Link
              href="/#request"
              className="site-header__cta"
              tabIndex={isCompact ? -1 : undefined}
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
