import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import type { ProductPageData } from "@/data/products";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Droplets,
  Flame,
  Ruler,
  ShieldCheck,
  Wind,
  MapPin,
  Maximize2,
  Waves,
  Sparkles
} from "lucide-react";

// Данные о флагманских проектах банных комплексов
const flagshipProjects = [
  {
    id: "siberia",
    title: "БАННЫЙ КОМПЛЕКС SIBERIA",
    location: "Россия, г. Москва",
    address: "ул. Новая Переведеновская, дом 6, строение 3",
    description: "Монументальный сибирский банный комплекс в мегаполисе. Сложный архитектурный сценарий, объединяющий экстремальный тепловой контур, купели с ледяной водой и глубокую вентиляцию для долгих парений.",
    specs: ["Парная с закрытой каменкой", "Интегрированный бассейн с противотоком", "Зона сенного отдыха", "Акустическая система звукотерапии"],
    image: "/images/portfolio/siberia-hero.jpg", // Замените на ваши пути к фото
    sideImage: "/images/portfolio/siberia-detail.jpg",
    meta: "Флагман · 450 м²"
  },
  {
    id: "olymp-city",
    title: "БАННЫЙ КОМПЛЕКС OLYMP CITY",
    location: "Турция, Аланья",
    address: "Премиум-квартал «ОЛИМП СИТИ»",
    description: "Ультрасовременное термальное пространство на стыке средиземноморской роскоши и технологичности. Интеграция классического мраморного хамама с мягким паром и панорамной зоны отдыха с видом на побережье.",
    specs: ["Анатомический хамам из цельного мрамора", "Инфинити-бассейн с фильтрацией", "Панорамная баня со стеклянным фасадом", "Система климат-контроля 4 зон"],
    image: "/images/portfolio/turkey-hero.jpg",
    sideImage: "/images/portfolio/turkey-detail.jpg",
    meta: "Интернациональный проект · 620 м²"
  }
];

const engineeringCore = [
  {
    title: "Термодинамика пара",
    text: "Рассчитываем точный объем каменки и мощность печи под кубатуру воздуха. Никакого перегрева или «тяжелого» пара — только мягкое, глубокое прогревание.",
    icon: Flame,
  },
  {
    title: "Гидродинамика и СПА",
    text: "Проектируем бассейны, скрытые переливы, купели с автоматическим удержанием температуры и водоподготовку питьевого класса.",
    icon: Waves,
  },
  {
    title: "Вентиляция «Второе дыхание»",
    text: "Подача свежего очищенного воздуха напрямую к гостям во время парения. Насыщение кислородом без падения температуры в парной.",
    icon: Wind,
  },
  {
    title: "Архитектура света и звука",
    text: "Скрытое низковольтное освещение во влажных зонах, термостойкие световые линии и встроенный Hi-Fi звук для полного погружения.",
    icon: Sparkles,
  },
];

export default function ProductPage({ product }: { product: ProductPageData }) {
  return (
    <main className="bg-[#fcfaf7] text-[#121212] antialiased selection:bg-[#8a6a43] selection:text-white">
      <Header />

      {/* Hero-секция: Красиво жить не запретишь */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#0a0a0a] pb-16 pt-32 md:pb-24">
        <Image
          src={product.heroImage}
          alt={product.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 transition-opacity duration-700 scale-105 hover:scale-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,170,120,0.15),transparent_40%)]" />

        <div className="container-premium relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="mb-6 inline-flex">
            <span className="border border-[#c8aa78]/35 bg-[#c8aa78]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#c8aa78] backdrop-blur-sm">
              {product.eyebrow || "Premium Архитектура"}
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-4xl font-extralight leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {product.title} <br />
                <span className="italic font-normal text-[#c8aa78]">как искусство инженерии</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                Мы создаем не просто парные, а автономные велнес-резиденции под ключ. Проектируем идеальный баланс пара, воды, сценариев вентиляции и эстетики премиальных материалов.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center gap-3 border border-[#c8aa78] bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[#c8aa78]"
                >
                  Обсудить ваш комплекс
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Смотреть проекты презентации
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </Link>
              </div>
            </div>

            {/* Правый технический акцент в Hero */}
            <div className="hidden border-l-2 border-[#c8aa78] bg-white/[0.02] p-8 text-white backdrop-blur-md lg:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Философия ARCHIPAR
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs text-white/40">01 / Интеграция</p>
                  <p className="mt-1 text-sm font-light text-white/80">Бассейн, парная, хамам и инженерия проектируются как единый живой организм.</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">02 / Безопасность</p>
                  <p className="mt-1 text-sm font-light text-white/80">Многоуровневая гидроизоляция и умное управление оборудованием влажных зон.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Текстовый манифест — Строгая архитектурная доминанта */}
      <section className="bg-[#fcfaf7] py-20 md:py-28 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a6a43] block mb-4">
                ЭКСПЕРТИЗА КОМАНДЫ
              </span>
              <h2 className="font-serif text-3xl font-extralight leading-tight text-[#121212] sm:text-4xl md:text-5xl">
                Почему доверяют проектирование нам, а не обычным дизайнерам.
              </h2>
            </div>
            <div className="space-y-6 text-base font-light leading-relaxed text-black/70 lg:pt-8">
              <p>
                Обычные студии интерьеров рисуют красивые 3D-визуализации, не задумываясь, куда уйдет конденсат хамама, как распределится кубатура пара от мощной печи и где разместить узлы водоподготовки бассейна.
              </p>
              <p className="font-medium text-[#121212] border-l-4 border-[#c8aa78] pl-6 italic">
                В ARCHIPAR технический проект и эстетика неразделимы. Каждая линия на чертеже подкреплена расчетом вентиляционных потоков, термодинамики камня и интуитивной эргономики пространства отдыха.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ГЛАВНЫЙ БЛОК: Параллельная интерактивная презентация проектов (SIBERIA & ALANYA) */}
      <section id="showcase" className="bg-[#121212] text-white py-24 md:py-36 space-y-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(200,170,120,0.08),transparent_40%)]" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-20">
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78] block mb-3">
              ФЛАГМАНСКИЕ КЕЙСЫ
            </span>
            <h2 className="font-serif text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl">
              Наши возможности в действии
            </h2>
            <p className="mt-6 text-sm font-light text-white/50 max-w-xl">
              Презентация двух масштабных комплексов, разработанных нашей командой от концептуальных эскизов до авторского надзора над каждым узлом.
            </p>
          </div>

          {/* Проект 1: SIBERIA (Текст слева, Фото справа — Журнальный стиль) */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-6 z-10">
              <div className="flex items-center gap-2 text-[#c8aa78] text-xs tracking-widest font-mono">
                <span>{flagshipProjects[0].meta}</span>
              </div>
              <h3 className="font-serif text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl text-white">
                {flagshipProjects[0].title}
              </h3>
              
              <div className="flex items-start gap-2 text-white/50 text-xs py-1 border-y border-white/10 max-w-max">
                <MapPin className="h-4 w-4 text-[#c8aa78] shrink-0" />
                <span>{flagshipProjects[0].location}, {flagshipProjects[0].address}</span>
              </div>

              <p className="text-sm font-light leading-relaxed text-white/70 pt-2">
                {flagshipProjects[0].description}
              </p>

              <div className="space-y-3 pt-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#c8aa78]">Интегрированные решения:</p>
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                  {flagshipProjects[0].specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-white/80 font-light">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#c8aa78]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Изображения первого проекта: Асимметричное наложение */}
            <div className="lg:col-span-7 relative grid grid-cols-12 gap-4 items-center">
              <div className="col-span-8 relative h-[380px] md:h-[500px] overflow-hidden bg-neutral-900 shadow-2xl group">
                <Image
                  src={flagshipProjects[0].image}
                  alt={flagshipProjects[0].title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="col-span-4 relative h-[260px] md:h-[340px] -ml-12 lg:-ml-20 mt-20 overflow-hidden bg-neutral-900 border-4 border-[#121212] shadow-2xl hidden sm:block group">
                <Image
                  src={flagshipProjects[0].sideImage}
                  alt="Детали SIBERIA"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-11"
                />
              </div>
            </div>
          </div>

          {/* Разделитель с отступом */}
          <div className="h-px bg-white/5 my-32" />

          {/* Проект 2: OLYMP CITY (Фото слева, Текст справа — Реверсивный журнальный стиль) */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Изображения второго проекта (Слева) */}
            <div className="lg:col-span-7 relative grid grid-cols-12 gap-4 items-center order-2 lg:order-1">
              <div className="col-span-4 relative h-[260px] md:h-[340px] -mr-12 lg:-mr-20 mb-20 overflow-hidden bg-neutral-900 border-4 border-[#121212] shadow-2xl z-10 hidden sm:block group">
                <Image
                  src={flagshipProjects[1].sideImage}
                  alt="Детали Olymp City"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-11"
                />
              </div>
              <div className="col-span-8 relative h-[380px] md:h-[500px] overflow-hidden bg-neutral-900 shadow-2xl group">
                <Image
                  src={flagshipProjects[1].image}
                  alt={flagshipProjects[1].title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Текст второго проекта (Справа) */}
            <div className="lg:col-span-5 space-y-6 z-10 order-1 lg:order-2 lg:pl-8">
              <div className="flex items-center gap-2 text-[#c8aa78] text-xs tracking-widest font-mono">
                <span>{flagshipProjects[1].meta}</span>
              </div>
              <h3 className="font-serif text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl text-white">
                {flagshipProjects[1].title}
              </h3>
              
              <div className="flex items-start gap-2 text-white/50 text-xs py-1 border-y border-white/10 max-w-max">
                <MapPin className="h-4 w-4 text-[#c8aa78] shrink-0" />
                <span>{flagshipProjects[1].location}, {flagshipProjects[1].address}</span>
              </div>

              <p className="text-sm font-light leading-relaxed text-white/70 pt-2">
                {flagshipProjects[1].description}
              </p>

              <div className="space-y-3 pt-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#c8aa78]">Интегрированные решения:</p>
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                  {flagshipProjects[1].specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-white/80 font-light">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#c8aa78]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Блок: Инженерия анатомии правильного комплекса */}
      <section className="bg-[#fcfaf7] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-16 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a6a43] mb-3">АНАТОМИЯ ПРОЕКТА</p>
            <h2 className="font-serif text-3xl font-extralight tracking-tight text-[#121212] sm:text-4xl md:text-5xl">
              Создаем безупречный микроклимат
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringCore.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#c8aa78] hover:shadow-md group relative"
                >
                  <div className="absolute right-6 top-6 font-serif text-sm italic text-black/10 group-hover:text-[#c8aa78]/30">
                    0{index + 1}
                  </div>
                  <Icon className="mb-6 h-6 w-6 text-[#8a6a43] transition-colors group-hover:text-black" />
                  <h3 className="mb-3 font-serif text-lg font-medium text-[#121212]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Состав работ — Интерактивный список с галочками */}
      <section className="bg-[#f4f0ea] border-y border-black/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
                СТАНДАРТЫ СОВЕРШЕНСТВА
              </p>
              <h2 className="font-serif text-3xl font-extralight leading-tight text-[#121212] sm:text-4xl">
                Что вы получаете в рамках проектирования
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-black/60">
                Мы сдаем клиенту исчерпывающий комплект рабочей документации, по которому сможет безошибочно работать любая квалифицированная строительная бригада в мире.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-12 shadow-sm border border-black/5 divide-y divide-black/5">
              {product.points && product.points.map((point, index) => (
                <div
                  key={point}
                  className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[48px_1fr_32px] md:items-center group"
                >
                  <span className="font-mono text-xs text-black/30 group-hover:text-[#8a6a43]">0{index + 1}</span>
                  <p className="text-base font-light text-black/80 md:text-lg">
                    {point}
                  </p>
                  <CheckCircle2 className="h-5 w-5 text-[#8a6a43] justify-self-end shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Секция Заявки: Роскошный темный финал */}
      <section id="request" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(138,106,67,0.15),transparent_50%)]" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                АРХИТЕКТУРНЫЙ КОНСАЛТИНГ
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Начнем создание <br />
                <span className="italic text-[#c8aa78]">вашего комплекса</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base">
                Оставьте заявку на разбор концепции. Мы свяжемся с вами, изучим технические параметры участка или дома и подготовим предварительное техническое задание.
              </p>

              <div className="mt-12 space-y-4 border-l border-[#c8aa78]/40 pl-6 text-xs font-light tracking-wider text-white/50">
                <p>✓ Анализ инженерных мощностей (газ, электричество, вода)</p>
                <p>✓ Разработка зонирования: парная / бассейн / комната отдыха</p>
                <p>✓ Подбор материалов под климатическую зону объекта</p>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md md:p-12 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
