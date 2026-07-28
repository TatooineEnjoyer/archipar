import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Банные комплексы", href: "/bath-complexes" },
  { label: "Бани", href: "/baths" },
  { label: "Сауны", href: "/saunas" },
  { label: "Хамамы", href: "/hamams" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1c1a17] pb-12 pt-20 text-white/80">
      <div className="container-premium">
        <div className="grid items-end gap-8 border-b border-white/10 pb-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c8aa78]">
              ARCHIPAR
            </p>
            <h2 className="font-serif text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              Строим бани, в которые <br />
              <span className="italic text-[#c8aa78]">хочется вернуться</span>
            </h2>
          </div>
          <Link
            href="/#request"
            className="inline-flex w-max items-center gap-2 border-b border-[#c8aa78] pb-1 text-xs uppercase tracking-widest text-[#c8aa78] transition-colors duration-300 hover:text-[#dbbc8a]"
          >
            Обсудить проект
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-12 pt-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-light tracking-[0.2em] text-white">
              ARCHIPAR
            </p>
            <p className="mt-6 max-w-sm text-xs font-light leading-relaxed text-white/50">
              Проектирование и строительство банных комплексов, бань, саун и хамамов под ключ: проектирование, архитектура, инженерия, монтаж и запуск.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-light uppercase tracking-wider text-white/60 md:col-span-4">
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Решения
              </p>
              {footerLinks.slice(0, 2).map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors duration-300 hover:text-[#c8aa78]">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Навигация
              </p>
              {footerLinks.slice(2).map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors duration-300 hover:text-[#c8aa78]">
                  {link.label}
                </Link>
              ))}
              <Link href="/#portfolio" className="transition-colors duration-300 hover:text-[#c8aa78]">
                Главная
              </Link>
            </div>
          </div>

          <div className="w-full space-y-4 text-xs font-light text-white/50 md:col-span-3 md:justify-self-end md:text-right">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Контакты
            </p>
            <p className="flex items-center gap-2 md:justify-end">
              <MapPin className="h-3.5 w-3.5 text-[#c8aa78]" /> Россия & СНГ
            </p>
            <p className="flex items-center gap-2 md:justify-end">
              <Phone className="h-3.5 w-3.5 text-[#c8aa78]" /> Телефон добавьте в Header / ContactForm
            </p>
            <p className="flex items-center gap-2 md:justify-end">
              <Mail className="h-3.5 w-3.5 text-[#c8aa78]" /> Заявки через форму сайта
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest text-white/30 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ARCHIPAR. Все права защищены.</p>
          <p className="tracking-[0.3em] text-white/40">Bath design & build</p>
        </div>
      </div>
    </footer>
  );
}
