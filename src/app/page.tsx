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

      <section className="relative min-h-[88vh] overflow-hidden bg-black">
        <Image
          src={product.heroImage}
          alt={product.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-92"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.30),rgba(0,0,0,0.04))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/78 to-transparent" />

        <div className="relative z-10 flex min-h-[88vh] items-end px-6 pb-12 pt-32 md:px-12 md:pb-16 lg:px-20">
          <div className="w-full">
            <div className="mb-7 flex flex-wrap items-center gap-3 text-white/68">
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] backdrop-blur">
                {product.eyebrow}
              </span>
              <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] backdrop-blur">
                ARCHIPAR
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <h1 className="max-w-6xl text-6xl font-light leading-[0.9] tracking-[-0.07em] text-white md:text-8xl lg:text-[118px]">
                  {product.title}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/76 md:text-xl">
                  {product.description}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#request"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black transition hover:bg-[#e5d8c4]"
                  >
                    Обсудить проект
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {product.albumHref && (
                    <a
                      href={product.albumHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/32 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Скачать PDF-альбом
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="hidden rounded-[34px] border border-white/14 bg-white/10 p-5 text-white backdrop-blur-xl lg:block">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                  в фокусе проекта
                </p>
                <div className="mt-6 grid gap-4">
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

      <section className="border-y border-black/10 bg-[#efe7dc] px-6 py-6 md:px-12 lg:px-20">
        <div className="grid gap-4 md:grid-cols-4">
          {guarantees.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-black/70">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6a43]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.35em] text-black/40">
              состав работ
            </p>

            <h2 className="mt-5 text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Что входит в проект
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-black/60">
              Каждый пункт влияет на итоговое ощущение объекта: от первой
              планировки до стабильного климата, безопасности и обслуживания.
            </p>
          </div>

          <div className="grid gap-3">
            {product.points.map((point, index) => (
              <div key={point} className="grid gap-5 border-t border-black/10 py-6 md:grid-cols-[72px_1fr_48px] md:items-center">
                <span className="font-mono text-sm text-black/35">0{index + 1}</span>
                <p className="text-2xl leading-tight tracking-[-0.035em] text-black/76 md:text-3xl">
                  {point}
                </p>
                <CheckCircle2 className="h-6 w-6 text-[#8a6a43]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfd1] px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-black/40">
              визуальный альбом
            </p>

            <h2 className="mt-5 text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Атмосфера, материалы и детали
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-black/60">
            Галерея должна продавать не только отделку, а ощущение объекта:
            масштаб, приватность, свет, тепло, воду и спокойный ритм отдыха.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-6">
          {gallery.map((image, index) => (
            <div key={`${image}-${index}`} className={index === 0 ? "group relative h-[520px] overflow-hidden rounded-[36px] bg-black md:col-span-4" : index === 1 ? "group relative h-[520px] overflow-hidden rounded-[36px] bg-black md:col-span-2" : "group relative h-[360px] overflow-hidden rounded-[32px] bg-black md:col-span-2"}>
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
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[620px] overflow-hidden rounded-[44px] bg-black">
            <Image
              src={featureImage}
              alt={`${product.title}: архитектурный подход`}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/55">
                подход
              </p>

              <h2 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Архитектура, климат и банная культура в одной системе
              </h2>
            </div>
          </div>

          <div className="rounded-[38px] bg-white p-8 shadow-xl md:p-10">
            <Sparkles className="h-7 w-7 text-[#8a6a43]" />
            <p className="mt-8 text-xl leading-relaxed text-black/70">
              Мы рассматриваем {product.title.toLowerCase()} не как набор
              помещений, а как последовательный сценарий: вход, прогрев, пар,
              охлаждение, восстановление, свет, тишина и удобство эксплуатации.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-black/70">
              Поэтому в проекте учитываются не только материалы и визуальный
              стиль, но и вентиляция, влажность, безопасность, инженерные узлы,
              эргономика и дальнейшее обслуживание.
            </p>

            <Link href="#request" className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#8a6a43]">
              Обсудить задачу
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#151515] px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              сценарий реализации
            </p>
            <h2 className="mt-5 text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
              От идеи до объекта, который работает каждый день
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.title} className="rounded-[32px] border border-white/10 bg-white/[0.045] p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[#c8aa78]" />
                    <span className="font-mono text-sm text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="text-4xl font-light tracking-[-0.04em]">
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
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="relative min-h-[480px] overflow-hidden rounded-[38px] bg-black lg:col-span-2">
            <Image
              src={detailImage}
              alt={`${product.title}: детали и материалы`}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 max-w-2xl p-8 text-white md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/55">
                детали
              </p>
              <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Премиальность видна в стыках, свете и инженерных мелочах
              </h2>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-[38px] bg-black">
            <Image
              src={atmosphereImage}
              alt={`${product.title}: атмосфера`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/12 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <Layers className="mb-5 h-7 w-7 text-white/72" />
              <p className="text-3xl font-light leading-tight tracking-[-0.04em]">
                Объект собирается слоями: сценарий, планировка, климат, материалы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="request" className="relative overflow-hidden bg-[#111] px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full bg-[#8a6a43]/20 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              заявка
            </p>

            <h2 className="mt-5 text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Обсудить {product.title.toLowerCase()}
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/62">
              Оставьте контакты — команда ARCHIPAR свяжется с вами, чтобы
              обсудить формат проекта, объект, задачи, ограничения и возможный
              сценарий реализации.
            </p>

            <div className="mt-10 grid gap-3 text-sm text-white/62">
              <p>• Архитектура, материалы и визуальная концепция</p>
              <p>• Инженерия климата, воды, электрики и вентиляции</p>
              <p>• Реализация, авторский надзор и запуск объекта</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <ProductFooter />
    </main>
  );
}

function ProductFooter() {
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
