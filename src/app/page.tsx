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
    <main className="bg-[#0a0a0a] text-[#ffffff] antialiased selection:bg-[#c8aa78] selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#0a0a0a] pb-16 pt-32 md:pb-24">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Банные комплексы ARCHIPAR"
          fill
          priority
          sizes="100vw"
          className="image-drift object-cover opacity-35 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="border border-[#c8aa78]/30 bg-[#c8aa78]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#c8aa78] backdrop-blur-sm">
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
                ARCHIPAR проектирует и строит премиальные пространства, где эстетика неотделима от правильной инженерии: пар, тепло, вода, воздух и свет.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/bath-complexes"
                  className="inline-flex items-center justify-center gap-3 border border-[#c8aa78] bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[#c8aa78]"
                >
                  Наши банные комплексы
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#c8aa78] hover:text-[#c8aa78]"
                >
                  Смотреть избранные работы
                </Link>
              </div>
            </div>

            <div className="hidden border-l-2 border-[#c8aa78] bg-white/[0.02] p-6 text-xs font-light tracking-wide text-white/60 backdrop-blur-md lg:block">
              <div className="border-b border-white/10 pb-4">
                <span className="mb-1 block font-serif text-lg text-[#c8aa78]">
                  Всё в одних руках
                </span>
                Проект, материалы, монтаж, настройка и запуск без разрыва между дизайном и работами на объекте.
              </div>
              <div className="pt-4">
                <span className="mb-1 block font-serif text-lg text-[#c8aa78]">
                  Идеальный климат
                </span>
                Сразу закладываем правильную вентиляцию, влажность и доступ к техническим узлам.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О нас - Параллельная верстка */}
      <section className="bg-[#0a0a0a] py-24 md:py-36 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111111] -skew-x-12 translate-x-32" />
        <Container>
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78]">
                Философия ARCHIPAR
              </p>
              <h2 className="font-serif text-3xl font-extralight leading-snug tracking-tight text-white sm:text-4xl md:text-5xl">
                Хорошая баня — это не только дорогая отделка.
              </h2>
            </div>

            <div className="space-y-6 text-base font-light leading-relaxed text-white/70 border-l border-white/10 pl-8">
              <p>
                Часто бывает так: сначала рисуют красивую картинку, а потом пытаются вписать вентиляцию, сливы и печь. В итоге приходится жертвовать либо эстетикой, либо правильным паром.
              </p>
              <p className="font-medium text-white">
                Мы делаем иначе. Мы создаем архитектуру микроклимата, где техническая безупречность формирует премиальный внешний вид объекта.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Портфолио - Асимметричная сетка */}
      <section id="portfolio" className="bg-[#0a0a0a] py-24 md:py-32">
        <Container>
          <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="Избранные работы"
              title="Наши реализованные проекты"
              text="Показываем форматы, в которых мы работаем: от домашних хамамов до полномасштабных банных комплексов."
            />

            <Link
              href="/bath-complexes"
              className="inline-flex items-center gap-2 border-b border-[#c8aa78] bg-transparent pb-1 text-xs font-semibold uppercase tracking-widest text-[#c8aa78] transition-colors hover:text-white"
            >
              Изучить комплексы
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid items-start gap-8 md:grid-cols-12">
            <CaseCard item={cases[0]} className="md:col-span-12 lg:col-span-7" imageHeight="h-[500px]" titleSize="text-3xl" />
            <CaseCard item={cases[1]} className="md:col-span-6 lg:col-span-5 lg:mt-32" imageHeight="h-[400px]" titleSize="text-2xl" />
            <CaseCard item={cases[2]} className="md:col-span-6 lg:col-span-5" imageHeight="h-[400px]" titleSize="text-2xl" />
            <CaseCard item={cases[3]} className="md:col-span-12 lg:col-span-7 lg:-mt-20" imageHeight="h-[500px]" titleSize="text-3xl" />
          </div>
        </Container>
      </section>

      {/* Форматы (Типологии) - Обновленные карточки */}
      <section id="typologies" className="bg-[#111111] py-24 md:py-32 border-t border-white/5">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <SectionIntro
              eyebrow="Форматы объектов"
              title="Проектируем под разные задачи"
              text="Отдельное здание на участке, встроенная зона или коммерческий SPA-объект."
            />
            <Link
              href="/bath-complexes"
              className="inline-flex items-center justify-center gap-3 bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-white"
            >
              Смотреть варианты
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {typologies.map((item, index) => (
              <ImageCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Анатомия */}
      <section id="anatomy" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,170,120,0.12),transparent_50%)]" />

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
              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-white/60 md:text-base">
                За деревом, камнем и светом всегда есть сложная инженерная часть. Мы заранее проектируем потоки воздуха, гидроизоляцию и доступ к технике.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {anatomy.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#c8aa78]/40 hover:bg-white/[0.04]">
                      <Icon className="mb-4 h-5 w-5 text-[#c8aa78]" />
                      <h3 className="mb-2 font-serif text-lg font-light text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs font-light leading-relaxed text-white/50">
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
                className="object-cover opacity-50 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 border-l-2 border-[#c8aa78] bg-black/80 p-6 backdrop-blur-md">
                <span className="mb-2 block text-[9px] font-semibold uppercase tracking-widest text-[#c8aa78]">
                  Инженерные решения
                </span>
                <p className="text-xs font-light leading-relaxed text-white/80">
                  Правильная баня не может быть душной или сложной в уборке. Мы закладываем автоматизацию управления, сливы и систему "второе дыхание".
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Метод */}
      <section id="method" className="bg-[#111111] py-24 md:py-32 border-t border-white/5">
        <Container>
          <div className="grid items-end gap-12 border-b border-white/10 pb-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionIntro
              eyebrow="Работа"
              title="От идеи до запуска"
              text="Мы не просто отдаём чертежи. Мы ведём проект до готового результата, предотвращая переделки на этапе стройки."
            />
            <div className="flex w-full max-w-sm items-center justify-between gap-4 bg-[#c8aa78] p-6 text-xs font-semibold uppercase tracking-widest text-black lg:justify-self-end">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Проверяем перед сдачей
              </span>
              <span>100%</span>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {methodSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group relative border-l border-white/10 pl-6 pt-2 transition-colors duration-300 hover:border-[#c8aa78]">
                  <span className="mb-4 block font-serif text-sm italic text-[#c8aa78]/50">
                    0{index + 1}
                  </span>
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#c8aa78]" />
                    <h3 className="font-serif text-xl font-light tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs font-light leading-relaxed text-white/50">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Заявка */}
      <section id="request" className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-24 text-white md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8aa78]/10 blur-[120px] rounded-full" />
        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Заявка
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Расскажите, <br />
                <span className="italic text-[#c8aa78]">какой объект нужен</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base">
                Оставьте контакты — мы свяжемся с вами, зададим вопросы по участку или помещению и предложим оптимальный формат.
              </p>
              <div className="mt-12 space-y-4 border-l border-[#c8aa78]/50 pl-6 text-xs font-light uppercase tracking-wider text-white/50">
                <p>• Оценим технические условия объекта</p>
                <p>• Подберем конфигурацию банной зоны</p>
                <p>• Разработаем концепцию и дорожную карту работ</p>
              </div>
            </div>

            <div className="border border-white/10 bg-[#111111] p-8 md:p-12 shadow-2xl">
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

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/60 md:text-base">
        {text}
      </p>
    </div>
  );
}

function CaseCard({ item, className, imageHeight, titleSize }: { item: any; className: string; imageHeight: string; titleSize: string }) {
  return (
    <div className={`group block cursor-pointer ${className}`}>
      <div className={`relative mb-6 overflow-hidden bg-neutral-900 border border-white/5 ${imageHeight}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover opacity-75 transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-100"
        />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#c8aa78]">
        {item.type}
      </p>
      <h3 className={`mt-2 font-serif font-light tracking-tight text-white transition-colors group-hover:text-[#c8aa78] ${titleSize}`}>
        {item.title}
      </h3>
    </div>
  );
}

function ImageCard({ title, text, image, href, meta, index }: { title: string; text: string; image: string; href: string; meta: string; index: number }) {
  return (
    <Link href={href} className="group block cursor-pointer">
      <div className="relative mb-6 h-[480px] overflow-hidden bg-neutral-900 border border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover opacity-60 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute left-6 top-6 border border-[#c8aa78]/30 bg-[#121212]/80 px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#c8aa78] backdrop-blur-md">
          {meta}
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex translate-y-4 items-center justify-between border border-white/10 bg-[#0a0a0a]/90 p-5 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-serif text-sm italic text-[#c8aa78]">
            0{index + 1}
          </span>
          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white">
            К проектам
            <ArrowRight className="h-4 w-4 text-[#c8aa78]" />
          </span>
        </div>
      </div>
      <h3 className="font-serif text-2xl font-light tracking-tight text-white group-hover:text-[#c8aa78] transition-colors">
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/50">
        {text}
      </p>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pb-12 pt-20 text-white/80">
      <Container>
        <div className="grid items-end gap-6 border-b border-white/10 pb-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78]">
              ARCHIPAR
            </p>
            <h2 className="font-serif text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              Строим комплексы, в которых <br />
              <span className="italic text-[#c8aa78]">хочется остаться</span>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <Link
              href="#request"
              className="inline-flex items-center gap-3 border border-[#c8aa78] px-6 py-3 text-xs uppercase tracking-widest text-[#c8aa78] transition-all duration-300 hover:bg-[#c8aa78] hover:text-black"
            >
              Обсудить проект
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 pt-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-light tracking-[0.2em] text-white">
              ARCHIPAR
            </p>
            <p className="mt-6 max-w-sm text-xs font-light leading-relaxed text-white/40">
              Проектирование и строительство премиальных банных комплексов под ключ.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-light uppercase tracking-wider text-white/50 md:col-span-4">
            <div className="flex flex-col gap-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8aa78]">
                Направления
              </p>
              <Link href="/bath-complexes" className="transition-colors duration-300 hover:text-white">Комплексы</Link>
              <Link href="/baths" className="transition-colors duration-300 hover:text-white">Бани</Link>
              <Link href="/saunas" className="transition-colors duration-300 hover:text-white">Сауны</Link>
              <Link href="/hamams" className="transition-colors duration-300 hover:text-white">Хамамы</Link>
            </div>
            <div className="flex flex-col gap-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8aa78]">
                Навигация
              </p>
              <Link href="#portfolio" className="transition-colors duration-300 hover:text-white">Портфолио</Link>
              <Link href="#request" className="transition-colors duration-300 hover:text-white">Контакты</Link>
            </div>
          </div>

          <div className="w-full space-y-3 text-xs font-light text-white/40 md:col-span-3 md:justify-self-end md:text-right">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8aa78]">
              География
            </p>
            <p className="font-normal uppercase tracking-wider text-white">Россия & За рубежом</p>
            <p className="leading-relaxed">
              Работаем с частными резиденциями и коммерческими SPA-объектами.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest text-white/20 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ARCHIPAR. Все права защищены.</p>
          <p className="tracking-[0.3em] text-[#c8aa78]/50">Premium Bath Build</p>
        </div>
      </Container>
    </footer>
  );
}
