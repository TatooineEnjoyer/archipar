"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";

const centerNavItems = [
  { label: "Комплексы", href: "/bath-complexes" },
  { label: "Бани", href: "/baths" },
  { label: "Сауны", href: "/saunas" },
  { label: "Хамамы", href: "/hamams" },
];

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollYRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const updateFromScroll = () => {
      frameRef.current = null;

      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY <= 8) {
        setIsCompact(false);
      } else if (delta > 3) {
        setIsCompact(true);
      } else if (delta < -8) {
        setIsCompact(false);
      }

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

  const toggleHeader = () => {
    setIsCompact((current) => !current);
  };

  const handleGlassClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest("a, button")) {
      return;
    }

    toggleHeader();
  };

  const handleGlassKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleHeader();
    }
  };

  return (
    <header
      className={`site-header ${
        isCompact ? "site-header--compact" : "site-header--expanded"
      }`}
    >
      <div
        className="site-header__inner"
        onClick={handleGlassClick}
        onKeyDown={handleGlassKeyDown}
        role="button"
        tabIndex={0}
        aria-label={isCompact ? "Развернуть меню ARCHIPAR" : "Свернуть меню ARCHIPAR"}
      >
        <button
          type="button"
          className="site-header__brand"
          onClick={(event) => {
            event.stopPropagation();
            toggleHeader();
          }}
          aria-expanded={!isCompact}
          aria-label={isCompact ? "Развернуть меню" : "Свернуть меню"}
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
        </button>

        <nav
          className="site-header__center-nav"
          aria-label="Основная навигация"
          aria-hidden={isCompact}
        >
          {centerNavItems.map((item) => (
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

        <div className="site-header__right-actions" aria-hidden={isCompact}>
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

        <div className="site-header__mobile-actions" aria-hidden={isCompact}>
          <Link
            href="/#request"
            className="site-header__mobile-cta"
            tabIndex={isCompact ? -1 : undefined}
          >
            Заявка
          </Link>
        </div>
      </div>
    </header>
  );
}
