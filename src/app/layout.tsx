import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

// Премиальная антиква для заголовков
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

// Геометрический гротеск для основного текста
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorantGaramond.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
