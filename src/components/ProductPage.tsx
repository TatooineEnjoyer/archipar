import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import type { ProductPageData } from "@/data/products";
import type { ReactNode } from "react";
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
} from "lucide-react";

const stages = [
  {
    title: "Задача",
    text: "Понимаем, как объектом будут пользоваться: семья, гости, частота посещений и привычный ритм отдыха.",
    icon: Compass,
  },
  {
    title: "Планировка",
    text: "Расставляем парную, душевые, зону отдыха, проходы и технические места так, чтобы всё было удобно.",
    icon: Ruler,
  },
  {
    title: "Техника",
    text: "Сразу думаем о вентиляции, воде, электрике, сливе, нагреве и защите от влаги.",
    icon: Wind,
  },
  {
    title: "Запуск",
    text: "Проверяем нагрев, пар, воздух, воду и работу оборудования. Передаём объект в понятном виде.",
    icon: CheckCircle2,
  },
];

const guarantees = [
  "Планировка строится вокруг отдыха, а не вокруг красивой картинки",
  "Парная, вода, свет и вентиляция продумываются заранее",
  "Материалы подбираются под жару, влажность и уборку",
  "После работ объект проверяется и настраивается",
];

export default function ProductPage({ product }: { product: ProductPageData }) {
  const gallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.heroImage];

  const featureImage = gallery[1] || gallery[0];
  const detailImage = gallery[2] || gallery[0];
  const atmosphereImage = gallery[3] || featureImage;

  return (
    <main className="bg-[#f8f5f0] text-[#121212] antialiased">
      <Header />

      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#121212] pb-16 pt-32 md:pb-24">
        <Image
          src={product.heroImage}
          alt={product.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(200,170,120,0.18),transparent_28%)]" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              {product.eyebrow}
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {product.title}
              </h1>

              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/65 md:text-lg">
                {product.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center gap-3 bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-[#dbbc8a]"
                >
                  Обсудить проект
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {product.albumHref && (
                  <a
                    href={product.albumHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 border border-white/25 bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                  >
                    Посмотреть PDF
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="hidden border border-white/10 bg-white/[0.03] p-7 text-white backdrop-blur-sm lg:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45">
                Что важно
              </p>

              <div className="mt-6 grid gap-5">
                {product.points.slice(0, 4).map((point, index) => (
                  <div key={point} className="border-t border-white/10 pt-5">
                    <p className="text-xs text-[#c8aa78]">0{index + 1}</p>
                    <p className="mt-2 text-sm font-light leading-relaxed text-white/65">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#f0eae1] py-8">
        <Container>
          <div className="grid gap-5 md:grid-cols-4">
            {guarantees.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-black/65">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6a43]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f5f0] py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
                Состав работ
              </p>

              <h2 className="font-serif text-3xl font-extralight leading-snug tracking-tight text-[#121212] sm:text-4xl">
                Что входит в проект
              </h2>

              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-black/60">
                Собираем будущий объект по шагам: от планировки до запуска. Без лишних обещаний и непонятных слов.
              </p>
            </div>

            <div className="grid gap-4">
              {product.points.map((point, index) => (
                <div
                  key={point}
                  className="grid gap-5 border-t border-black/10 py-5 md:grid-cols-[64px_1fr_42px] md:items-center"
                >
                  <span className="text-sm text-black/30">0{index + 1}</span>

                  <p className="text-xl font-light leading-snug text-black/75 md:text-2xl">
                    {point}
                  </p>

                  <CheckCircle2 className="h-6 w-6 text-[#8a6a43]" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-black/5 bg-[#f0eae1] py-24">
        <Container>
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
                Галерея
              </p>

              <h2 className="font-serif text-4xl font-light text-[#121212]">
                Материалы, свет и детали
              </h2>
            </div>

            <p className="text-base font-light leading-relaxed text-black/60">
              Фото помогают понять настроение объекта: дерево, камень, мягкий свет, воду и спокойную зону отдыха.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-6">
            {gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={
                  index === 0
                    ? "group relative h-[460px] overflow-hidden bg-black md:col-span-4"
                    : index === 1
                      ? "group relative h-[460px] overflow-hidden bg-black md:col-span-2"
                      : "group relative h-[320px] overflow-hidden bg-black md:col-span-2"
                }
              >
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#121212] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40">
                Этапы
              </p>

              <h2 className="font-serif text-4xl font-extralight leading-tight text-white">
                От идеи до готового объекта
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div key={stage.title} className="border border-white/10 bg-white/[0.02] p-8">
                    <div className="mb-8 flex items-center justify-between">
                      <Icon className="h-6 w-6 text-[#c8aa78]" />
                      <span className="text-sm text-white/35">0{index + 1}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-light text-white">
                      {stage.title}
                    </h3>

                    <p className="mt-5 text-sm font-light leading-relaxed text-white/60">
                      {stage.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f5f0] py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden bg-black md:min-h-[600px]">
              <Image
                src={featureImage}
                alt={`${product.title}: общий вид`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />

              <div className="absolute bottom-0 p-7 text-white md:p-9">
                <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/55">
                  Подход
                </p>

                <h2 className="font-serif max-w-3xl text-4xl font-light leading-tight md:text-6xl">
                  Красивый вид и понятная техническая часть
                </h2>
              </div>
            </div>

            <div className="border border-black/10 bg-white/45 p-8 md:p-10">
              <Flame className="h-7 w-7 text-[#8a6a43]" />

              <p className="mt-7 text-lg font-light leading-relaxed text-black/70 md:text-xl">
                Мы смотрим на {product.title.toLowerCase()} как на место, где
                должно быть приятно находиться: зайти, прогреться, отдохнуть,
                охладиться и вернуться снова.
              </p>

              <p className="mt-6 text-lg font-light leading-relaxed text-black/70 md:text-xl">
                Поэтому заранее думаем не только о внешнем виде, но и о воздухе,
                воде, сливе, нагреве, свете, уборке и доступе к оборудованию.
              </p>

              <Link
                href="#request"
                className="mt-9 inline-flex w-fit items-center gap-3 bg-[#121212] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-[#8a6a43]"
              >
                Обсудить задачу
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-black/5 bg-[#f0eae1] py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="relative min-h-[430px] overflow-hidden bg-black lg:col-span-2">
              <Image
                src={detailImage}
                alt={`${product.title}: детали`}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 max-w-2xl p-7 text-white md:p-9">
                <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/55">
                  Детали
                </p>

                <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">
                  Хороший результат видно в стыках, свете и тишине работы
                </h2>
              </div>
            </div>

            <div className="relative min-h-[430px] overflow-hidden bg-black">
              <Image
                src={atmosphereImage}
                alt={`${product.title}: атмосфера`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/12 to-transparent" />

              <div className="absolute bottom-0 p-7 text-white">
                <Droplets className="mb-5 h-7 w-7 text-white/72" />

                <p className="font-serif text-2xl font-light leading-tight md:text-3xl">
                  Объект должен быть удобным не только в первый день, но и через годы.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="request" className="relative overflow-hidden bg-[#121212] py-24 text-white">
        <div className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full bg-[#8a6a43]/20 blur-3xl" />

        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40">
                Заявка
              </p>

              <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">
                Обсудить {product.title.toLowerCase()}
              </h2>

              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/62 md:text-lg">
                Оставьте контакты — мы свяжемся, обсудим объект, ваши пожелания
                и подскажем, с чего лучше начать.
              </p>

              <div className="mt-9 grid gap-3 text-sm text-white/60">
                <p>• Разберём задачу простым языком</p>
                <p>• Подскажем, что реально сделать на вашем объекте</p>
                <p>• Объясним порядок работ и примерный состав проекта</p>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <ProductFooter />
    </main>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div className="container-premium">{children}</div>;
}

function ProductFooter() {
  return (
    <footer className="bg-[#0f0f0f] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-[0.3em]">ARCHIPAR</p>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/45">
              Бани, сауны и хамамы для частных домов, загородных участков и гостевых объектов.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-white/60">
            <Link href="/bath-complexes">Банные комплексы</Link>
            <Link href="/baths">Бани</Link>
            <Link href="/saunas">Сауны</Link>
            <Link href="/hamams">Хамамы</Link>
            <Link href="/#portfolio">Портфолио</Link>
            <Link href="/#request">Контакты</Link>
          </div>

          <div className="text-sm text-white/60">
            <p>Россия</p>
            <p className="mt-2">Проектирование, строительство и запуск объектов</p>

            <Link href="/#request" className="mt-6 inline-flex items-center gap-2 text-white">
              Обсудить проект <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
