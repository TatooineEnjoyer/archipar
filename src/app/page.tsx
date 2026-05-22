import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
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

const trust = [
  "Архитектурный подход к wellness-пространствам",
  "Инженерия климата, влажности и безопасности",
  "Реализация под ключ и авторский надзов",
  "Частные резиденции и коммерческие объекты",
];

const complexes = [
  {
    title: "Частный банный комплекс",
    text: "Приватное пространство восстановления рядом с домом: парная, хамам, сауна, купель, душевая и зона отдыха в единой архитектуре.",
    image: "/images/complexes/private-complex.jpg",
    href: "/bath-complexes",
    meta: "residence wellness",
  },
  {
    title: "Комплекс внутри дома",
    text: "Встроенный wellness-блок с точной инженерией, вентиляцией, влагозащитой и сценариями отдыха для семьи и гостей.",
    image: "/images/complexes/house-complex.jpg",
    href: "/bath-complexes",
    meta: "home spa",
  },
  {
    title: "Гостевой и коммерческий формат",
    text: "Решение для отелей, клубов и резиденций, где важны масштаб, поток гостей и стабильная эксплуатация.",
    image: "/images/complexes/commercial-complex.jpg",
    href: "/bath-complexes",
    meta: "hospitality",
  },
];

const modules = [
  {
    title: "Парная",
    text: "Температура, влажность, полки, свет, печь и вентиляция работают как единый сценарий пара.",
    image: "/images/modules/steam-room.jpg",
    href: "/baths",
    icon: Flame,
  },
  {
    title: "Хамам",
    text: "Камень, мягкое тепло, парогенерация, лежаки и подсветка для спокойного SPA-ритуала.",
    image: "/images/modules/hamam.jpg",
    href: "/hamams",
    icon: Droplets,
  },
  {
    title: "Сауна",
    text: "Сухой жар, чистая геометрия, безопасные материалы, скрытый свет и электробезопасность.",
    image: "/images/modules/sauna.jpg",
    href: "/saunas",
    icon: Flame,
  },
  {
    title: "Зона отдыха",
    text: "Пространство восстановления после процедур: мебель, акустика, свет, приватность и атмосфера.",
    image: "/images/modules/lounge.jpg",
    href: "#request",
    icon: Waves,
  },
  {
    title: "Купель и охлаждение",
    text: "Контрастные процедуры: купели, душевые, лед, охлаждение, водоподготовка и безопасные покрытия.",
    image: "/images/modules/cooling.jpg",
    href: "#request",
    icon: Droplets,
  },
  {
    title: "Инженерия",
    text: "Вентиляция, влажность, отопление, автоматика, электрика, вода, сервисный доступ и надежность.",
    image: "/images/modules/engineering.jpg",
    href: "#engineering",
    icon: Wind,
  },
];

const cases = [
  {
    title: "Банный комплекс в загородной резиденции",
    type: "Частный объект",
    image: "/images/cases/case-01.jpg",
  },
  {
    title: "Хамам как часть wellness-зоны",
    type: "Комплекс в доме",
    image: "/images/cases/case-02.jpg",
  },
  {
    title: "Парная с авторскими сценариями климата",
    type: "Индивидуальный проект",
    image: "/images/cases/case-03.jpg",
  },
  {
    title: "Гостевой банный комплекс",
    type: "Коммерческий объект",
    image: "/images/cases/case-05.jfif",
  },
];

const processSteps = [
  {
    title: "Консультация и аудит объекта",
    text: "Разбираем задачу, состав семьи или поток гостей, ограничения помещения, инженерные вводы и желаемый сценарий отдыха.",
    icon: Compass,
  },
  {
    title: "Концепция и планировка",
    text: "Собираем архитектурную идею: маршруты, зоны, материалы, свет, климатические сценарии и визуальную подачу.",
    icon: Ruler,
  },
  {
    title: "Инженерия и спецификация",
    text: "Прорабатываем вентиляцию, влажность, отопление, электрику, воду, канализацию, автоматику и безопасность.",
    icon: Wind,
  },
  {
    title: "Реализация и авторский надзор",
    text: "Синхронизируем строителей, отделку, инженерные узлы и поставки, чтобы итог совпадал с концепцией.",
    icon: Building2,
  },
  {
    title: "Пуск, настройка и эксплуатация",
    text: "Проверяем климат, сценарии пара, проветривание, автоматику, сервисный доступ и передаем объект владельцу.",
    icon: CheckCircle2,
  },
];

const engineering = [
  "Вентиляция, залповое проветривание и удаление влаги",
  "Сценарии пара, температуры и влажности",
  "Гидроизоляция, водоотведение и безопасные влажные зоны",
  "Электрика, автоматика, световые сценарии и сервисный доступ",
  "Материалы, дерево, камень и долговечность эксплуатации",
];

const numbers = [
  { value: "01", label: "единый сценарий отдыха" },
  { value: "360°", label: "архитектура, климат, инженерия" },
  { value: "под ключ", label: "от идеи до запуска" },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f0] text-[#121212] antialiased selection:bg-[#8a6a43] selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#121212] pb-16 pt-32 md:pb-24">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Премиальный банный комплекс ARCHIPAR"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 mix-blend-luminosity transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              architecture · climate · bath culture
            </span>
            <span className="border border-[#c8aa78]/30 bg-[#c8aa78]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#c8aa78] backdrop-blur-sm">
              ARCHIPAR
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Премиальные банные <br className="hidden md:inline" />
                <span className="italic text-[#c8aa78]">комплексы под ключ</span>
              </h1>

              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                Проектируем цельные wellness-пространства, где архитектура, инженерия климата, пар, вода, свет и материалы работают как единый сценарий восстановления.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center gap-3 bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-colors duration-300 hover:bg-[#dbbc8a]"
                >
                  Обсудить проект
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#complexes"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Смотреть решения
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="border border-white/10 bg-black/40 p-8 backdrop-blur-md lg:block hidden">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">
                комплексный подход
              </p>
              <div className="mt-6 grid gap-6">
                {numbers.map((item) => (
                  <div key={item.label} className="border-t border-white/10 pt-4 first:border-none first:pt-0">
                    <p className="font-serif text-3xl font-light tracking-tight text-[#c8aa78]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-white/60 font-light">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST LINE */}
      <section className="border-b border-black/5 bg-[#f3ede2] py-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <div key={item} className="flex items-start gap-3 text-xs uppercase tracking-wider text-black/70 font-light">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#8a6a43] mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-32 bg-[#f8f5f0]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <SectionIntro
              eyebrow="философия"
              title="Баня, хамам и сауна не должны жить отдельно"
              text="Премиальный объект ощущается дорогим не из-за одной красивой картинки, а из-за цельности: как человек входит, прогревается, охлаждается, отдыхает, видит свет и пользуется пространством без лишних действий."
            />

            <div className="relative min-h-[450px] overflow-hidden bg-[#121212] md:min-h-[550px]">
              <Image
                src="/images/hero/hero-secondary.jpg"
                alt="Атмосфера банного комплекса ARCHIPAR"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8 md:p-12 max-w-xl">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#c8aa78] font-semibold">
                  не отделка, а опыт
                </p>
                <p className="font-serif text-2xl font-light leading-snug tracking-tight text-white md:text-3xl">
                  Свет, пар, вода, дерево и инженерия собираются в один ритуал.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPLEXES */}
      <section id="complexes" className="pb-24 md:pb-32 bg-[#f8f5f0]">
        <Container>
          <SectionIntro
            eyebrow="форматы комплексов"
            title="Формат под объект и сценарий жизни"
            text="Для частного дома, отдельного строения, резиденции или коммерческого SPA важны разные маршруты, нагрузки, инженерные решения и визуальная подачу."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {complexes.map((item, index) => (
              <ImageCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* MODULES */}
      <section id="modules" className="bg-[#f0eae1] py-24 md:py-32 border-y border-black/5">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end border-b border-black/10 pb-12">
            <SectionIntro
              eyebrow="модули комплекса"
              title="Каждый элемент работает на общий сценарий отдыха"
              text="Парная, хамам, сауна, зона отдыха, купель и инженерия не собираются случайно. Они проектируются как связанные части одного премиального пространства."
            />
            <p className="max-w-md text-sm font-light leading-relaxed text-black/60 lg:justify-self-end">
              Вместо пустого пространства показываем сразу весь состав комплекса: от горячих зон до охлаждения и инженерии, чтобы визуально было понятно, из чего собирается премиальный сценарий отдыха.
            </p>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group block"
                >
                  <div className="relative h-64 overflow-hidden bg-black mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-[#8a6a43]" />
                        <h3 className="font-serif text-2xl font-light tracking-tight text-[#121212]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm font-light leading-relaxed text-black/60 max-w-sm">
                        {item.text}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-black/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ENGINEERING */}
      <section id="engineering" className="relative overflow-hidden bg-[#121212] py-24 text-white md:py-32">
        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c8aa78] font-semibold">
                инженерия и климат
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Стабильный климат — <br />
                <span className="italic text-[#c8aa78]">скрытая роскошь</span> комплекса
              </h2>
              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-white/60 md:text-base">
                Визуальная часть важна, но объект становится премиальным только тогда, когда он предсказуемо греется, проветривается, держит влажность, безопасен и удобен в обслуживании.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="relative min-h-[300px] overflow-hidden bg-black md:min-h-[350px]">
                <Image
                  src="/images/modules/engineering.jpg"
                  alt="Инженерия банного комплекса"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <p className="absolute bottom-6 left-6 right-6 font-serif text-xl font-light tracking-tight text-white/90">
                  Вентиляция, влажность, электрика, вода и автоматика заранее закладываются в architecture.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {engineering.map((item) => (
                  <div key={item} className="border border-white/5 bg-white/[0.02] p-5 text-xs uppercase tracking-wider font-light text-white/70 leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32 bg-[#f8f5f0]">
        <Container>
          <SectionIntro
            eyebrow="процесс"
            title="От идеи до запуска"
            text="Премиальный уровень держится на последовательности: сначала сценарий отдыха, затем архитектура, инженерия, реализация и настройка объекта."
          />

          <div className="mt-16 border-t border-black/10">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group grid gap-6 border-b border-black/10 py-8 md:grid-cols-[60px_1fr_1.2fr] md:items-start transition-colors duration-300 hover:bg-black/[0.01]">
                  <span className="font-serif text-sm italic text-black/40">0{index + 1}</span>
                  <h3 className="font-serif text-2xl font-light tracking-tight text-[#121212]">
                    {item.title}
                  </h3>
                  <div className="flex gap-4 text-black/70">
                    <Icon className="h-4 w-4 shrink-0 text-[#8a6a43] mt-1" />
                    <p className="text-sm font-light leading-relaxed max-w-xl">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* PORTFOLIO / CASES */}
      <section id="cases" className="bg-[#f0eae1] py-24 md:py-32 border-t border-black/5">
        <Container>
          <SectionIntro
            eyebrow="портфолио"
            title="Объекты, создающие новый опыт wellness"
            text="Реализованные частные резиденции, индивидуальные концепты, детали материалов и инженерные решения нашей студии."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-12 items-start">
            {/* Case 1 */}
            <div className="md:col-span-12 lg:col-span-8 group block cursor-pointer">
              <div className="relative h-[450px] overflow-hidden bg-black mb-4">
                <Image src={cases[0].image} alt={cases[0].title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover opacity-85 transition-transform duration-1000 ease-out group-hover:scale-105" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[0].type}</p>
              <h3 className="font-serif text-3xl font-light tracking-tight mt-1">{cases[0].title}</h3>
            </div>

            {/* Case 2 */}
            <div className="md:col-span-6 lg:col-span-4 group block cursor-pointer lg:mt-12">
              <div className="relative h-[500px] overflow-hidden bg-black mb-4">
                <Image src={cases[1].image} alt={cases[1].title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-85 transition-transform duration-1000 ease-out group-hover:scale-105" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[1].type}</p>
              <h3 className="font-serif text-2xl font-light tracking-tight mt-1">{cases[1].title}</h3>
            </div>

            {/* Case 3 */}
            <div className="md:col-span-6 lg:col-span-4 group block cursor-pointer">
              <div className="relative h-[380px] overflow-hidden bg-black mb-4">
                <Image src={cases[2].image} alt={cases[2].title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-85 transition-transform duration-1000 ease-out group-hover:scale-105" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[2].type}</p>
              <h3 className="font-serif text-2xl font-light tracking-tight mt-1">{cases[2].title}</h3>
            </div>

            {/* Case 4 */}
            <div className="md:col-span-12 lg:col-span-8 group block cursor-pointer">
              <div className="relative h-[420px] overflow-hidden bg-black mb-4">
                <Image src={cases[3].image} alt={cases[3].title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover opacity-85 transition-transform duration-1000 ease-out group-hover:scale-105" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{cases[3].type}</p>
              <h3 className="font-serif text-3xl font-light tracking-tight mt-1">{cases[3].title}</h3>
            </div>
          </div>
        </Container>
      </section>

      {/* TEAM & CONTROL */}
      <section className="py-24 md:py-32 bg-[#f8f5f0]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative min-h-[450px] overflow-hidden bg-black md:min-h-[550px]">
              <Image
                src="/images/team/team-main.jpg"
                alt="Команда ARCHIPAR за работой"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8 md:p-12">
                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#c8aa78] font-semibold">
                  команда и контроль
                </p>
                <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                  Премиальный объект требует тотального контроля деталей
                </h2>
              </div>
            </div>

            <div className="bg-[#121212] p-8 md:p-12 text-white">
              <Sparkles className="h-6 w-6 text-[#c8aa78]" />
              <h3 className="font-serif mt-6 text-2xl font-light leading-snug tracking-tight text-white md:text-3xl lg:text-4xl">
                ARCHIPAR ведет проект как единую систему, исключая ошибки подрядчиков.
              </h3>
              <p className="mt-6 text-sm font-light leading-relaxed text-white/60">
                Это снижает риск конфликтов между красивой картинкой и инженерной реальностью: вентиляция не спорит с отделкой, свет не мешает обслуживанию, влажные зоны идеально изолированы.
              </p>
              <Link href="#request" className="mt-8 inline-flex items-center gap-3 bg-[#8a6a43] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#a17d52]">
                Получить консультацию
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* REQUEST FORM */}
      <section id="request" className="relative overflow-hidden bg-[#121212] py-24 text-white md:py-32 border-t border-white/5">
        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c8aa78] font-semibold">
                заявка
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Обсудить проект <br />
                <span className="italic text-[#c8aa78]">банного комплекса</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base">
                Оставьте контакты — команда ARCHIPAR свяжется с вами, чтобы обсудить формат комплекса, задачи, инженерные ограничения и сформировать предварительный бюджет.
              </p>

              <div className="mt-10 space-y-3 text-xs uppercase tracking-wider text-white/50 font-light">
                <p>• Частные дома, резиденции и гостевые комплексы</p>
                <p>• Парные, хамамы, сауны, купели и зоны отдыха</p>
                <p>• Архитектура, инженерия, комплектация и запуск</p>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

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
      <div className="relative h-[480px] overflow-hidden bg-black mb-6">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover opacity-90 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 bg-black/40 border border-white/10 px-3 py-1 text-[9px] uppercase tracking-widest text-white backdrop-blur-sm">
          {meta}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 bg-black/60 border border-white/10 p-4 backdrop-blur-sm">
          <span className="font-serif text-xs italic text-white/50">0{index + 1}</span>
          <span className="text-[10px] uppercase tracking-widest text-white font-semibold flex items-center gap-2">
            Подробнее <ArrowUpRight className="h-3 w-3" />
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
