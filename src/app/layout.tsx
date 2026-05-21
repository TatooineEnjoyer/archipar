import type { Metadata } from "next";
import { Manrope, Tenor_Sans } from "next/font/google";
import "./globals.css";

const tenor = Tenor_Sans({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ARCHIPAR — Премиальные банные комплексы под ключ",
  description:
    "ARCHIPAR проектирует и реализует премиальные банные комплексы: бани, сауны, хамамы, зоны отдыха, инженерия климата и авторские сценарии пара.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${tenor.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
