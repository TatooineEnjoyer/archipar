import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import RevealGroup from "@/components/RevealGroup";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Flame,
  MapPin,
  Waves,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Банные комплексы — портфолио ARCHIPAR",
  description:
    "Отдельная страница-презентация банных комплексов ARCHIPAR: Olymp City, The Bath House, Душа Красногорска, Ростов 360 м² и Парная-Ладья.",
};

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  location: string;
  address?: string;
  description: string;
  hero: string;
  accent?: string;
  stats: { value: string; label: string }[];
  points: string[];
  gallery: { src: string; label: string; className?: string }[];
};

const projects: Project[] = [
  {
    id: "olymp-city",
    eyebrow: "Турция · Аланья",
    title: "Olymp City",
    location: "Турция, Аланья",
    description:
      "Велнес-пространство для премиального жилого комплекса на побережье Аланьи: две самостоятельные банные зоны, отдельные лоджии со спа-креслами и кроватями, купели и зоны отдыха с напитками.",
    hero: "/images/bath-complexes/olymp-city/hero.jpg",
    accent: "/images/bath-complexes/olymp-city/loggia-spa.jpg",
    stats: [
      { value: "2", label: "банных комплекса" },
      { value: "4", label: "ключевые зоны отдыха" },
      { value: "SPA", label: "лоджии и купели" },
    ],
    points: [
      "Две парные с разными сценариями отдыха",
      "Две зоны отдыха для приватного восстановления",
      "Отдельные лоджии со спа-креслами и кроватями",
      "Купели и охлаждение после прогрева",
      "Зоны отдыха с напитками и мягким светом",
    ],
    gallery: [
      { src: "/images/bath-complexes/olymp-city/steam-01.jpg", label: "Парная 01", className: "md:col-span-6" },
      { src: "/images/bath-complexes/olymp-city/steam-02.jpg", label: "Парная 02", className: "md:col-span-6" },
      { src: "/images/bath-complexes/olymp-city/lounge-01.jpg", label: "Зона отдыха 01", className: "md:col-span-6" },
      { src: "/images/bath-complexes/olymp-city/lounge-02.jpg", label: "Зона отдыха 02", className: "md:col-span-6" },
      { src: "/images/bath-complexes/olymp-city/loggia-spa.jpg", label: "Лоджия со SPA-креслами", className: "md:col-span-7" },
      { src: "/images/bath-complexes/olymp-city/plunge.jpg", label: "Купели", className: "md:col-span-5" },
    ],
  },
  {
    id: "the-bath-house",
    eyebrow: "Лондон · Белгравия",
    title: "The Bath House — Banya London",
    location: "Великобритания, Лондон",
    address: "1 Grosvenor Gardens, Belgravia, London SW1W 0BD",
    description:
      "Банный проект напротив Букингемского дворца: традиции русской бани соединены с современным спа, приватными и общественными сценариями, холодными купелями, мозаичным интерьером и зонами восстановления.",
    hero: "/images/bath-complexes/the-bath-house/hero.jpg",
    accent: "/images/bath-complexes/the-bath-house/venik-spa.jpg",
    stats: [
      { value: "2", label: "русские парные" },
      { value: "1", label: "адрес в Белгравии" },
      { value: "SPA", label: "парение и купели" },
    ],
    points: [
      "Русские парные с температурно-влажностным режимом бани",
      "Электро-каменки, настроенные под стабильный пар",
      "Мозаичный интерьер и выразительные влажные зоны",
      "SPA-сценарии: веник, вода, охлаждение, отдых",
      "Локация: Grosvenor Gardens, London",
    ],
    gallery: [
      { src: "/images/bath-complexes/the-bath-house/steam-01.jpg", label: "Русская парная 01", className: "md:col-span-6" },
      { src: "/images/bath-complexes/the-bath-house/steam-02.jpg", label: "Русская парная 02", className: "md:col-span-6" },
      { src: "/images/bath-complexes/the-bath-house/mosaic-01.jpg", label: "Мозаичный интерьер 01", className: "md:col-span-6" },
      { src: "/images/bath-complexes/the-bath-house/mosaic-02.jpg", label: "Мозаичный интерьер 02", className: "md:col-span-6" },
      { src: "/images/bath-complexes/the-bath-house/venik-spa.jpg", label: "SPA-зона с веником", className: "md:col-span-12" },
    ],
  },
  {
    id: "dusha-krasnogorska",
    eyebrow: "Россия · Красногорск",
    title: "Душа Красногорска",
    location: "Россия, Красногорск",
    address: "Речная улица, 37",
    description:
      "Первое в России общественное банное пространство, рассчитанное на коллективное традиционное парение и афгусс-программы. Парная на 50 человек разделена на три разнотемпературные зоны.",
    hero: "/images/bath-complexes/dusha-krasnogorska/hero-entrance.jpg",
    accent: "/images/bath-complexes/dusha-krasnogorska/steam-01.jpg",
    stats: [
      { value: "50", label: "человек в парной" },
      { value: "3", label: "температурные зоны" },
      { value: "AUG", label: "афгусс-программы" },
    ],
    points: [
      "Общественная баня с большой входной группой",
      "Парная рассчитана на 50 человек",
      "Афгусс-программы и атмосферные спецэффекты",
      "Три температурные зоны для разных сценариев",
      "Система увлажнения и интенсивного проветривания",
    ],
    gallery: [
      { src: "/images/bath-complexes/dusha-krasnogorska/steam-01.jpg", label: "Парная 01", className: "md:col-span-6" },
      { src: "/images/bath-complexes/dusha-krasnogorska/steam-02.jpg", label: "Парная 02", className: "md:col-span-6" },
      { src: "/images/bath-complexes/dusha-krasnogorska/hamam.jpg", label: "Хамам", className: "md:col-span-6" },
      { src: "/images/bath-complexes/dusha-krasnogorska/lounge.jpg", label: "Зона отдыха", className: "md:col-span-6" },
    ],
  },
  {
    id: "rostov-360",
    eyebrow: "Россия · Ростов",
    title: "Ростов 360 м²",
    location: "Россия, Ростов",
    description:
      "Проект банного комплекса площадью 360 м²: два этажа, выход на крышу, бассейны, вентиляция, инженерия и комплект рабочей документации. Для блока заложены проектные чертежи вместо фото.",
    hero: "/images/bath-complexes/rostov-360/hero-plan.jpg",
    accent: "/images/bath-complexes/rostov-360/drawing-01.jpg",
    stats: [
      { value: "360", label: "м² площади" },
      { value: "2", label: "этажа" },
      { value: "Roof", label: "выход на крышу" },
    ],
    points: [
      "Архитектурная концепция и планировочная логика",
      "Инженерия влажных зон и технических помещений",
      "Вентиляция, воздух и контроль влажности",
      "Бассейны, купели и водоподготовка",
      "Рабочая документация для строительства",
    ],
    gallery: [
      { src: "/images/bath-complexes/rostov-360/drawing-01.jpg", label: "Чертёж 01", className: "md:col-span-4" },
      { src: "/images/bath-complexes/rostov-360/drawing-02.jpg", label: "Чертёж 02", className: "md:col-span-4" },
      { src: "/images/bath-complexes/rostov-360/drawing-03.jpg", label: "Чертёж 03", className: "md:col-span-4" },
    ],
  },
  {
    id: "parnaya-ladya",
    eyebrow: "Авторская парная",
    title: "Парная-Ладья",
    location: "На борту корабля",
    description:
      "Уникальная парная в стилизации славянской ладьи и печи-крепости, спроектированная и построенная нашей командой. Печь топится по-чёрному, но предусмотрен дымоход против чрезмерного задымления. Декор печи выполнен с подсвеченным ониксом.",
    hero: "/images/bath-complexes/parnaya-ladya/hero.jpg",
    accent: "/images/bath-complexes/parnaya-ladya/stove-onyx.jpg",
    stats: [
      { value: "1", label: "авторская парная" },
      { value: "Black", label: "топка по-чёрному" },
      { value: "Onyx", label: "подсвеченный камень" },
    ],
    points: [
      "Стилизация славянской ладьи внутри парной",
      "Печь-крепость как главный визуальный объект",
      "Топка по-чёрному с дымоходом против чрезмерного задымления",
      "Авторский декор печи с подсвеченным ониксом",
      "Два акцентных фото слева и справа от текстового блока",
    ],
    gallery: [
      { src: "/images/bath-complexes/parnaya-ladya/left.jpg", label: "Фото слева", className: "md:col-span-6" },
      { src: "/images/bath-complexes/parnaya-ladya/right.jpg", label: "Фото справа", className: "md:col-span-6" },
    ],
  },
];

const engineering = [
  {
    title: "Архитектура",
    text: "Сначала собираем сценарий отдыха, затем планировку, свет, материалы, видовые оси и логику движения гостей.",
    icon: Building2,
  },
  {
    title: "Пар и тепло",
    text: "Подбираем печи, каменную массу, парогенераторы, прогрев поверхностей и безопасные температурные режимы.",
    icon: Flame,
  },
  {
    title: "Вода и бассейны",
    text: "Прорабатываем купели, бассейны, переливы, сливы, водоподготовку, ревизии и удобный доступ к обслуживанию.",
    icon: Waves,
  },
  {
    title: "Вентиляция",
    text: "Проектируем свежий воздух, вытяжку, проветривание и влажностный режим без духоты и сырости.",
    icon: Wind,
  },
  {
    title: "Документация",
    text: "Фиксируем решения в рабочей документации, чтобы строители понимали узлы, пироги, проходки и последовательность работ.",
    icon: FileText,
  },
  {
    title: "Запуск",
    text: "Проверяем работу оборудования, прогрев, воду, свет, автоматику и объясняем эксплуатацию.",
    icon: CheckCircle2,
  },
];

export default function BathComplexesPage() {
  return (
    <main className="bg-[#fcfaf7] text-[#121212] antialiased selection:bg-[#8a6a43] selection:text-white">
      <Header />

      <section className="relative flex min-h-[94vh] items-end overflow-hidden bg-[#0b0a09] pb-16 pt-32 text-white md:pb-24">
        <HeroVideo
          src="/videos/hero-bath-complexes-loop.mp4"
          className="ai-hero-video z-[1] opacity-55"
          speed={0.7}
          preload="auto"
          ariaLabel="Банные комплексы ARCHIPAR"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/60 to-[#0b0a09]/20" />
        <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_80%_20%,rgba(200,170,120,0.18),transparent_42%)]" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-6 inline-flex">
            <span className="border border-[#c8aa78]/30 bg-[#c8aa78]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#c8aa78] backdrop-blur-sm">
              Портфолио банных комплексов
            </span>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Банные комплексы <br />
                <span className="italic text-[#c8aa78]">как цельные велнес-пространства</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                От общественных парных и премиальных спа-зон до частных комплексов с бассейнами, купелями, хамамами, лоджиями и рабочей документацией.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="#showcase" className="inline-flex items-center justify-center gap-3 border border-[#c8aa78] bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[#c8aa78]">
                  Смотреть проекты
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </Link>
                <Link href="#request" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest">
                  Обсудить комплекс
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-black/5 bg-[#f4f0ea] py-24 md:py-32">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Инженерное ядро"
            title="Что объединяет все комплексы"
            text="Большой банный объект держится не только на отделке. Важны сценарии, воздух, вода, тепло, безопасность и документация."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {engineering.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  data-reveal-item
                  data-reveal-kind="card"
                  className="group border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#c8aa78] hover:shadow-md"
                >
                  <Icon className="reveal-card__lead mb-5 h-6 w-6 text-[#8a6a43]" />
                  <div className="reveal-card__body">
                    <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-[#121212]">{item.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-black/60">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section id="showcase" className="bg-[#121212] py-24 text-white md:py-36">
        <div className="container-premium">
          <div className="mb-20 max-w-3xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78]">
              Реализованные проекты
            </p>
            <h2 className="font-serif text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl">
              Банные комплексы ARCHIPAR
            </h2>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/50">
              Каждый комплекс создаётся под свой сценарий отдыха: от камерной частной бани до полноценного велнес-пространства с парными, хамамом, водой и зонами восстановления.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectBlock key={project.id} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(138,106,67,0.15),transparent_50%)]" />
        <div className="container-premium">
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Архитектурный консалтинг
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Начнём создание <br />
                <span className="italic text-[#c8aa78]">вашего комплекса</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base">
                Оставьте заявку на разбор концепции. Мы свяжемся с вами, изучим участок или помещение и подготовим понятный стартовый план.
              </p>
              <div className="mt-12 space-y-4 border-l border-[#c8aa78]/40 pl-6 text-xs font-light tracking-wider text-white/50">
                <p>✓ Анализ инженерных мощностей: газ, электричество, вода</p>
                <p>✓ Зонирование: парная / хамам / бассейн / отдых</p>
                <p>✓ Подбор материалов под климат и режим эксплуатации</p>
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectBlock({ project, reverse }: { project: Project; reverse?: boolean }) {
  return (
    <article id={project.id} className="scroll-mt-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className={`space-y-7 lg:col-span-5 ${reverse ? "lg:order-2 lg:pl-8" : ""}`}>
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
              {project.eyebrow}
            </p>
            <h3 className="font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-col gap-2 border-y border-white/10 py-3 text-xs text-white/50">
            <span className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#c8aa78]" />
              {project.location}
            </span>
            {project.address ? <span className="pl-6">{project.address}</span> : null}
          </div>

          <p className="text-sm font-light leading-relaxed text-white/70">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {project.stats.map((stat) => (
              <div key={`${project.id}-${stat.label}`} className="border border-white/10 bg-white/[0.03] p-4">
                <p className="font-serif text-2xl font-light text-[#c8aa78]">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#c8aa78]">
              Что входит:
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.points.map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs font-light text-white/80">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8aa78]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
          <RevealGroup className="grid grid-cols-12 gap-4">
            <div
              data-reveal-item
              data-reveal-kind="media"
              className="group relative col-span-8 h-[390px] overflow-hidden bg-neutral-900 shadow-2xl md:h-[520px]"
            >
              <Image
                src={project.hero}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.04]"
              />
              <div className="reveal-media__lead absolute left-4 top-4 border border-white/10 bg-black/60 px-3 py-1 text-[9px] uppercase tracking-widest text-white backdrop-blur-sm">
                Главное фото
              </div>
            </div>
            <div
              data-reveal-item
              data-reveal-kind="media"
              className="group relative col-span-4 mt-20 hidden h-[270px] overflow-hidden border-4 border-[#121212] bg-neutral-900 shadow-2xl sm:block md:h-[360px]"
            >
              <Image
                src={project.accent || project.hero}
                alt={`${project.title} — деталь`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.04]"
              />
            </div>
          </RevealGroup>
        </div>
      </div>

      <RevealGroup className="mt-12 grid gap-4 md:grid-cols-12">
        {project.gallery.map((image, index) => (
          <div
            key={image.src}
            data-reveal-item
            data-reveal-kind="media"
            className={`group relative h-[290px] overflow-hidden bg-neutral-900 ${image.className || "md:col-span-6"}`}
          >
            <Image
              src={image.src}
              alt={`${project.title} — ${image.label}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-[1.04] group-hover:opacity-100"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between border border-white/10 bg-black/60 p-4 text-white backdrop-blur-sm">
              <span className="reveal-media__lead font-serif text-xs italic text-white/50">{String(index + 1).padStart(2, "0")}</span>
              <span className="reveal-media__body text-[10px] font-semibold uppercase tracking-widest text-white/80">{image.label}</span>
            </div>
          </div>
        ))}
      </RevealGroup>
    </article>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight text-[#121212] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-black/60 md:text-base">
        {text}
      </p>
    </div>
  );
}
