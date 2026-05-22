import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Droplets,
  Flame,
  Ruler,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";

// Данные пересобраны под новую структуру
const cases = [
  {
    title: "Банный комплекс в загородной резиденции",
    type: "Частный объект · Нахабино",
    image: "/images/cases/case-01.jpg",
    size: "large",
  },
  {
    title: "Хамам как часть закрытой wellness-зоны",
    type: "Интегрированный блок · Репино",
    image: "/images/cases/case-02.jpg",
    size: "small",
  },
  {
    title: "Парная с авторскими сценариями климата",
    type: "Индивидуальный проект · Раздоры",
    image: "/images/cases/case-03.jpg",
    size: "small",
  },
  {
    title: "Гостевой банный комплекс из сухостойной сосны",
    type: "Коммерческий формат · Алтай",
    image: "/images/cases/case-05.jfif",
    size: "medium",
  },
];

const typologies = [
  {
    title: "Обособленные павильоны",
    text: "Приватные отдельно стоящие банные комплексы. Проектируются в едином ансамбле с ландшафтом и основной архитектурой усадьбы.",
    image: "/images/complexes/private-complex.jpg",
    href: "/bath-complexes",
    meta: "standalone pavilion",
  },
  {
    title: "Интегрированные wellness-блоки",
    text: "Встроенные в структуру главного дома или спа-крыла пространства. Требуют бескомпромиссной гидроизоляции и независимой вентиляции.",
    image: "/images/complexes/house-complex.jpg",
    href: "/bath-complexes",
    meta: "integrated home spa",
  },
  {
    title: "Коммерческие & Гостевые пространства",
    text: "Объекты для загородных клубов, бутик-отелей и резиденций. Рассчитаны на непрерывную эксплуатацию и контролируемый гостевой поток.",
    image: "/images/complexes/commercial-complex.jpg",
    href: "/bath-complexes",
    meta: "hospitality sector",
  },
];

const anatomy = [
  {
    title: "Парная и микроклимат",
    text: "Управление плотностью пара, градиентом температур и залповым проветриванием без нарушения теплового контура.",
    icon: Flame,
  },
  {
    title: "Каменные пространства хамамов",
    text: "Мягкий прогрев поверхностей, анатомические лежаки, скрытая парогенерация и ароматерапия.",
    icon: Droplets,
  },
  {
    title: "Контрастные зоны и водоподготовка",
    text: "Технологичные купели, обливные системы, генераторы льда и системы фильтрации замкнутого цикла.",
    icon: Waves,
  },
  {
    title: "Скрытая климатическая инженерия",
    text: "Приточно-вытяжная вентиляция, осушение воздуха и компенсация избыточной влажности в зонах отдыха.",
    icon: Wind,
  },
];

const methodSteps = [
  {
    title: "Архитектурный аудит и сценарии",
    text: "Анализируем инженерию здания, объем доступных мощностей, антропометрию и персональные ритуалы отдыха будущих владельцев.",
    icon: Compass,
  },
  {
    title: "Проектирование и координация сред",
    text: "Создаем сквозной проект: связываем дизайн-концепцию, раскладку камня/дерева и разводку сложных инженерных трасс в единую модель.",
    icon: Ruler,
  },
  {
    title: "Комплектация и прецизионный монтаж",
    text: "Поставка редких пород древесины, натурального камня, европейского оборудования и сборка узлов силами штатных инженеров бюро.",
    icon: Building2,
  },
  {
    title: "Калибровка, пуск и надзор",
    text: "Финальное тестирование всех режимов, настройка сценариев автоматики, проверка кратности воздухообмена и передача объекта в эксплуатацию.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f0] text-[#121212] antialiased selection:bg-[#8a6a43] selection:text-white">
      <Header />

      {/* 1. HERO: КИНЕМАТОГРАФИЧНЫЙ ВХОД */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#121212] pb-16 pt-32 md:pb-24">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Премиальные банные пространства ARCHIPAR"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              wellness architecture · engineering · execution
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Архитектура пара <br />
                <span className="italic text-[#c8aa78]">и инженерная роскошь</span>
              </h1>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/60 md:text-lg">
                Бюро ARCHIPAR проектирует и реализует персональные банные комплексы и загородные спа-резиденции, где эстетика пространства неотделима от точной математики климата.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center gap-3 bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-colors duration-300 hover:bg-[#dbbc8a]"
                >
                  Инициировать проект
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Смотреть избранные работы
                </Link>
              </div>
            </div>

            <div className="border border-white/5 bg-black/30 p-6 backdrop-blur-md lg:block hidden text-xs font-light tracking-wide text-white/50 space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[#c8aa78] block font-serif text-lg mb-1">Total Control</span>
                Единая ответственность за общестроительные, отделочные и инженерные работы.
              </div>
              <div>
                <span className="text-[#c8aa78] block font-serif text-lg mb-1">Microclimate</span>
                Автоматизированное управление паром, вентиляцией и влажностью.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO: ФИЛОСОФИЯ БЮРО (Заменяет скучную строку доверия) */}
      <section className="py-24 md:py-32 bg-[#f8f5f0]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold mb-4">Манифест ARCHIPAR</p>
              <h2 className="font-serif text-3xl font-extralight leading-snug tracking-tight text-[#121212] sm:text-4xl md:text-5xl">
                Премиальное велнес-пространство — это не просто дорогая отделка стен.
              </h2>
            </div>
            <div className="text-base font-light leading-relaxed text-black/70 space-y-6 lg:pt-8">
              <p>
                Большинство проблем в загородных спа-зонах возникает из-за разрыва между дизайнерами и инженерами. Первые рисуют красивую визуализацию, вторые — пытаются встроить в неё агрегаты вентиляции, разрушая первоначальный объём и эстетику.
              </p>
              <p className="font-medium text-[#121212]">
                Мы ликвидировали этот разрыв. В ARCHIPAR архитектурная мысль изначально опирается на физику процессов: распределение тепловых потоков, кратность воздухообмена, поведение дерева и камня в экстремальных влажностных режимах.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SELECTED WORKS: ПОРТФОЛИО ВЫШЕ — СРАЗУ ПОКАЗЫВАЕМ КЛАСС */}
      <section id="portfolio" className="bg-[#f0eae1] py-24 md:py-32 border-y border-black/5">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionIntro
              eyebrow="Избранные проекты"
              title="Реализованные резиденции"
              text="Каждый объект — индивидуальный ответ на архитектурный контекст усадьбы и персональные сценарии жизни заказчика."
            />
            <Link href="#request" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black border-b border-black pb-1 hover:text-[#8a6a43] hover:border-[#8a6a43] transition-colors">
              Смотреть все кейсы бюро <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-12 items-start">
            {/* Большой кейс слева */}
            <div className="md:col-span-12 lg:col-span-8 group block cursor-pointer">
              <div className="relative h-[480px] overflow-hidden bg-black mb-4">
                <Image src={cases[0].image} alt={cases[0].title} fill className="object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-102" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[0].type}</p>
              <h3 className="font-serif text-3xl font-light tracking-tight mt-1 group-hover:text-[#8a6a43] transition-colors">{cases[0].title}</h3>
            </div>

            {/* Маленький кейс справа */}
            <div className="md:col-span-6 lg:col-span-4 group block cursor-pointer lg:mt-16">
              <div className="relative h-[414px] overflow-hidden bg-black mb-4">
                <Image src={cases[1].image} alt={cases[1].title} fill className="object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-102" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[1].type}</p>
              <h3 className="font-serif text-2xl font-light tracking-tight mt-1 group-hover:text-[#8a6a43] transition-colors">{cases[1].title}</h3>
            </div>

            {/* Маленький кейс слева внизу */}
            <div className="md:col-span-6 lg:col-span-4 group block cursor-pointer">
              <div className="relative h-[414px] overflow-hidden bg-black mb-4">
                <Image src={cases[2].image} alt={cases[2].title} fill className="object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-102" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[2].type}</p>
              <h3 className="font-serif text-2xl font-light tracking-tight mt-1 group-hover:text-[#8a6a43] transition-colors">{cases[2].title}</h3>
            </div>

            {/* Большой кейс справа внизу */}
            <div className="md:col-span-12 lg:col-span-8 group block cursor-pointer md:mt-[-64px] lg:mt-0">
              <div className="relative h-[480px] overflow-hidden bg-black mb-4">
                <Image src={cases[3].image} alt={cases[3].title} fill className="object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-102" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[3].type}</p>
              <h3 className="font-serif text-3xl font-light tracking-tight mt-1 group-hover:text-[#8a6a43] transition-colors">{cases[3].title}</h3>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. TYPOLOGIES: ТИПОЛОГИИ ПРОСТРАНСТВ */}
      <section id="typologies" className="py-24 md:py-32 bg-[#f8f5f0]">
        <Container>
          <SectionIntro
            eyebrow="Архитектурные формы"
            title="Форматы интеграции велнес-зон"
            text="Разделяем объекты по логике объемно-планировочных решений. Каждая типология требует специфического инженерного фундамента."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {typologies.map((item, index) => (
              <ImageCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. ANATOMY & ENGINEERING: ОБЪЕДИНЕННЫЙ БЛОК ЭСТЕТИКИ И ФИЗИКИ ПАРА */}
      <section id="anatomy" className="relative overflow-hidden bg-[#121212] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,106,67,0.15),transparent_50%)]" />
        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c8aa78] font-semibold">
                Анатомия велнеса
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Эстетика, <br />
                <span className="italic text-[#c8aa78]">подчиненная физике</span>
              </h2>
              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-white/60 md:text-base">
                Мы проектируем скрытые узлы с маниакальным вниманием к деталям. За безупречными панелями из канадского кедра или слэбами натурального кварцита скрывается прецизионная инженерная система.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {anatomy.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-[#c8aa78] mb-4" />
                      <h3 className="font-serif text-lg font-light text-white mb-2">{item.title}</h3>
                      <p className="text-xs font-light text-white/50 leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden bg-black lg:h-[650px]">
              <Image
                src="/images/modules/engineering.jpg"
                alt="Техническое оснащение ARCHIPAR"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-black/60 border border-white/10 p-6 backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-widest text-[#c8aa78] block mb-2 font-semibold">Инженерный стандарт бюро</span>
                <p className="text-xs font-light text-white/80 leading-relaxed">
                  Использование независимых систем автоматики автоматизирует управление климатом. Датчики качества воздуха CO₂ и влажности плавно регулируют приток, обеспечивая легкое дыхание даже при экстремально высоких температурах в парной.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. THE METHOD: АВТОРСКИЙ МЕТОД РЕАЛИЗАЦИИ (Процесс + жесткий контроль) */}
      <section id="method" className="py-24 md:py-32 bg-[#f8f5f0]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-end border-b border-black/10 pb-12">
            <SectionIntro
              eyebrow="Реализация"
              title="Авторский метод сквозного контроля"
              text="Мы не передаем свои чертежи сторонним бригадам. Бюро несет финальную юридическую и репутационную ответственность за финальный результат."
            />
            <div className="bg-[#121212] p-6 text-white text-xs uppercase tracking-widest font-light flex items-center gap-4 justify-between lg:justify-self-end w-full max-w-sm">
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#c8aa78]" /> Гарантия на системы</span>
              <span className="text-[#c8aa78]">5 лет</span>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {methodSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative border-l border-black/10 pl-6 pt-2 group hover:border-[#8a6a43] transition-colors duration-300">
                  <span className="font-serif text-sm italic text-black/30 block mb-4">0{index + 1}</span>
                  <div className="flex items-center gap-2 mb-3">
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

      {/* 7. ATELIER / REQUEST FORM: АРХИТЕКТУРНЫЙ АУДИТ */}
      <section id="request" className="relative overflow-hidden bg-[#121212] py-24 text-white md:py-32 border-t border-white/5">
        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c8aa78] font-semibold">
                Briefing
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Инициировать <br />
                <span className="italic text-[#c8aa78]">проектирование</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base">
                Оставьте ваши контакты для организации закрытой встречи или первичного аудита вашего объекта ведущими архитекторами бюро ARCHIPAR.
              </p>

              <div className="mt-12 space-y-4 border-l border-white/10 pl-6 text-xs uppercase tracking-wider text-white/40 font-light">
                <p>• Первичный анализ технических условий здания за 48 часов</p>
                <p>• Разработка индивидуальной концепции велнес-сценариев</p>
                <p>• Прямые контракты с европейскими фабриками оборудования</p>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

// Вспомогательные компоненты разметки
function Container({ children }: { children: React.ReactNode }) {
  return <div className="container-premium max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">{children}</div>;
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
      <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">
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
      <div className="relative h-[440px] overflow-hidden bg-black mb-6">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover opacity-90 transition-all duration-1000 ease-out group-hover:scale-102 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 bg-black/40 border border-white/10 px-3 py-1 text-[9px] uppercase tracking-widest text-white backdrop-blur-sm">
          {meta}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 bg-black/60 border border-white/10 p-4 backdrop-blur-sm">
          <span className="font-serif text-xs italic text-white/50">0{index + 1}</span>
          <span className="text-[10px] uppercase tracking-widest text-white font-semibold flex items-center gap-2">
            Спецификация <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      <h3 className="font-serif text-2xl font-light tracking-tight text-[#121212]">
        {title}
      </h3>
      <p className="mt-3 text-sm font-light leading-relaxed text-black/60 max-w-sm">
        {text}
      </p>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/10 pt-20 pb-12 text-white/80">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 items-end pb-12 border-b border-white/10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#c8aa78] font-semibold mb-3">
              wellness architecture & engineering
            </p>
            <h2 className="font-serif text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              Создаем пространства, которые <br />
              <span className="italic text-[#c8aa78]">остаются архитектурным наследием</span>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <Link 
              href="#request" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-[#c8aa78] pb-1 hover:text-[#dbbc8a] hover:border-[#dbbc8a] transition-all duration-300"
            >
              Начать проектирование <ArrowUpRight className="h-3 w-3 text-[#c8aa78]" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 pt-16">
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-light tracking-[0.2em] text-white">ARCHIPAR</p>
            <p className="mt-6 max-w-sm text-xs font-light leading-relaxed text-white/40">
              Проектирование и реализация премиальных банных и велнес-комплексов. Единство инженерного расчета и чистой геометрии.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs uppercase tracking-wider font-light text-white/50">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] tracking-[0.2em] text-white/30 font-semibold uppercase mb-1">Решения</p>
              <Link href="/bath-complexes" className="hover:text-[#c8aa78] transition-colors duration-300">Типологии</Link>
              <Link href="/baths" className="hover:text-[#c8aa78] transition-colors duration-300">Парные</Link>
              <Link href="/saunas" className="hover:text-[#c8aa78] transition-colors duration-300">Сауны</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] tracking-[0.2em] text-white/30 font-semibold uppercase mb-1">Навигация</p>
              <Link href="/hamams" className="hover:text-[#c8aa78] transition-colors duration-300">Хамамы</Link>
              <Link href="#portfolio" className="hover:text-[#c8aa78] transition-colors duration-300">Портфолио</Link>
              <Link href="#request" className="hover:text-[#c8aa78] transition-colors duration-300">Контакты</Link>
            </div>
          </div>

          <div className="md:col-span-3 text-xs font-light text-white/40 space-y-3 md:justify-self-end md:text-right w-full">
            <p className="text-[10px] tracking-[0.2em] text-white/30 font-semibold uppercase mb-1">География</p>
            <p className="text-white font-normal uppercase tracking-wider">Россия & СНГ</p>
            <p className="leading-relaxed">Создание персональных спа-резиденций и коммерческих спа-объектов</p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-widest flex flex-col gap-4 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ARCHIPAR. Все права защищены.</p>
          <p className="tracking-[0.3em] text-white/30">Digital Architecture & Engineering</p>
        </div>
      </Container>
    </footer>
  );
}
