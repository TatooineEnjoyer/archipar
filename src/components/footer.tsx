import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] text-[#f4f0e8] pt-16 pb-8 mt-24 border-t border-white/5 relative overflow-hidden">
      {/* Легкий фоновый градиент для глубины */}
      <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-white/10">
          
          {/* Блок 1: Логотип и концепт */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image 
                src="/favicon.ico" 
                alt="ARCHIPAR Favicon" 
                width={32} 
                height={32} 
                className="opacity-90 select-none"
              />
              <span className="font-serif text-lg tracking-[0.2em] font-light text-white">
                ARCHIPAR
              </span>
            </div>
            <p className="text-sm text-[#f4f0e8]/60 font-sans leading-relaxed max-w-xs">
              Проектирование и реализация премиальных банных комплексов с авторскими сценариями пара.
            </p>
          </div>

          {/* Блок 2: Направления (из вашего древа) */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-sm tracking-[0.15em] text-[#b8935f] uppercase font-medium">
              Решения
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm text-[#f4f0e8]/70 font-sans">
              <Link href="/bath-complexes" className="hover:text-white transition-colors">
                Банные комплексы
              </Link>
              <Link href="/baths" className="hover:text-white transition-colors">
                Премиальные бани
              </Link>
              <Link href="/saunas" className="hover:text-white transition-colors">
                Финские сауны
              </Link>
              <Link href="/hamams" className="hover:text-white transition-colors">
                Хамамы под ключ
              </Link>
            </nav>
          </div>

          {/* Блок 3: Компания */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-sm tracking-[0.15em] text-[#b8935f] uppercase font-medium">
              Навигация
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm text-[#f4f0e8]/70 font-sans">
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>
              <Link href="/#portfolio" className="hover:text-white transition-colors">
                Портфолио
              </Link>
              <Link href="/#modules" className="hover:text-white transition-colors">
                Модули климата
              </Link>
              <Link href="/#contacts" className="hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Блок 4: Контакты */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-sm tracking-[0.15em] text-[#b8935f] uppercase font-medium">
              Связаться с нами
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#f4f0e8]/70 font-sans">
              <p className="text-[#f4f0e8]/90">8 (800) 000-00-00</p>
              <p>info@archipar.ru</p>
              <p className="text-xs text-[#f4f0e8]/40 mt-2 leading-relaxed">
                Разработка индивидуальных сценариев пара и инженерии климата.
              </p>
            </div>
          </div>

        </div>

        {/* Нижняя часть подвала */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#f4f0e8]/40 font-sans">
          <p>© {currentYear} ARCHIPAR. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#f4f0e8]/70 transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
