import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import type { ProductPageData } from "@/data/product";

export default function ProductPage({ product }: { product: ProductPageData }) {
  return (
    <main className="bg-[#f4f0e8] text-black">
      <Header />

      <section className="relative min-h-[86vh] overflow-hidden">
        <Image
          src={product.heroImage}
          alt={product.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/28 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-[86vh] items-end px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="max-w-5xl text-white">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
              {product.eyebrow}
            </p>

            <h1 className="text-6xl leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-[112px]">
              {product.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              {product.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#request"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-black transition hover:bg-[#e5d8c4]"
              >
                Обсудить проект
              </Link>

              {product.albumHref && (
                <a
                  href={product.albumHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Скачать PDF-альбом
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/40">
              состав работ
            </p>

            <h2 className="mt-5 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Что входит в проект
            </h2>
          </div>

          <div className="grid gap-3">
            {product.points.map((point, index) => (
              <div
                key={point}
                className="grid grid-cols-[64px_1fr] border-t border-black/10 py-5"
              >
                <span className="font-mono text-sm text-black/35">
                  0{index + 1}
                </span>

                <p className="text-xl leading-relaxed text-black/72">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfd1] px-6 py-20 md:px-12 lg:px-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40">
            визуальный альбом
          </p>

          <h2 className="mt-5 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Атмосфера, материалы и детали
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {product.gallery.map((image, index) => (
            <div
              key={image}
              className="relative h-[420px] overflow-hidden rounded-[32px] bg-black"
            >
              <Image
                src={image}
                alt={`${product.title} ${index + 1}`}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[36px] bg-black">
            <Image
              src={product.gallery[0]}
              alt={product.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/55">
                подход
              </p>

              <h2 className="max-w-2xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Архитектура, климат и банная культура в одной системе
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-black/65">
              Мы рассматриваем банное пространство не как набор помещений, а как
              последовательный сценарий отдыха: вход, прогрев, пар, охлаждение,
              восстановление, свет, тишина и удобство эксплуатации.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/65">
              Поэтому в проекте учитываются не только материалы и визуальный
              стиль, но и вентиляция, влажность, безопасность, инженерные узлы,
              эргономика и обслуживание.
            </p>

            <Link
              href="#request"
              className="mt-10 inline-flex w-fit rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-[#8a6a43]"
            >
              Обсудить задачу
            </Link>
          </div>
        </div>
      </section>

      <section
        id="request"
        className="grid gap-10 bg-[#111] px-6 py-20 text-white md:px-12 lg:grid-cols-2 lg:px-20"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            заявка
          </p>

          <h2 className="mt-5 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Обсудить {product.title.toLowerCase()}
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/62">
            Оставьте контакты — команда ARCHIPAR свяжется с вами, чтобы
            обсудить формат проекта, объект, задачи и возможный сценарий
            реализации.
          </p>
        </div>

        <ContactForm />
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
