import type { Metadata, Viewport } from "next";
import { Jost, Onest } from "next/font/google";
import "./globals.css";

// Премиальная скандинавская геометрия для заголовков и акцентов
const fontDisplay = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

// Абсолютно чистый и открытый шрифт для легкого чтения текста
const fontBody = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARCHIPAR — Премиальные банные комплексы под ключ",
  description:
    "Архитектурное проектирование и реализация премиальных банных комплексов под ключ. Авторские велнес-пространства: бани, сауны, хамамы, зоны отдыха и точная инженерия климата.",
  keywords: [
    "ARCHIPAR", 
    "банные комплексы", 
    "премиальные бани", 
    "строительство бань под ключ", 
    "хамам", 
    "сауна", 
    "дизайн бани"
  ],
  authors: [{ name: "ARCHIPAR" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/archipar-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo/archipar-logo.png",
  },
  openGraph: {
    title: "ARCHIPAR — Премиальные банные комплексы под ключ",
    description: "Архитектурное проектирование и реализация премиальных банных комплексов. Бани, сауны, хамамы и зоны отдыха в единой инженерной системе.",
    siteName: "ARCHIPAR",
    locale: "ru_RU",
    type: "website",
  },
};

// Настройка вьюпорта вынесена по современным стандартам Next.js отдельным объектом
export const viewport: Viewport = {
  themeColor: "#f4f0e8", // Красивый благородный цвет для мобильных браузеров в тон сайта
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${fontDisplay.variable} ${fontBody.variable} scroll-smooth`}
    >
      <body className="bg-[#f4f0e8] text-[#111] antialiased selection:bg-[#8a6a43]/20">
        {children}
      </body>
    </html>
  );
}
