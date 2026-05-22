import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
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
  },
  {
    title: "Хамам в зоне отдыха",
    type: "Домашный хамам · Репино",
    image: "/images/cases/case-02.jpg",
  },
  {
    title: "Парная с мягким паром",
    type: "Индивидуальный проект · Раздоры",
    image: "/images/cases/case-03.jpg",
  },
  {
    title: "Гостевой банный комплекс из сосны",
    type: "Гостевой формат · Алтай",
    image: "/images/cases/case-05.jfif",
  },
];

const typologies = [
  {
    title: "Отдельные бани",
    text: "Отдельное здание на участке: парная, душевая, комната отдыха, терраса и всё, что нужно для спокойного отдыха.",
    image: "/images/complexes/private-complex.jpg",
    href: "/bath-complexes",
    meta: "Отдельное здание",
  },
  {
    title: "Баня внутри дома",
    text: "Встроенная банная зона с защитой от влаги, правильной вентиляцией и удобным доступом к оборудованию.",
    image: "/images/complexes/house-complex.jpg",
    href: "/bath-complexes",
    meta: "Внутри дома",
  },
  {
    title: "Гостевые зоны",
    text: "Банные решения для загородных клубов, отелей и гостевых домов, где важны ресурс, удобство и простой уход.",
    image: "/images/complexes/commercial-complex.jpg",
    href: "/bath-complexes",
    meta: "Для гостей",
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
    text: "Ведём отделку, монтаж оборудования, подключение узлов и контроль важных мест, которые потом сложно переделать.",
    icon: Building2,
  },
  {
    title: "Настраиваем и сдаём",
    text: "Проверяем нагрев, пар, воздух, воду, свет, управление и объясняем, как пользоваться баней без лишней головной боли.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f0] text-[#121212] antialiased selection:bg-[#8a6a43] selection:text-white">
      <Header />

      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#121212] pb-16 pt-32 md:pb-24">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Банные комплексы ARCHIPAR"
          fill
          priority
          sizes="100vw"
          className="image-drift object-cover opacity-45 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/35 to-transparent" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              Проектирование · Строительство · Запуск
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Бани, хамамы <br />
                <span className="italic text-[#c8aa78]">и зоны отдыха под ключ</span>
              </h1>

              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/68 md:text-lg">
                ARCHIPAR проектирует и строит банные пространства, где красиво выглядит каждая деталь и всё удобно работает каждый день: пар, тепло, вода, воздух и свет.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center gap-3 border border-[#c8aa78] bg-black px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#c8aa78] transition-all duration-300 hover:bg-[#c8aa78] hover:text-black"
                >
                  Заказать проект
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-3 border border-[#c8aa78] bg-black px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#c8aa78] transition-all duration-300 hover:bg-[#c8aa78] hover:text-black"
                >
                  Смотреть избранные работы
                </Link>
              </div>
            </div>

            <div className="hidden border border-white/10 bg-black/35 p-6 text-xs font-light tracking-wide text-white/58 backdrop-blur-md lg:block">
              <div className="border-b border-white/10 pb-4">
                <span className="mb-1 block font-serif text-lg text-[#c8aa78]">
                  Всё в одних руках
                </span>
                Проект, материалы, монтаж, настройка и запуск без разрыва между дизайном и работами на объекте.
              </div>

              <div className="pt-4">
                <span className="mb-1 block font-serif text-lg text-[#c8aa78]">
                  Комфорт без духоты
                </span>
                Сразу думаем о вентиляции, влажности, нагреве и доступе к оборудованию.
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
                Хорошая баня — это не только красивая отделка.
              </h2>
            </div>

            <div className="space-y-6 text-base font-light leading-relaxed text-black/70 lg:pt-8">
              <p>
                Часто бывает так: сначала рисуют красивую картинку, а потом пытаются спрятать вентиляцию, воду, электрику и оборудование. В итоге приходится жертвовать либо видом, либо удобством.
              </p>

              <p className="font-medium text-[#121212]">
                Мы делаем иначе. Сначала понимаем, как вы будете пользоваться баней, а потом собираем планировку, материалы и техническую часть так, чтобы объект был красивым, понятным и надёжным в работе.
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
              text="Показываем разные форматы: отдельные бани, хамамы, домашние парные и гостевые банные комплексы."
            />

            <Link
              href="?section=request#request"
              className="inline-flex items-center gap-2 border-b border-[#8a6a43] bg-transparent pb-1 text-xs font-semibold uppercase tracking-widest text-[#8a6a43] shadow-none transition-colors hover:text-black"
            >
              Обсудить похожий проект
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
            text="Можно сделать отдельную баню на участке, встроенную банную зону внутри дома или гостевой комплекс для нескольких человек."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {typologies.map((item, index) => (
              <ImageCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section id="anatomy" className="relative overflow-hidden bg-[#121212] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,106,67,0.18),transparent_50%)]" />

        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Что внутри
              </p>

              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Красиво снаружи, <br />
                <span className="italic text-[#c8aa78]">правильно внутри</span>
              </h2>

              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-white/62 md:text-base">
                За деревом, камнем и светом всегда есть важная техническая часть. Мы заранее продумываем воздух, влагу, нагрев, слив, электрику и доступ к обслуживанию.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {anatomy.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#c8aa78]/50 hover:bg-white/[0.06]">
                      <Icon className="mb-4 h-5 w-5 text-[#c8aa78]" />

                      <h3 className="mb-2 font-serif text-lg font-light text-white">
                        {item.title}
                      </h3>

                      <p className="text-xs font-light leading-relaxed text-white/55">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden bg-black lg:h-[650px]">
              <Image
                src="/images/modules/engineering.jpg"
                alt="Техническая часть банного комплекса"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-68 mix-blend-luminosity"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 border border-white/10 bg-black/65 p-6 backdrop-blur-md">
                <span className="mb-2 block text-[9px] font-semibold uppercase tracking-widest text-[#c8aa78]">
                  Важные детали
                </span>

                <p className="text-xs font-light leading-relaxed text-white/82">
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

            <div className="flex w-full max-w-sm items-center justify-between gap-4 bg-[#121212] p-6 text-xs font-light uppercase tracking-widest text-white lg:justify-self-end">
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

      <section id="request" className="relative overflow-hidden border-t border-white/5 bg-[#121212] py-24 text-white md:py-32">
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

              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/62 md:text-base">
                Оставьте контакты — мы свяжемся, зададим несколько вопросов по объекту и подскажем, с чего лучше начать.
              </p>

              <div className="mt-12 space-y-4 border-l border-white/10 pl-6 text-xs font-light uppercase tracking-wider text-white/45">
                <p>• Посмотрим технические условия объекта</p>
                <p>• Подскажем подходящий формат банной зоны</p>
                <p>• Объясним порядок работ простым языком</p>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10">
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
  return (
    <div className="container-premium mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      {children}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
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
  };
  className: string;
  imageHeight: string;
  titleSize: string;
}) {
  return (
    <div className={`group block cursor-pointer ${className}`}>
      <div className={`relative mb-4 overflow-hidden bg-black ${imageHeight}`}>
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
    </div>
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
      <div className="relative mb-6 h-[440px] overflow-hidden bg-black">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover opacity-90 transition-all duration-1000 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
        />

        <div className="absolute left-4 top-4 border border-white/10 bg-black/45 px-3 py-1 text-[9px] uppercase tracking-widest text-white backdrop-blur-sm">
          {meta}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-center justify-between border border-white/10 bg-black/65 p-4 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-serif text-xs italic text-white/50">
            0{index + 1}
          </span>

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

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#121212] pb-12 pt-20 text-white/80">
      <Container>
        <div className="grid items-end gap-6 border-b border-white/10 pb-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78]">
              ARCHIPAR
            </p>

            <h2 className="font-serif text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              Строим бани, в которых <br />
              <span className="italic text-[#c8aa78]">хочется отдыхать</span>
            </h2>
          </div>

          <div className="md:justify-self-end">
            <Link
              href="#request"
              className="inline-flex items-center gap-2 border-b border-[#c8aa78] pb-1 text-xs uppercase tracking-widest text-[#c8aa78] transition-all duration-300 hover:border-[#dbbc8a] hover:text-[#dbbc8a]"
            >
              Обсудить проект
              <ArrowUpRight className="h-3 w-3 text-[#c8aa78]" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 pt-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-light tracking-[0.2em] text-white">
              ARCHIPAR
            </p>

            <p className="mt-6 max-w-sm text-xs font-light leading-relaxed text-white/42">
              Проектирование и строительство банных комплексов, бань, саун и хамамов под ключ.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-light uppercase tracking-wider text-white/50 md:col-span-4">
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Решения
              </p>

              <Link href="/bath-complexes" className="transition-colors duration-300 hover:text-[#c8aa78]">
                Комплексы
              </Link>
              <Link href="/baths" className="transition-colors duration-300 hover:text-[#c8aa78]">
                Бани
              </Link>
              <Link href="/saunas" className="transition-colors duration-300 hover:text-[#c8aa78]">
                Сауны
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Навигация
              </p>

              <Link href="/hamams" className="transition-colors duration-300 hover:text-[#c8aa78]">
                Хамамы
              </Link>
              <Link href="#portfolio" className="transition-colors duration-300 hover:text-[#c8aa78]">
                Портфолио
              </Link>
              <Link href="#request" className="transition-colors duration-300 hover:text-[#c8aa78]">
                Контакты
              </Link>
            </div>
          </div>

          <div className="w-full space-y-3 text-xs font-light text-white/42 md:col-span-3 md:justify-self-end md:text-right">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              География
            </p>

            <p className="font-normal uppercase tracking-wider text-white">
              Россия & СНГ
            </p>

            <p className="leading-relaxed">
              Частные и гостевые банные объекты для загородных домов и коммерческих проектов.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest text-white/20 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ARCHIPAR. Все права защищены.</p>
          <p className="tracking-[0.3em] text-white/30">
            Bath design & build
          </p>
        </div>
      </Container>
    </footer>
  );
}
