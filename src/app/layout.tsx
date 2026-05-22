import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

// Подключение шрифта для заголовков и логотипа
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

// Подключение шрифта для основного текста
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// SEO-метаданные и конфигурация иконок
export const metadata: Metadata = {
  title: "ARCHIPAR — Премиальные банные комплексы под ключ",
  description:
    "ARCHIPAR проектирует и реализует премиальные банные комплексы: бани, сауны, хамамы, зоны отдыха, инженерия климата и авторские сценарии пара.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/archipar-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo/archipar-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col justify-between antialiased">
        {/* Контент страницы */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Глобальный подвал сайта */}
        <Footer />
      </body>
    </html>
  );
}
