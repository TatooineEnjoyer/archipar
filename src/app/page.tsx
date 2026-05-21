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
    text: "Решение для загородных отелей, клубов и частных резиденций, где важны масштаб, поток гостей и стабильная эксплуатация.",
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
    title: "Сауна и зона отдыха под ключ",
    type: "Архитектура отдыха",
    image: "/images/cases/case-04.jfif",
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
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.28),rgba(0,0,0,0.08))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/78 to-transparent" />

        <div className="relative z-10 flex min-h-screen items-end px-6 pb-10 pt-32 md:px-12 md:pb-16 lg:px-20">
          <div className="w-full">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-white/70">
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] backdrop-blur">
                architecture · climate · bath culture
              </span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] backdrop-blur">
                ARCHIPAR
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <h1 className="max-w-6xl text-6xl font-light leading-[0.88] tracking-[-0.075em] text-white md:text-8xl lg:text-[128px]">
                  Премиальные банные комплексы под ключ
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/76 md:text-xl">
                  Проектируем цельные wellness-пространства, где архитектура,
                  инженерия климата, пар, вода, свет и материалы работают как
                  один сценарий восстановления.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#request"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#e5d8c4]"
                  >
                    Обсудить проект
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="#complexes"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Смотреть решения
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="hidden rounded-[34px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl lg:block">
                <p className="text-xs uppercase tracking-[0.28em] text-white/52">
                  комплексный подход
                </p>
                <div className="mt-6 grid gap-4">
                  {numbers.map((item) => (
                    <div key={item.label} className="border-t border-white/12 pt-4">
                      <p className="text-3xl font-light tracking-[-0.04em]">
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

      <section className="border-y border-black/10 bg-[#efe7dc] px-6 py-6 md:px-12 lg:px-20">
        <div className="grid gap-4 md:grid-cols-4">
          {trust.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-black/70">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6a43]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionIntro
            eyebrow="философия"
            title="Баня, хамам и сауна не должны жить отдельно"
            text="Премиальный объект ощущается дорогим не из-за одной красивой картинки, а из-за цельности: как человек входит, прогревается, охлаждается, отдыхает, видит свет, слышит тишину и пользуется пространством без лишних действий."
          />

          <div className="relative min-h-[520px] overflow-hidden rounded-[42px] bg-black shadow-2xl">
            <Image
              src="/images/hero/hero-secondary.jpg"
              alt="Атмосфера банного комплекса ARCHIPAR"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-8 text-white md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/55">
                не отделка, а опыт
              </p>
              <p className="text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
                Свет, пар, вода, дерево и инженерия собираются в один ритуал.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="complexes" className="px-6 pb-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="форматы комплексов"
          title="Подбираем не типовую баню, а формат под объект и сценарий жизни"
          text="Для частного дома, отдельного строения, резиденции или коммерческого SPA важны разные маршруты, нагрузки, инженерные решения и визуальная подача."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {complexes.map((item, index) => (
            <ImageCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </section>

      <section id="modules" className="bg-[#e9dfd1] px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionIntro
            eyebrow="модули комплекса"
            title="Каждый элемент работает на общий сценарий отдыха"
            text="Парная, хамам, сауна, зона отдыха, купель и инженерия не собираются случайно. Они проектируются как связанные части одного премиального пространства."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group overflow-hidden rounded-[30px] bg-[#f7f2e9] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/18" />
                  </div>

                  <div className="p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <Icon className="h-6 w-6 text-[#8a6a43]" />
                      <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <h3 className="text-4xl leading-none tracking-[-0.04em]">
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
        </div>
      </section>

      <section id="engineering" className="relative overflow-hidden bg-[#151515] px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="absolute -right-24 top-0 h-[520px] w-[520px] rounded-full bg-[#8a6a43]/20 blur-3xl" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
              инженерия и климат
            </p>

            <h2 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Стабильный климат — скрытая роскошь банного комплекса
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/62">
              Визуальная часть важна, но объект становится премиальным только
              тогда, когда он предсказуемо греется, проветривается, держит
              влажность, безопасен и удобен в обслуживании.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[340px] overflow-hidden rounded-[36px] bg-black">
              <Image
                src="/images/modules/engineering.jpg"
                alt="Инженерия банного комплекса"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-82"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <p className="max-w-xl text-3xl font-light leading-tight tracking-[-0.04em]">
                  Вентиляция, влажность, электрика, вода и автоматика заранее
                  закладываются в архитектуру.
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {engineering.map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-white/72">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="процесс"
          title="От идеи и планировки до запуска комплекса"
          text="Премиальный уровень держится на последовательности: сначала сценарий отдыха, затем архитектура, инженерия, реализация и настройка объекта."
        />

        <div className="mt-12 grid gap-4">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="group grid gap-5 border-t border-black/10 py-7 transition md:grid-cols-[120px_1fr_320px] md:items-start">
                <span className="font-mono text-sm text-black/35">0{index + 1}</span>
                <h3 className="text-4xl leading-none tracking-[-0.045em] md:text-5xl">
                  {item.title}
                </h3>
                <div className="flex gap-4 text-black/62">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-[#8a6a43]" />
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="cases" className="bg-[#efe7dc] px-6 py-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="кейсы и визуальный ряд"
          title="Объекты, где архитектура и банная культура становятся одним опытом"
          text="Блок можно использовать как портфолио: реальные проекты, концепты, детали материалов, инженерные решения и будущие видеоотзывы."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Link key={item.title} href="#request" className={index === 0 ? "group block overflow-hidden rounded-[34px] bg-black md:col-span-2 lg:col-span-2" : "group block overflow-hidden rounded-[34px] bg-black"}>
              <div className={index === 0 ? "relative h-[520px] overflow-hidden" : "relative h-[360px] overflow-hidden"}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/18 to-transparent" />

                <div className="absolute bottom-0 p-7 text-white md:p-9">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/62">
                    {item.type}
                  </p>
                  <h3 className={index === 0 ? "max-w-3xl text-5xl font-light leading-[0.94] tracking-[-0.055em] md:text-7xl" : "text-4xl font-light leading-[0.95] tracking-[-0.04em]"}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[600px] overflow-hidden rounded-[44px] bg-black">
            <Image
              src="/images/team/team-main.jpg"
              alt="Команда ARCHIPAR за работой"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover opacity-92"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
            <div className="absolute bottom-0 max-w-2xl p-8 text-white md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/55">
                команда и контроль
              </p>
              <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Премиальный объект требует не только дизайна, но и контроля деталей
              </h2>
            </div>
          </div>

          <div className="rounded-[38px] bg-[#111] p-8 text-white md:p-10">
            <Sparkles className="h-7 w-7 text-[#c8aa78]" />
            <h3 className="mt-8 text-4xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
              ARCHIPAR ведет проект как единую систему, а не как набор отдельных подрядчиков.
            </h3>
            <p className="mt-7 text-lg leading-relaxed text-white/62">
              Это снижает риск конфликтов между красивой картинкой и инженерной
              реальностью: вентиляция не спорит с отделкой, свет не мешает
              обслуживанию, влажные зоны не конфликтуют с материалами.
            </p>
            <Link href="#request" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#e5d8c4]">
              Получить консультацию
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="video" className="bg-[#e9dfd1] px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
              видео
            </p>
            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Видеообъекты, проходки и отзывы владельцев
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/62">
              Для дорогого продукта важно показать не только фото, но и ощущение:
              движение пара, свет, масштаб, звук воды и реальные впечатления
              владельцев.
            </p>
          </div>

          <Link href="#request" className="group relative min-h-[460px] overflow-hidden rounded-[38px] bg-black">
            <Image
              src="/images/video/video-preview.jpg"
              alt="Видео банного комплекса ARCHIPAR"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition group-hover:scale-105">
              <Play className="ml-1 h-8 w-8 fill-black" />
            </div>
          </Link>
        </div>
      </section>

      <section id="reviews" className="px-6 py-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="доверие"
          title="Премиальный проект выбирают не по цене, а по уверенности"
          text="Пока нет реальных отзывов, этот блок лучше держать как заготовку под будущие цитаты, видео и ссылки на реализованные объекты."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Сначала показываем сценарий жизни в комплексе, потом материалы и инженерные решения.",
            "Убираем ощущение обычной бани: сайт продает wellness-пространство премиального уровня.",
            "Ведем клиента к заявке через доверие, визуальный масштаб и понятный процесс работы.",
          ].map((review, index) => (
            <div key={review} className="rounded-[30px] bg-[#efe7dc] p-8 text-black/70">
              <p className="text-lg leading-relaxed">«{review}»</p>
              <p className="mt-8 text-sm text-black/40">Блок {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="request" className="relative overflow-hidden bg-[#151515] px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full bg-[#8a6a43]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
              заявка
            </p>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Обсудить проект банного комплекса
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Оставьте контакты — команда ARCHIPAR свяжется с вами, чтобы
              обсудить формат комплекса, объект, задачи, бюджетный коридор и
              возможный сценарий реализации.
            </p>

            <div className="mt-10 grid gap-3 text-sm text-white/62">
              <p>• Частные дома, резиденции и гостевые комплексы</p>
              <p>• Парные, хамамы, сауны, купели и зоны отдыха</p>
              <p>• Архитектура, инженерия, комплектация и запуск</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
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
    <div className="max-w-4xl">
      <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
        {eyebrow}
      </p>
      <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
        {title}
      </h2>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/62">
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
    <Link href={href} className="group relative min-h-[560px] overflow-hidden rounded-[38px] bg-black shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />

      <div className="absolute left-7 top-7 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/72 backdrop-blur">
        {meta}
      </div>

      <div className="absolute bottom-0 p-8 text-white">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm text-white/45">0{index + 1}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        <h3 className="text-5xl font-light leading-none tracking-[-0.055em]">
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
    <footer className="bg-[#0f0f0f] px-6 py-12 text-white md:px-12 lg:px-20">
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
    </footer>
  );
}
