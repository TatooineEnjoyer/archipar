import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import RevealGroup from "@/components/RevealGroup";
import type { ProductPageData } from "@/data/products";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Flame,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";

const featureIcons = [Flame, Wind, Sparkles];
const processIcons = [Compass, Ruler, ShieldCheck];

export default function ProductPage({ product }: { product: ProductPageData }) {
  return (
    <main className="bg-[#fcfaf7] text-[#121212] antialiased selection:bg-[#8a6a43] selection:text-white">
      <Header />

      <section className="hero-screen relative flex min-h-screen items-end overflow-hidden bg-[#1c1a17] pb-16 pt-32 md:pb-24">
        {product.heroVideo ? (
          <HeroVideo
            src={product.heroVideo}
            className="ai-hero-video z-[1] opacity-60"
            speed={0.7}
            preload="auto"
          />
        ) : null}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/60 to-[#1c1a17]/20" />
        <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_78%_22%,rgba(200,170,120,0.18),transparent_42%)]" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-6 inline-flex">
            <span className="border border-[#c8aa78]/30 bg-[#c8aa78]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#c8aa78] backdrop-blur-sm">
              {product.eyebrow}
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {product.title}
              </h1>
              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                {product.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#request"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest"
                >
                  Заказать проект
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/bath-complexes"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Смотреть комплексы
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="hidden border-l-2 border-[#c8aa78] bg-white/[0.03] p-8 text-white backdrop-blur-md lg:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Подход ARCHIPAR
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs text-white/40">01 / Гарантия качества</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-white/80">
                    Влажные зоны, воздух, вода, тепло и электрика проектируются до отделки.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/40">02 / Атмосфера</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-white/80">
                    Цельное пространство для вашего отдыха и оздоровления.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="border-y border-black/5 bg-[#f4f0ea] py-24 md:py-32">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Ключевые решения"
            title="Из чего складывается качество"
            text="Каждый объект требует своей температуры, влажности, вентиляции, отделки и логики обслуживания. Наша команда проектирует взаимозависимую единую систему."
          />
          <RevealGroup className="mt-14 grid gap-8 md:grid-cols-3">
            {product.features.map((feature, index) => {
              const Icon = featureIcons[index] || Sparkles;
              return (
                <article
                  key={feature.title}
                  data-reveal-item
                  data-reveal-kind="card"
                  className="group border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#c8aa78] hover:shadow-md"
                >
                  <Icon className="reveal-card__lead mb-6 h-6 w-6 text-[#8a6a43]" />
                  <div className="reveal-card__body">
                    <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-[#121212]">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-black/60">
                      {feature.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section id="gallery" className="bg-[#fcfaf7] py-24 md:py-32">
        <div className="container-premium">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Визуальный ориентир"
              title="Пространство в деталях"
              text="Материалы, свет, дерево, камень и оборудование собраны в цельные композиции, чтобы заранее почувствовать характер будущей бани, сауны или хамама."
            />
            {product.albumHref ? (
              <Link href={product.albumHref} className="inline-flex items-center gap-2 border-b border-[#8a6a43] pb-1 text-xs font-semibold uppercase tracking-widest text-[#8a6a43] transition-colors hover:text-black">
                Смотреть альбом
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            ) : null}
          </div>

          <RevealGroup className="grid gap-6 md:grid-cols-12">
            {product.gallery.map((image, index) => (
              <div
                key={image}
                data-reveal-item
                data-reveal-kind="media"
                className={`group relative overflow-hidden bg-[#1c1a17] ${index === 0 ? "h-[520px] md:col-span-7" : "h-[250px] md:col-span-5"}`}
              >
                <Image
                  src={image}
                  alt={`${product.title} — фото ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <div className="reveal-media__lead absolute left-4 top-4 border border-white/10 bg-black/60 px-3 py-1 text-[9px] uppercase tracking-widest text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-[#29241f] py-24 text-white md:py-32">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78]">
                Состав работ
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl">
                Что входит в проектирование и реализацию
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/60">
                Список можно расширять под конкретный объект, но базово мы закрываем архитектуру, инженерию, влажные зоны, безопасность и запуск.
              </p>
            </div>

            <div className="divide-y divide-white/10 border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm lg:p-10">
              {product.points.map((point, index) => (
                <div key={point} className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[48px_1fr_32px] md:items-center">
                  <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                  <p className="text-base font-light text-white/80 md:text-lg">{point}</p>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c8aa78] md:justify-self-end" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf7] py-24 md:py-32">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Этапы"
            title="От первого разговора до запуска"
            text="Мы ведём объект последовательно, чтобы на стройке не появлялись случайные решения, переделки и конфликт между дизайном и инженерией."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {product.process.map((step, index) => {
              const Icon = processIcons[index] || Compass;
              return (
                <article key={step.title} className="group border-l border-black/10 pl-6 pt-2 transition-colors duration-300 hover:border-[#8a6a43]">
                  <span className="mb-4 block font-serif text-sm italic text-black/30">0{index + 1}</span>
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#8a6a43]" />
                    <h3 className="font-serif text-xl font-light tracking-tight text-[#121212]">{step.title}</h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-black/60">{step.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 border border-black/5 bg-[#f4f0ea] p-8 md:p-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#8a6a43]">
              Результат
            </p>
            <p className="max-w-4xl font-serif text-2xl font-light leading-snug tracking-tight text-[#121212] md:text-3xl">
              {product.result}
            </p>
          </div>
        </div>
      </section>

      <section id="request" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(138,106,67,0.15),transparent_50%)]" />
        <div className="container-premium">
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa78]">
                Заявка
              </p>
              <h2 className="font-serif text-4xl font-extralight leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Обсудим <br />
                <span className="italic text-[#c8aa78]">ваш формат</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base">
                Оставьте контакты — мы зададим несколько вопросов по объекту, оценим ограничения и подскажем, с чего лучше начать.
              </p>
              <div className="mt-12 space-y-4 border-l border-[#c8aa78]/40 pl-6 text-xs font-light tracking-wider text-white/50">
                <p>✓ Разберём помещение, участок и инженерные мощности</p>
                <p>✓ Подскажем оптимальный состав влажных зон</p>
                <p>✓ Составим понятный порядок проектирования и работ</p>
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
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
