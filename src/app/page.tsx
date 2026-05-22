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
  { title: "Банный комплекс в загородном доме", type: "Частный объект · Нахабино", image: "/images/cases/case-01.jpg" },
  { title: "Хамам в спа-зоне", type: "Встроенный блок · Репино", image: "/images/cases/case-02.jpg" },
  { title: "Парная с индивидуальной настройкой", type: "Авторский проект · Раздоры", image: "/images/cases/case-03.jpg" },
  { title: "Гостевой комплекс из сосны", type: "Коммерческий формат · Алтай", image: "/images/cases/case-05.jfif" },
];

const typologies = [
  { title: "Отдельные бани", text: "Приватные здания, которые мы проектируем в гармонии с ландшафтом и стилем вашего дома.", image: "/images/complexes/private-complex.jpg", href: "/bath-complexes", meta: "Отдельное здание" },
  { title: "Баня в доме", text: "Встроенные спа-зоны. Мы делаем качественную защиту от влаги и независимую вентиляцию, чтобы в доме было комфортно.", image: "/images/complexes/house-complex.jpg", href: "/bath-complexes", meta: "Внутри дома" },
  { title: "Для бизнеса", text: "Проекты для клубов и отелей. Рассчитаны на постоянную нагрузку и комфортный отдых ваших гостей.", image: "/images/complexes/commercial-complex.jpg", href: "/bath-complexes", meta: "Коммерция" },
];

const anatomy = [
  { title: "Пар и тепло", text: "Делаем пар легким, а температуру — приятной для дыхания. В наших парных легко дышится.", icon: Flame },
  { title: "Каменные хамамы", text: "Мягкое тепло от прогретых стен и лежаков, правильный пар и ароматы для отдыха.", icon: Droplets },
  { title: "Вода и закаливание", text: "Купели, системы обливания и генераторы льда для контрастных процедур.", icon: Waves },
  { title: "Незаметная вентиляция", text: "Свежий воздух без сквозняков. Мы прячем все трубы, чтобы вы видели только красоту.", icon: Wind },
];

const methodSteps = [
  { title: "Разбор задачи", text: "Изучаем ваш объект, технические возможности дома и ваши пожелания к отдыху.", icon: Compass },
  { title: "Проект и чертежи", text: "Соединяем красивый дизайн и сложную инженерию в один понятный проект.", icon: Ruler },
  { title: "Закупка и монтаж", text: "Сами поставляем лучшее дерево, камень и оборудование. Наши мастера строят всё от начала до конца.", icon: Building2 },
  { title: "Настройка и запуск", text: "Настраиваем все режимы, проверяем вентиляцию и передаем вам полностью готовую баню.", icon: CheckCircle2 },
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
              Проектирование · Инженерия · Строительство
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="font-serif max-w-5xl text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Архитектура пара <br />
                <span className="italic text-[#c8aa78]">и комфорт в деталях</span>
              </h1>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/60 md:text-lg">
                Бюро ARCHIPAR строит бани и спа-зоны, где красивый дизайн встречается с точной инженерной работой.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="#request" className="inline-flex items-center justify-center gap-3 bg-[#c8aa78] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black hover:bg-[#dbbc8a] transition-all">
                  Заказать проект <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#portfolio" className="inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
                  Наши работы
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
                Хорошая баня — это не только дорогая отделка.
              </h2>
            </div>
            <div className="text-base font-light leading-relaxed text-black/70 space-y-6 lg:pt-8">
              <p>Часто бывает так: дизайнер рисует красиво, а инженер пытается потом втиснуть вентиляцию и оборудование. В итоге эстетика рушится, а в парной становится душно.</p>
              <p className="font-medium text-[#121212]">Мы убрали этот разрыв. В ARCHIPAR мы сразу думаем о том, как пар, тепло и воздух будут работать в пространстве. Делаем так, чтобы баня была не только красивой, но и правильной внутри.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#f0eae1] py-24 border-y border-black/5">
        <div className="container-premium max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">Портфолио</p>
              <h2 className="font-serif text-4xl font-light text-[#121212]">Реализованные проекты</h2>
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
          <h2 className="font-serif text-4xl font-extralight mb-16 text-white">Как мы строим комфорт</h2>
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
          <h2 className="font-serif text-4xl font-light mb-16">Порядок работы</h2>
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
              <h2 className="font-serif text-4xl font-light mb-6">Заказать проект</h2>
              <p className="text-white/60 mb-8">Оставьте контакты — мы свяжемся, обсудим ваш объект и расскажем, с чего начать.</p>
              <div className="space-y-4 text-xs uppercase tracking-wider text-white/50">
                <p>• Быстрый расчет технической возможности</p>
                <p>• Профессиональный подход к инженерии</p>
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
