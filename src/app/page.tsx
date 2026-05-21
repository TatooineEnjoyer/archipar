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
  Play,
  Ruler,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";

const trust = [
  "Архитектурный подход к wellness-пространствам",
  "Инженерия климата, влажности и безопасности",
  "Реализация под ключ и авторский надзор",
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
    image: "/images/modules/case-02.jpg",
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
  {
    title: "Комплекс с купелью и душевой зоной",
    type: "Контрастные процедуры",
    image: "/images/cases/case-06.jfif",
  },
];

const process = [
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
    <main className="bg-[#f4f0e8] text-[#111]">
      <Header />

      <section className="relative min-h-screen overflow-hidden bg-black">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Премиальный банный комплекс ARCHIPAR"
          fill
          priority
          sizes="100vw"
          className="image-drift object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_18%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.76),rgba(0,0,0,0.35),rgba(0,0,0,0.16))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/78 to-transparent" />

        <div className="container-premium relative z-10 flex min-h-screen items-end pb-10 pt-32 md:pb-14">
          <div className="w-full">
            <div className="reveal-up mb-6 flex flex-wrap items-center gap-3 text-white/70">
              <span className="rounded-full border border-white/20 bg-black/24 px-4 py-2 text-[10px] uppercase tracking-[0.24em] backdrop-blur md:text-[11px]">
                architecture · climate · bath culture
              </span>
              <span className="rounded-full border border-white/20 bg-black/24 px-4 py-2 text-[10px] uppercase tracking-[0.24em] backdrop-blur md:text-[11px]">
                ARCHIPAR
              </span>
            </div>

            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <h1 className="reveal-up reveal-delay-1 max-w-4xl text-5xl font-light leading-[0.92] tracking-[-0.065em] text-white md:text-7xl lg:text-[88px] xl:text-[96px]">
                  Премиальные банные комплексы под ключ
                </h1>

                <p className="reveal-up reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/76 md:text-lg">
                  Проектируем цельные wellness-пространства, где архитектура,
                  инженерия климата, пар, вода, свет и материалы работают как
                  один сценарий восстановления.
                </p>

                <div className="reveal-up reveal-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#request"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7f2e9] px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-black/10 transition hover:bg-[#c8aa78] hover:text-black"
                  >
                    Обсудить проект
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="#complexes"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/28 bg-black/42 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-md transition duration-300 hover:bg-[#8a6a43] hover:text-white"
                  >
                    Смотреть решения
                    <ArrowUpRight className="inline-flex items-center justify-center rounded-full border border-white/22 bg-black/28 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-[#8a6a43] hover:text-white" />
                  </Link>
                </div>
              </div>

              <div className="premium-ring reveal-up reveal-delay-2 hidden rounded-[32px] bg-black/28 p-5 text-white backdrop-blur-xl lg:block">
                <p className="text-xs uppercase tracking-[0.26em] text-white/52">
                  комплексный подход
                </p>
                <div className="mt-5 grid gap-4">
                  {numbers.map((item) => (
                    <div key={item.label} className="border-t border-white/12 pt-4">
                      <p className="text-2xl font-light tracking-[-0.04em]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm text-white/62">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#efe7dc] py-6">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {trust.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-black/70">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6a43]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <SectionIntro
              eyebrow="философия"
              title="Баня, хамам и сауна не должны жить отдельно"
              text="Премиальный объект ощущается дорогим не из-за одной красивой картинки, а из-за цельности: как человек входит, прогревается, охлаждается, отдыхает, видит свет и пользуется пространством без лишних действий."
            />

            <div className="parallax-card relative min-h-[420px] overflow-hidden rounded-[36px] bg-black shadow-2xl md:min-h-[500px]">
              <Image
                src="/images/hero/hero-secondary.jpg"
                alt="Атмосфера банного комплекса ARCHIPAR"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="image-drift object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
              <div className="absolute bottom-0 max-w-xl p-7 text-white md:p-9">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/55">
                  не отделка, а опыт
                </p>
                <p className="text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
                  Свет, пар, вода, дерево и инженерия собираются в один ритуал.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="complexes" className="pb-20 md:pb-24">
        <Container>
          <SectionIntro
            eyebrow="форматы комплексов"
            title="Подбираем не типовую баню, а формат под объект и сценарий жизни"
            text="Для частного дома, отдельного строения, резиденции или коммерческого SPA важны разные маршруты, нагрузки, инженерные решения и визуальная подача."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {complexes.map((item, index) => (
              <ImageCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section id="modules" className="bg-[#e9dfd1] py-20 md:py-24">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[0.92fr_1fr] lg:items-end">
            <SectionIntro
              eyebrow="модули комплекса"
              title="Каждый элемент работает на общий сценарий отдыха"
              text="Парная, хамам, сауна, зона отдыха, купель и инженерия не собираются случайно. Они проектируются как связанные части одного премиального пространства."
            />

            <p className="max-w-xl text-base leading-relaxed text-black/55 md:justify-self-end md:text-lg">
              Вместо пустого пространства показываем сразу весь состав комплекса:
              от горячих зон до охлаждения и инженерии, чтобы визуально было
              понятно, из чего собирается премиальный сценарий отдыха.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className={
                    index === 0
                      ? "parallax-card group overflow-hidden rounded-[30px] bg-[#f7f2e9] shadow-sm transition duration-500 hover:shadow-2xl md:col-span-2 xl:col-span-1"
                      : "parallax-card group overflow-hidden rounded-[30px] bg-[#f7f2e9] shadow-sm transition duration-500 hover:shadow-2xl"
                  }
                >
                  <div className={index === 0 ? "relative h-64 overflow-hidden xl:h-60" : "relative h-60 overflow-hidden"}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/8 to-transparent" />
                  </div>

                  <div className="p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <Icon className="h-6 w-6 text-[#8a6a43]" />
                      <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <h3 className="text-3xl leading-none tracking-[-0.04em] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-relaxed text-black/62">
                      {item.text}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="engineering" className="relative overflow-hidden bg-[#151515] py-20 text-white md:py-24">
        <div className="absolute -right-24 top-0 h-[520px] w-[520px] rounded-full bg-[#8a6a43]/20 blur-3xl" />

        <Container>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
                инженерия и климат
              </p>

              <h2 className="max-w-3xl text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                Стабильный климат — скрытая роскошь банного комплекса
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
                Визуальная часть важна, но объект становится премиальным только
                тогда, когда он предсказуемо греется, проветривается, держит
                влажность, безопасен и удобен в обслуживании.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="parallax-card relative min-h-[320px] overflow-hidden rounded-[34px] bg-black md:min-h-[360px]">
                <Image
                  src="/images/modules/engineering.jpg"
                  alt="Инженерия банного комплекса"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="image-drift object-cover opacity-[0.82]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-transparent" />
                <div className="absolute bottom-0 p-7 md:p-8">
                  <p className="max-w-xl text-2xl font-light leading-tight tracking-[-0.04em] md:text-3xl">
                    Вентиляция, влажность, электрика, вода и автоматика заранее
                    закладываются в архитектуру.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {engineering.map((item) => (
                  <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-white/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="py-20 md:py-24">
        <Container>
          <SectionIntro
            eyebrow="процесс"
            title="От идеи и планировки до запуска комплекса"
            text="Премиальный уровень держится на последовательности: сначала сценарий отдыха, затем архитектура, инженерия, реализация и настройка объекта."
          />

          <div className="mt-10 grid gap-3">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="group grid gap-5 border-t border-black/10 py-6 transition md:grid-cols-[72px_minmax(0,0.95fr)_minmax(330px,0.7fr)] md:items-start">
                  <span className="font-mono text-sm text-black/35">0{index + 1}</span>
                  <h3 className="max-w-3xl text-3xl leading-[1.02] tracking-[-0.045em] md:text-4xl lg:text-[44px]">
                    {item.title}
                  </h3>
                  <div className="flex gap-4 text-black/68">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-[#8a6a43]" />
                    <p className="text-base leading-relaxed md:text-[15px] lg:text-base">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="cases" className="bg-[#efe7dc] py-20 md:py-24">
        <Container>
          <SectionIntro
            eyebrow="кейсы и визуальный ряд"
            title="Объекты, где архитектура и банная культура становятся одним опытом"
            text="Блок можно использовать как портфолио: реальные проекты, концепты, детали материалов, инженерные решения и будущие видеоотзывы."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, index) => (
              <Link key={item.title} href="#request" className={index === 0 ? "parallax-card group block overflow-hidden rounded-[34px] bg-black md:col-span-2 lg:col-span-2" : "parallax-card group block overflow-hidden rounded-[34px] bg-black"}>
                <div className={index === 0 ? "relative h-[470px] overflow-hidden" : "relative h-[330px] overflow-hidden"}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/18 to-transparent" />

                  <div className="absolute bottom-0 p-7 text-white md:p-8">
                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/62">
                      {item.type}
                    </p>
                    <h3 className={index === 0 ? "max-w-3xl text-4xl font-light leading-[0.96] tracking-[-0.055em] md:text-6xl" : "text-3xl font-light leading-[0.96] tracking-[-0.04em] md:text-4xl"}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-center">
            <div className="parallax-card relative min-h-[520px] overflow-hidden rounded-[40px] bg-black md:min-h-[580px]">
              <Image
                src="/images/team/team-main.jpg"
                alt="Команда ARCHIPAR за работой"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="image-drift object-cover opacity-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
              <div className="absolute bottom-0 max-w-2xl p-7 text-white md:p-9">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/55">
                  команда и контроль
                </p>
                <h2 className="text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                  Премиальный объект требует не только дизайна, но и контроля деталей
                </h2>
              </div>
            </div>

            <div className="rounded-[34px] bg-[#111] p-7 text-white shadow-2xl md:p-9">
              <Sparkles className="h-7 w-7 text-[#c8aa78]" />
              <h3 className="mt-7 text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
                ARCHIPAR ведет проект как единую систему, а не как набор отдельных подрядчиков.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-white/62 md:text-lg">
                Это снижает риск конфликтов между красивой картинкой и инженерной
                реальностью: вентиляция не спорит с отделкой, свет не мешает
                обслуживанию, влажные зоны не конфликтуют с материалами.
              </p>
              <Link href="#request" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#8a6a43] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(138,106,67,0.32)] transition duration-300 hover:bg-[#b8935f] hover:text-white">
                Получить консультацию
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="video" className="bg-[#e9dfd1] py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
                видео
              </p>
              <h2 className="text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                Видеообъекты, проходки и отзывы владельцев
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/62 md:text-lg">
                Для дорогого продукта важно показать не только фото, но и ощущение:
                движение пара, свет, масштаб, звук воды и реальные впечатления
                владельцев.
              </p>
            </div>

            <Link href="#request" className="parallax-card group relative min-h-[420px] overflow-hidden rounded-[36px] bg-black">
              <Image
                src="/images/video/video-preview.jpg"
                alt="Видео банного комплекса ARCHIPAR"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition group-hover:scale-105 md:h-24 md:w-24">
                <Play className="ml-1 h-8 w-8 fill-black" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-24">
        <Container>
          <SectionIntro
            eyebrow="доверие"
            title="Премиальный проект выбирают не по цене, а по уверенности"
            text="Пока нет реальных отзывов, этот блок лучше держать как заготовку под будущие цитаты, видео и ссылки на реализованные объекты."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Сначала показываем сценарий жизни в комплексе, потом материалы и инженерные решения.",
              "Убираем ощущение обычной бани: сайт продает wellness-пространство премиального уровня.",
              "Ведем клиента к заявке через доверие, визуальный масштаб и понятный процесс работы.",
            ].map((review, index) => (
              <div key={review} className="parallax-card rounded-[28px] bg-[#efe7dc] p-7 text-black/70">
                <p className="text-base leading-relaxed md:text-lg">«{review}»</p>
                <p className="mt-8 text-sm text-black/40">Блок {index + 1}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="request" className="relative overflow-hidden bg-[#151515] py-20 text-white md:py-24">
        <div className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full bg-[#8a6a43]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

        <Container>
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
                заявка
              </p>

              <h2 className="text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                Обсудить проект банного комплекса
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Оставьте контакты — команда ARCHIPAR свяжется с вами, чтобы
                обсудить формат комплекса, объект, задачи, бюджетный коридор и
                возможный сценарий реализации.
              </p>

              <div className="mt-9 grid gap-3 text-sm text-white/62">
                <p>• Частные дома, резиденции и гостевые комплексы</p>
                <p>• Парные, хамамы, сауны, купели и зоны отдыха</p>
                <p>• Архитектура, инженерия, комплектация и запуск</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="container-premium">{children}</div>;
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
      <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/62 md:text-lg">
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
    <Link href={href} className="parallax-card group relative min-h-[500px] overflow-hidden rounded-[34px] bg-black shadow-sm transition duration-500 hover:shadow-2xl">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />

      <div className="absolute left-6 top-6 rounded-full border border-white/18 bg-black/24 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/76 backdrop-blur">
        {meta}
      </div>

      <div className="absolute bottom-0 p-7 text-white">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm text-white/45">0{index + 1}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        <h3 className="text-4xl font-light leading-none tracking-[-0.052em] md:text-5xl">
          {title}
        </h3>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
          {text}
        </p>
      </div>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-[0.3em]">ARCHIPAR</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              Премиальные банные комплексы под ключ: архитектура, инженерия,
              климат и авторские сценарии отдыха.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-white/60">
            <Link href="/bath-complexes">Банные комплексы</Link>
            <Link href="/baths">Бани</Link>
            <Link href="/saunas">Сауны</Link>
            <Link href="/hamams">Хамамы</Link>
            <Link href="/#cases">Кейсы</Link>
            <Link href="/#request">Контакты</Link>
          </div>

          <div className="text-sm text-white/60">
            <p>Россия</p>
            <p className="mt-2">Проектирование и реализация премиальных объектов</p>
            <Link href="/#request" className="mt-6 inline-flex items-center gap-2 text-white">
              Обсудить проект <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
