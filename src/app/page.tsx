import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Waves,
  Flame,
  Droplets,
  Wind,
  ShieldCheck,
  Play,
} from "lucide-react";

const complexes = [
  {
    title: "Банные комплексы",
    text: "Цельное пространство отдыха: парная, хамам, сауна, зона отдыха, купель, душевая и инженерия климата.",
    image: "/images/complexes/private-complex.jpg",
    href: "/bath-complexes",
  },
  {
    title: "Бани",
    text: "Русская баня как архитектурный и климатический сценарий: пар, дерево, свет и правильная инженерия.",
    image: "/images/modules/steam-room.jpg",
    href: "/baths",
  },
  {
    title: "Хамамы",
    text: "Камень, мягкое тепло, пар и приватная SPA-атмосфера внутри дома или отдельного комплекса.",
    image: "/images/cases/case-06.jfif",
    href: "/hamams",
  },
];

const modules = [
  {
    title: "Парная",
    text: "Температура, влажность, полки, свет и сценарии пара проектируются как единая система.",
    image: "/images/modules/steam-room.jpg",
    href: "/baths",
    icon: Flame,
  },
  {
    title: "Хамам",
    text: "Мягкое тепло, камень, пар и приватная SPA-атмосфера внутри комплекса.",
    image: "/images/cases/case-06.jfif",
    href: "/hamams",
    icon: Droplets,
  },
  {
    title: "Сауна",
    text: "Сухой жар, точная эргономика, свет и безопасная инженерная реализация.",
    image: "/images/modules/sauna.jpg",
    href: "/saunas",
    icon: Flame,
  },
  {
    title: "Зона отдыха",
    text: "Пространство восстановления после процедур: свет, мебель, материалы, акустика.",
    image: "/images/modules/lounge.jpg",
    href: "#request",
    icon: Waves,
  },
  {
    title: "Купель и охлаждение",
    text: "Контрастные сценарии, душевые, купели, лёд, охлаждение и водоподготовка.",
    image: "/images/modules/cooling.jpg",
    href: "#request",
    icon: Droplets,
  },
  {
    title: "Инженерия и климат",
    text: "Вентиляция, отопление, влажность, безопасность, автоматика и стабильная эксплуатация.",
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
    href: "#request",
  },
  {
    title: "Хамам как часть wellness-зоны",
    type: "Комплекс в доме",
    image: "/images/cases/case-02.jpg",
    href: "#request",
  },
  {
    title: "Парная с авторскими сценариями климата",
    type: "Индивидуальный проект",
    image: "/images/cases/case-03.jpg",
    href: "#request",
  },
  {
    title: "Сауна и зона отдыха под ключ",
    type: "Архитектура отдыха",
    image: "/images/cases/case-04.jfif",
    href: "#request",
  },
  {
    title: "Гостевой банный комплекс",
    type: "Коммерческий объект",
    image: "/images/cases/case-05.jfif",
    href: "#request",
  },
  {
    title: "Комплекс с купелью и душевой зоной",
    type: "Контрастные процедуры",
    image: "/images/cases/case-06.jfif",
    href: "#request",
  },
];

const process = [
  "Консультация и анализ задач",
  "Концепция банного комплекса",
  "Архитектура, планировка и сценарии",
  "Инженерия климата и безопасности",
  "Реализация, авторский надзор и запуск",
];

const trust = [
  "Собственные патентные разработки",
  "Архитектурный и инженерный подход",
  "Сложные проекты под ключ",
  "Работа с частными и коммерческими объектами",
];

export default function Home() {
  return (
    <main className="bg-[#f4f0e8] text-[#111]">
      <Header />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Премиальный банный комплекс ARCHIPAR"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/28 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-screen items-end px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="max-w-5xl text-white">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/70">
              architecture · climate · bath culture
            </p>

            <h1 className="max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-[120px]">
              Премиальные банные комплексы под ключ
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
              Архитектура отдыха, инженерия климата и авторская реализация
              банных пространств для частных домов, резиденций и коммерческих
              объектов.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#request"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#e5d8c4]"
              >
                Обсудить проект комплекса
              </Link>

              <Link
                href="#complexes"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Смотреть комплексы
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#efe7dc] px-6 py-6 md:px-12 lg:px-20">
        <div className="grid gap-4 md:grid-cols-4">
          {trust.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-black/70"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#8a6a43]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="complexes" className="px-6 py-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="Банные комплексы"
          title="Не отдельная парная, а цельное пространство восстановления"
          text="ARCHIPAR проектирует банный комплекс как единую систему: архитектура, климат, пар, вода, свет, материалы и сценарии использования."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {complexes.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section
        id="modules"
        className="bg-[#e9dfd1] px-6 py-24 md:px-12 lg:px-20"
      >
        <SectionIntro
          eyebrow="Модули комплекса"
          title="Каждый элемент работает на общий сценарий отдыха"
          text="Парная, хамам, сауна, зона отдыха, купель и инженерия не собираются случайно. Они проектируются как связанные части одного премиального пространства."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                key={item.title}
                className="group overflow-hidden rounded-[28px] bg-[#f7f2e9] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
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
      </section>

      <section id="cases" className="px-6 py-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="Кейсы"
          title="Объекты, где архитектура и банная культура становятся одним опытом"
          text="Здесь будут лучшие проекты: комплексы в частных домах, хамамы, сауны, зоны отдыха, инженерные решения и реализованные сценарии климата."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block overflow-hidden rounded-[30px] bg-[#efe7dc]"
            >
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                <div className="absolute bottom-0 p-7 text-white">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/65">
                    {item.type}
                  </p>
                  <h3 className="text-4xl leading-[0.95] tracking-[-0.04em]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="engineering"
        className="grid gap-10 bg-[#151515] px-6 py-24 text-white md:px-12 lg:grid-cols-2 lg:px-20"
      >
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
            инженерия и климат
          </p>

          <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Как работает климат внутри банного комплекса
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-white/70">
            Правильный банный комплекс — это не только отделка и печь. Это
            управляемая система температуры, влажности, вентиляции, подачи
            воздуха, отвода влаги, безопасности и удобства обслуживания.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              "Вентиляция и залповое проветривание",
              "Сценарии пара и влажности",
              "Инженерия воды, канализации и электрики",
              "Безопасность дерева, камня и влажных зон",
              "Автоматизация и удобство эксплуатации",
            ].map((item) => (
              <div
                key={item}
                className="border-t border-white/10 py-4 text-white/78"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="#request"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm transition hover:bg-white hover:text-black"
          >
            Обсудить инженерию проекта
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="process" className="px-6 py-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="Процесс"
          title="От идеи и планировки до запуска комплекса"
          text="Проект ведётся последовательно: сначала сценарий отдыха и архитектура, затем инженерия, реализация и запуск объекта."
        />

        <div className="mt-12 grid gap-4">
          {process.map((item, index) => (
            <div
              key={item}
              className="grid items-center border-t border-black/10 py-7 md:grid-cols-[120px_1fr]"
            >
              <span className="font-mono text-sm text-black/35">
                0{index + 1}
              </span>
              <h3 className="text-4xl tracking-[-0.04em] md:text-5xl">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="video" className="bg-[#e9dfd1] px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
              видео
            </p>
            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Видеообъекты, проходки и отзывы владельцев
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/62">
              В премиальном сегменте важно показать не только картинку, но и
              атмосферу: движение пара, свет, звук, масштаб пространства и
              реальное впечатление владельцев.
            </p>
          </div>

          <div className="group relative min-h-[420px] overflow-hidden rounded-[34px]">
            <Image
              src="/images/video/video-preview.jpg"
              alt="Видео банного комплекса ARCHIPAR"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />

            <button className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:scale-105">
              <Play className="ml-1 h-8 w-8 fill-black" />
            </button>
          </div>
        </div>
      </section>

      <section id="reviews" className="px-6 py-24 md:px-12 lg:px-20">
        <SectionIntro
          eyebrow="Отзывы"
          title="Премиальный проект выбирают не по цене, а по доверию"
          text="В этом блоке позже можно разместить видеоотзывы, короткие цитаты владельцев и ссылки на реализованные объекты."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Сильная архитектурная подача и внимание к деталям.",
            "Проект получился не как обычная баня, а как полноценное пространство отдыха.",
            "Отдельно ценим инженерный подход: всё удобно, понятно и стабильно работает.",
          ].map((review, index) => (
            <div
              key={review}
              className="rounded-[28px] bg-[#efe7dc] p-8 text-black/70"
            >
              <p className="text-lg leading-relaxed">«{review}»</p>
              <p className="mt-8 text-sm text-black/40">Клиент {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="request"
        className="relative overflow-hidden bg-[#151515] px-6 py-24 text-white md:px-12 lg:px-20"
      >
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#8a6a43]/20 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
              заявка
            </p>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Обсудить проект банного комплекса
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Оставьте контакты — команда ARCHIPAR свяжется с вами, чтобы
              обсудить формат комплекса, задачи, объект и возможный сценарий
              реализации.
            </p>
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
      <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
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
}: {
  title: string;
  text: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-[520px] overflow-hidden rounded-[34px] bg-black"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-8 text-white">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
          <ArrowUpRight className="h-5 w-5" />
        </div>

        <h3 className="text-5xl font-light leading-none tracking-[-0.05em]">
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
          <p className="mt-2">
            Проектирование и реализация премиальных объектов
          </p>
          <Link href="/#request" className="mt-6 inline-block text-white">
            Обсудить проект →
          </Link>
        </div>
      </div>
    </footer>
  );
}
