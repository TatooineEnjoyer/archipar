"use client";

import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Droplets,
  Flame,
  Ruler,
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";

const cases = [
  {
    title: "Банный комплекс в загородном доме",
    type: "Частный объект · Нахабино",
    image: "/images/cases/case-01.jpg",
    href: "/bath-complexes#rostov-360",
  },
  {
    title: "Хамам в зоне отдыха",
    type: "Домашний хамам · Репино",
    image: "/images/cases/case-02.jpg",
    href: "/hamams",
  },
  {
    title: "Парная с мягким паром",
    type: "Индивидуальный проект · Раздоры",
    image: "/images/cases/case-03.jpg",
    href: "/baths",
  },
  {
    title: "Гостевой банный комплекс из сосны",
    type: "Гостевой формат · Алтай",
    image: "/images/cases/case-04.jpg",
    href: "/bath-complexes#showcase",
  },
];

const typologies = [
  {
    title: "Банные комплексы",
    text: "Парные, хамамы, душевые, купели, бассейны, комнаты отдыха, выстроенные в единое целое.",
    image: "/images/complexes/private-complex.jpg",
    href: "/bath-complexes",
    meta: "Портфолио комплексов",
  },
  {
    title: "Бани и парные",
    text: "Камерные и семейные бани с правильным паром, безопасной печью, вентиляцией и удобной зоной отдыха.",
    image: "/images/complexes/house-complex.jpg",
    href: "/baths",
    meta: "Отдельный продукт",
  },
  {
    title: "Сауны и хамамы",
    text: "Сухое тепло, мягкий пар, тёплый камень, мозаика, свет и продуманная влажная инженерия для дома или спа.",
    image: "/images/complexes/commercial-complex.jpg",
    href: "/saunas",
    meta: "Сауны / хамамы",
  },
];

const anatomy = [
  {
    title: "Пар и тепло",
    text: "Подбираем печь, объём парной, материалы и вентиляцию, чтобы в парной было тепло и легко дышалось.",
    icon: Flame,
  },
  {
    title: "Хамамы",
    text: "Продумываем прогрев стен, пола и лежаков, мягкую подачу пара, свет, воду и удобство ухода.",
    icon: Droplets,
  },
  {
    title: "Вода и охлаждение",
    text: "Купели, душевые, обливные системы, лёд, слив и водоподготовка — всё должно работать удобно и безопасно.",
    icon: Waves,
  },
  {
    title: "Свежий воздух",
    text: "Делаем вентиляцию без сквозняков, лишней сырости и ощущения духоты после нескольких заходов.",
    icon: Wind,
  },
];

const methodSteps = [
  {
    title: "Разбираем задачу",
    text: "Смотрим объект, размеры, коммуникации, пожелания по отдыху и ограничения, которые важно учесть заранее.",
    icon: Compass,
  },
  {
    title: "Делаем проект",
    text: "Собираем планировку, материалы, свет, оборудование, вентиляцию, воду и электрику в понятное решение.",
    icon: Ruler,
  },
  {
    title: "Строим и собираем",
    text: "Ведём отделку, монтаж оборудования, коммуникация, подключение узлов, которые потом не нужно переделывать.",
    icon: Building2,
  },
  {
    title: "Тестируем и сдаём",
    text: "Проверяем нагрев, пар, воздух, воду, свет, управление и объясняем, как пользоваться баней без лишней головной боли.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f0] text-[#121212] antialiased selection:bg-[#8a6a43] selection:text-white">
      <Header />

      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1c1a17] pb-16 pt-32 md:pb-24">
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#2a211a_0%,#1c1a17_68%)]"
          aria-hidden="true"
        />

        <HeroVideo
          src="/videos/hero-main-loop.mp4"
          className="absolute inset-0 z-[1] h-full w-full object-cover opacity-70"
          speed={0.7}
          preload="auto"
          ariaLabel="Банные комплексы ARCHIPAR"
        />


        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/40 to-transparent" />
        <div className="container-premium relative z-10 w-full">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
              Проектирование · Строительство · Запуск
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Бани, хамамы <br />
                <span className="italic text-[#c8aa78]">и зоны отдыха под ключ</span>
              </h1>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                ARCHIPAR проектирует и строит банные пространства, где красиво выглядит каждая деталь, пар, тепло, вода, воздух и свет дополняют друг друга.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest"
                >
                  Заказать проект
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/bath-complexes"
                  className="inline-flex items-center justify-center gap-3 border border-[#c8aa78] bg-black/20 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#c8aa78] backdrop-blur-sm transition-all duration-300 hover:bg-[#c8aa78] hover:text-black"
                >
                  Смотреть банные комплексы
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="hidden border border-white/10 bg-[#1c1a17]/40 p-6 text-xs font-light tracking-wide text-white/60 backdrop-blur-md lg:block">
              <div className="border-b border-white/10 pb-4">
                <span className="mb-1 block font-serif text-lg text-[#c8aa78]">
                  Всё в одних руках
                </span>
                От проекта до отделки и монтажа техники - доверьте всё нам.
              </div>
              <div className="pt-4">
                <span className="mb-1 block font-serif text-lg text-[#c8aa78]">
                Не душно, но душевно
                </span>
                Вентиляция, влажность, нагрев и доступ к оборудованию прорабатываются заранее.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f0] py-24 md:py-32">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
                О нас
              </p>
              <h2 className="font-serif text-3xl font-extralight leading-snug tracking-tight text-[#121212] sm:text-4xl md:text-5xl">
               Банщики, строители, инженеры и архитекторы. Хорошая баня — это команда!
              </h2>
            </div>
            <div className="space-y-6 text-base font-light leading-relaxed text-black/70 lg:pt-8">
              <p>
                Как бывает: рисуют дизайн-проект, а потом пытаются спрятать коммуникации по ходу строительства - по итогу приходится жертвовать либо видом, либо удобством.
              </p>
              <p className="font-medium text-[#121212]">
                Наш подход. Понимаем как это всё должно заработать у вас, как вы будете пользоваться баней, - только потом мы собираем планировку, материалы и техническую часть так, чтобы объект был и красивым и понятным и надёжным.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="portfolio" className="border-y border-black/5 bg-[#f0eae1] py-24 md:py-32">
        <Container>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="Избранные работы"
              title="Что уже построили"
              text="Подробная презентация комплексов вынесена на отдельную страницу."
            />
            <Link
              href="/bath-complexes"
              className="inline-flex items-center gap-2 border-b border-[#8a6a43] bg-transparent pb-1 text-xs font-semibold uppercase tracking-widest text-[#8a6a43] shadow-none transition-colors hover:text-black"
            >
              Все банные комплексы
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-12">
            <CaseCard item={cases[0]} className="md:col-span-12 lg:col-span-8" imageHeight="h-[480px]" titleSize="text-3xl" />
            <CaseCard item={cases[1]} className="md:col-span-6 lg:col-span-4 lg:mt-16" imageHeight="h-[414px]" titleSize="text-2xl" />
            <CaseCard item={cases[2]} className="md:col-span-6 lg:col-span-4" imageHeight="h-[414px]" titleSize="text-2xl" />
            <CaseCard item={cases[3]} className="md:col-span-12 lg:col-span-8 lg:mt-0" imageHeight="h-[480px]" titleSize="text-3xl" />
          </div>
        </Container>
      </section>

      <section id="typologies" className="bg-[#f8f5f0] py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="Форматы"
            title="Под разные задачи и дома"
            text="Можно сделать отдельный банный комплекс, камерную баню, сухую сауну или хамам. Для комплексов теперь есть отдельная страница-презентация."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {typologies.map((item, index) => (
              <ImageCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section id="anatomy" className="relative overflow-hidden bg-[#29241f] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,106,67,0.12),transparent_50%)]" />
        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Проект 
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Красиво выглядит, <br />
                <span className="italic text-[#c8aa78]">правильно внутри</span>
              </h2>
              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-white/70 md:text-base">
                Корректно исполнено. За деревом, камнем и светом всегда есть важная техническая часть.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {anatomy.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#c8aa78]/50 hover:bg-white/[0.05]">
                      <Icon className="mb-4 h-5 w-5 text-[#c8aa78]" />
                      <h3 className="mb-2 font-serif text-lg font-light text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs font-light leading-relaxed text-white/60">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden bg-[#1c1a17] lg:h-[650px]">
              <Image
                src="/images/modules/engineering.jpg"
                alt="Техническая часть банного комплекса"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 border border-white/10 bg-[#1c1a17]/60 p-6 backdrop-blur-md">
                <span className="mb-2 block text-[9px] font-semibold uppercase tracking-widest text-[#c8aa78]">
                  Важные детали
                </span>
                <p className="text-xs font-light leading-relaxed text-white/90">
                  Хорошая баня не должна быть душной, сырой или сложной в уходе. Поэтому мы сразу закладываем вентиляцию, слив, доступ к оборудованию и понятное управление.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="method" className="bg-[#f8f5f0] py-24 md:py-32">
        <Container>
          <div className="grid items-end gap-12 border-b border-black/10 pb-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionIntro
              eyebrow="Работа"
              title="От идеи до запуска"
              text="Мы не просто отдаём чертежи. Ведём проект до готового результата, чтобы на объекте не появлялись случайные решения и переделки."
            />
            <div className="flex w-full max-w-sm items-center justify-between gap-4 bg-[#29241f] p-6 text-xs font-light uppercase tracking-widest text-white lg:justify-self-end">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#c8aa78]" />
                Проверяем перед сдачей
              </span>
              <span className="text-[#c8aa78]">100%</span>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {methodSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group relative border-l border-black/10 pl-6 pt-2 transition-colors duration-300 hover:border-[#8a6a43]">
                  <span className="mb-4 block font-serif text-sm italic text-black/30">
                    0{index + 1}
                  </span>
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#8a6a43]" />
                    <h3 className="font-serif text-xl font-light tracking-tight text-[#121212]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs font-light leading-relaxed text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="request" className="relative overflow-hidden border-t border-white/5 bg-[#29241f] py-24 text-white md:py-32">
        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Заявка
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Расскажите, <br />
                <span className="italic text-[#c8aa78]">какую баню хотите</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/70 md:text-base">
                Оставьте контакты — мы свяжемся, зададим несколько вопросов по объекту и подскажем, с чего лучше начать.
              </p>
              <div className="mt-12 space-y-4 border-l border-white/10 pl-6 text-xs font-light uppercase tracking-wider text-white/50">
                <p>• Посмотрим технические условия объекта</p>
                <p>• Подскажем подходящий формат банной зоны</p>
                <p>• Объясним порядок работ простым языком</p>
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm md:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div className="container-premium mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">{children}</div>;
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
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

function CaseCard({
  item,
  className,
  imageHeight,
  titleSize,
}: {
  item: {
    title: string;
    type: string;
    image: string;
    href: string;
  };
  className: string;
  imageHeight: string;
  titleSize: string;
}) {
  return (
    <Link href={item.href} className={`group block cursor-pointer ${className}`}>
      <div className={`relative mb-4 overflow-hidden bg-[#1c1a17] ${imageHeight}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8a6a43]">
        {item.type}
      </p>
      <h3 className={`mt-1 font-serif font-light tracking-tight transition-colors group-hover:text-[#8a6a43] ${titleSize}`}>
        {item.title}
      </h3>
    </Link>
  );
}

function ImageCard({
  title,
  text,
  image,
  href,
  meta,
  index,
}: {
  title: string;
  text: string;
  image: string;
  href: string;
  meta: string;
  index: number;
}) {
  return (
    <Link href={href} className="group block cursor-pointer">
      <div className="relative mb-6 h-[440px] overflow-hidden bg-[#1c1a17]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover opacity-90 transition-all duration-1000 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
        />
        <div className="absolute left-4 top-4 border border-white/10 bg-black/40 px-3 py-1 text-[9px] uppercase tracking-widest text-white backdrop-blur-sm">
          {meta}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-center justify-between border border-white/10 bg-black/60 p-4 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-serif text-xs italic text-white/50">0{index + 1}</span>
          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white">
            Подробнее
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
      <h3 className="font-serif text-2xl font-light tracking-tight text-[#121212]">
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-black/60">
        {text}
      </p>
    </Link>
  );
}
