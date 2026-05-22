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
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";

const cases = [
  { title: "Баня в загородном доме", type: "Частный дом · Нахабино", image: "/images/cases/case-01.jpg" },
  { title: "Хамам у дома", type: "Встроенная зона · Репино", image: "/images/cases/case-02.jpg" },
  { title: "Парная под привычки семьи", type: "Проект под клиента · Раздоры", image: "/images/cases/case-03.jpg" },
  { title: "Гостевая баня из сосны", type: "Для гостей · Алтай", image: "/images/cases/case-05.jfif" },
];

const typologies = [
  { title: "Отдельная баня", text: "Проектируем баню как отдельный домик: удобно ставим на участке, подбираем стиль и продумываем путь от дома.", image: "/images/complexes/private-complex.jpg", href: "/bath-complexes", meta: "На участке" },
  { title: "Баня внутри дома", text: "Защищаем стены и перекрытия от влаги, делаем нормальный воздухообмен и аккуратно прячем оборудование.", image: "/images/complexes/house-complex.jpg", href: "/bath-complexes", meta: "Внутри дома" },
  { title: "Бани для гостей и бизнеса", text: "Делаем бани для клубов, отелей и баз отдыха: чтобы выдерживали ежедневную работу и были удобны гостям.", image: "/images/complexes/commercial-complex.jpg", href: "/bath-complexes", meta: "Для потока гостей" },
];

const anatomy = [
  { title: "Пар и тепло", text: "Подбираем режим так, чтобы было тепло, приятно и легко дышалось.", icon: Flame },
  { title: "Хамам", text: "Тёплые стены и лежаки, мягкий пар и спокойная атмосфера для отдыха.", icon: Droplets },
  { title: "Вода и холод", text: "Купели, обливание и лёд — всё для бодрого контраста после парной.", icon: Waves },
  { title: "Воздух без сквозняков", text: "Свежий воздух есть, лишнего шума и торчащих труб — нет.", icon: Wind },
];

const methodSteps = [
  { title: "Смотрим объект", text: "Изучаем помещение или участок, задаём вопросы и понимаем, как вы хотите пользоваться баней.", icon: Compass },
  { title: "Делаем проект", text: "Показываем план, материалы, оборудование и все важные узлы простым языком.", icon: Ruler },
  { title: "Закупаем и строим", text: "Берём на себя дерево, камень, оборудование и работу мастеров на объекте.", icon: Building2 },
  { title: "Проверяем и запускаем", text: "Настраиваем пар, тепло, воду и воздух, чтобы баней можно было пользоваться сразу.", icon: CheckCircle2 },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f0] text-[#121212] antialiased">
      <Header />

      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#121212] pb-16 pt-32 md:pb-24">
        <Image src="/images/hero/hero-main.jpg" alt="Бани ARCHIPAR" fill priority className="object-cover opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

        <div className="container-premium relative z-10 w-full">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              Проект · Оборудование · Строительство
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Бани, в которых <br />
                <span className="italic text-[#c8aa78]">хочется отдыхать</span>
              </h1>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/60 md:text-lg">
                ARCHIPAR проектирует и строит бани, хамамы и парные под ваш дом, участок и привычный ритм отдыха.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="#request" className="inline-flex items-center justify-center gap-3 bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black hover:bg-[#dbbc8a] transition-all">
                  Обсудить проект <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#portfolio" className="inline-flex items-center justify-center gap-3 border border-white/25 bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black">
                  Смотреть работы
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#f8f5f0]">
        <div className="container-premium max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold mb-4">О нас</p>
              <h2 className="font-serif text-3xl font-extralight leading-snug tracking-tight text-[#121212] sm:text-4xl">
                Хорошая баня — это не только красивая отделка.
              </h2>
            </div>
            <div className="text-base font-light leading-relaxed text-black/70 space-y-6 lg:pt-8">
              <p>Часто бывает так: картинка красивая, а пользоваться неудобно. Вентиляцию негде спрятать, оборудование мешает, в парной душно.</p>
              <p className="font-medium text-[#121212]">Мы сразу продумываем и внешний вид, и то, как будут работать пар, тепло, вода и воздух. Поэтому баня получается красивой, удобной и понятной в уходе.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#f0eae1] py-24 border-y border-black/5">
        <div className="container-premium max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">Работы</p>
              <h2 className="font-serif text-4xl font-light text-[#121212]">Что уже построили</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {cases.map((c, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[300px] bg-black mb-4">
                  <Image src={c.image} alt={c.title} fill className="object-cover opacity-90 transition-transform group-hover:scale-102" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#8a6a43] font-semibold">{c.type}</p>
                <h3 className="font-serif text-2xl font-light mt-1">{c.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="anatomy" className="bg-[#121212] py-24 text-white">
        <div className="container-premium max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-extralight mb-16 text-white">Из чего складывается хорошая баня</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {anatomy.map((item, i) => (
              <div key={i} className="border border-white/10 p-8 bg-white/[0.02]">
                <item.icon className="h-6 w-6 text-[#c8aa78] mb-6" />
                <h3 className="font-serif text-xl font-light text-white mb-3">{item.title}</h3>
                <p className="text-xs font-light text-white/60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="py-24 bg-[#f8f5f0]">
        <div className="container-premium max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-16">Как идёт работа</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((s, i) => (
              <div key={i} className="border-l border-black/10 pl-6">
                <span className="block text-black/30 mb-4">0{i + 1}</span>
                <h3 className="text-lg font-serif mb-3">{s.title}</h3>
                <p className="text-sm text-black/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="bg-[#121212] py-24 text-white border-t border-white/5">
        <div className="container-premium max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-light mb-6">Обсудить вашу баню</h2>
              <p className="text-white/60 mb-8">Оставьте контакты — мы свяжемся, зададим пару вопросов по объекту и подскажем, с чего лучше начать.</p>
              <div className="space-y-4 text-xs uppercase tracking-wider text-white/50">
                <p>• Быстро оценим, что можно сделать</p>
                <p>• Подскажем по парной, хамаму, воде и вентиляции</p>
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
