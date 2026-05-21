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
  Layers,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";

const stages = [
  {
    title: "Сценарий",
    text: "Формируем маршрут человека: вход, прогрев, пар, охлаждение, отдых, обслуживание и повторное использование.",
    icon: Compass,
  },
  {
    title: "Архитектура",
    text: "Связываем планировку, материалы, свет, пропорции, приватность и визуальную атмосферу пространства.",
    icon: Ruler,
  },
  {
    title: "Климат",
    text: "Прорабатываем температуру, влажность, вентиляцию, воздух, воду, электрику и безопасность влажных зон.",
    icon: Wind,
  },
  {
    title: "Запуск",
    text: "Проверяем сценарии, инженерные узлы, эксплуатацию и передаем объект в понятном рабочем состоянии.",
    icon: CheckCircle2,
  },
];

const guarantees = [
  "Не набор помещений, а единая wellness-система",
  "Архитектура сразу согласуется с инженерией",
  "Материалы подбираются под влажность, тепло и эксплуатацию",
  "Сценарии отдыха продумываются до начала реализации",
];

export default function ProductPage({ product }: { product: ProductPageData }) {
  const gallery = product.gallery.length > 0 ? product.gallery : [product.heroImage];
  const featureImage = gallery[1] || gallery[0];
  const detailImage = gallery[2] || gallery[0];
  const atmosphereImage = gallery[3] || featureImage;

  return (
    <main className="bg-[#f4f0e8] text-black">
      <Header />

      <section className="relative min-h-[86vh] overflow-hidden bg-black">
        <Image
          src={product.heroImage}
          alt={product.title}
          fill
          priority
          sizes="100vw"
          className="image-drift object-cover opacity-[0.92]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.34),rgba(0,0,0,0.12))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/78 to-transparent" />

        <div className="container-premium relative z-10 flex min-h-[86vh] items-end pb-10 pt-32 md:pb-14">
          <div className="w-full">
            <div className="reveal-up mb-6 flex flex-wrap items-center gap-3 text-white/68">
              <span className="rounded-full border border-white/18 bg-black/24 px-4 py-2 text-[10px] uppercase tracking-[0.26em] backdrop-blur md:text-[11px]">
                {product.eyebrow}
              </span>
              <span className="rounded-full border border-white/18 bg-black/24 px-4 py-2 text-[10px] uppercase tracking-[0.26em] backdrop-blur md:text-[11px]">
                ARCHIPAR
              </span>
            </div>

            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <h1 className="reveal-up reveal-delay-1 max-w-4xl text-5xl font-light leading-[0.94] tracking-[-0.065em] text-white md:text-7xl lg:text-[86px] xl:text-[94px]">
                  {product.title}
                </h1>

                <p className="reveal-up reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/76 md:text-lg">
                  {product.description}
                </p>

                <div className="reveal-up reveal-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#request"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7f2e9] px-7 py-4 text-center text-sm font-semibold text-black shadow-xl shadow-black/10 transition hover:bg-[#c8aa78] hover:text-black"
                  >
                    Обсудить проект
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {product.albumHref && (
                    <a
                      href={product.albumHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/12 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
                    >
                      Скачать PDF-альбом
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="premium-ring reveal-up reveal-delay-2 hidden rounded-[32px] bg-black/28 p-5 text-white backdrop-blur-xl lg:block">
                <p className="text-xs uppercase tracking-[0.26em] text-white/50">
                  в фокусе проекта
                </p>
                <div className="mt-5 grid gap-4">
                  {product.points.slice(0, 4).map((point, index) => (
                    <div key={point} className="border-t border-white/12 pt-4">
                      <p className="font-mono text-xs text-white/40">0{index + 1}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/72">{point}</p>
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
            {guarantees.map((item) => (
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
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">
                состав работ
              </p>

              <h2 className="mt-5 text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                Что входит в проект
              </h2>

              <p className="mt-6 text-base leading-relaxed text-black/60 md:text-lg">
                Каждый пункт влияет на итоговое ощущение объекта: от первой
                планировки до стабильного климата, безопасности и обслуживания.
              </p>
            </div>

            <div className="grid gap-3">
              {product.points.map((point, index) => (
                <div key={point} className="grid gap-5 border-t border-black/10 py-5 md:grid-cols-[64px_1fr_42px] md:items-center">
                  <span className="font-mono text-sm text-black/35">0{index + 1}</span>
                  <p className="text-xl leading-tight tracking-[-0.035em] text-black/76 md:text-2xl">
                    {point}
                  </p>
                  <CheckCircle2 className="h-6 w-6 text-[#8a6a43]" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#e9dfd1] py-20 md:py-24">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[1fr_0.76fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">
                визуальный альбом
              </p>

              <h2 className="mt-5 text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                Атмосфера, материалы и детали
              </h2>
            </div>

            <p className="text-base leading-relaxed text-black/60 md:text-lg">
              Галерея должна продавать не только отделку, а ощущение объекта:
              масштаб, приватность, свет, тепло, воду и спокойный ритм отдыха.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-6">
            {gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={
                  index === 0
                    ? "parallax-card group relative h-[480px] overflow-hidden rounded-[34px] bg-black md:col-span-4"
                    : index === 1
                      ? "parallax-card group relative h-[480px] overflow-hidden rounded-[34px] bg-black md:col-span-2"
                      : "parallax-card group relative h-[330px] overflow-hidden rounded-[30px] bg-black md:col-span-2"
                }
              >
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent opacity-70" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="parallax-card relative min-h-[540px] overflow-hidden rounded-[40px] bg-black md:min-h-[600px]">
              <Image
                src={featureImage}
                alt={`${product.title}: архитектурный подход`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="image-drift object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />

              <div className="absolute bottom-0 p-7 text-white md:p-9">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/55">
                  подход
                </p>

                <h2 className="max-w-3xl text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                  Архитектура, климат и банная культура в одной системе
                </h2>
              </div>
            </div>

            <div className="rounded-[34px] bg-white p-7 shadow-xl md:p-9">
              <Sparkles className="h-7 w-7 text-[#8a6a43]" />
              <p className="mt-7 text-lg leading-relaxed text-black/70 md:text-xl">
                Мы рассматриваем {product.title.toLowerCase()} не как набор
                помещений, а как последовательный сценарий: вход, прогрев, пар,
                охлаждение, восстановление, свет, тишина и удобство эксплуатации.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-black/70 md:text-xl">
                Поэтому в проекте учитываются не только материалы и визуальный
                стиль, но и вентиляция, влажность, безопасность, инженерные узлы,
                эргономика и дальнейшее обслуживание.
              </p>

              <Link href="#request" className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#111] px-7 py-4 text-sm font-semibold text-white shadow-xl transition hover:bg-[#8a6a43] hover:text-white">
                Обсудить задачу
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#151515] py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                сценарий реализации
              </p>
              <h2 className="mt-5 text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                От идеи до объекта, который работает каждый день
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div key={stage.title} className="parallax-card rounded-[30px] border border-white/10 bg-white/[0.045] p-7">
                    <div className="mb-8 flex items-center justify-between">
                      <Icon className="h-6 w-6 text-[#c8aa78]" />
                      <span className="font-mono text-sm text-white/35">0{index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-light tracking-[-0.04em] md:text-4xl">
                      {stage.title}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed text-white/62">
                      {stage.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="parallax-card relative min-h-[440px] overflow-hidden rounded-[36px] bg-black lg:col-span-2">
              <Image
                src={detailImage}
                alt={`${product.title}: детали и материалы`}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 max-w-2xl p-7 text-white md:p-9">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/55">
                  детали
                </p>
                <h2 className="text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                  Премиальность видна в стыках, свете и инженерных мелочах
                </h2>
              </div>
            </div>

            <div className="parallax-card relative min-h-[440px] overflow-hidden rounded-[36px] bg-black">
              <Image
                src={atmosphereImage}
                alt={`${product.title}: атмосфера`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/12 to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <Layers className="mb-5 h-7 w-7 text-white/72" />
                <p className="text-2xl font-light leading-tight tracking-[-0.04em] md:text-3xl">
                  Объект собирается слоями: сценарий, планировка, климат, материалы.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="request" className="relative overflow-hidden bg-[#111] py-20 text-white md:py-24">
        <div className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full bg-[#8a6a43]/20 blur-3xl" />

        <Container>
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                заявка
              </p>

              <h2 className="mt-5 text-4xl font-light leading-[0.98] tracking-[-0.052em] md:text-6xl">
                Обсудить {product.title.toLowerCase()}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
                Оставьте контакты — команда ARCHIPAR свяжется с вами, чтобы
                обсудить формат проекта, объект, задачи, ограничения и возможный
                сценарий реализации.
              </p>

              <div className="mt-9 grid gap-3 text-sm text-white/62">
                <p>• Архитектура, материалы и визуальная концепция</p>
                <p>• Инженерия климата, воды, электрики и вентиляции</p>
                <p>• Реализация, авторский надзор и запуск объекта</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      <ProductFooter />
    </main>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="container-premium">{children}</div>;
}

function ProductFooter() {
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
