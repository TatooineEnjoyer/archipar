"use client";

import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function BathComplexesPortfolio() {
return ( <main className="bg-[#0f0f0f] text-white"> <Header />

```
  {/* HERO */}

  <section className="relative min-h-screen flex items-center">
    <Image
      src="/images/examples/olymp-city-1.jpg"
      alt="Olymp City"
      fill
      priority
      className="object-cover opacity-30"
    />

    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
      <p className="uppercase tracking-[0.35em] text-[#c8aa78] text-sm mb-6">
        ARCHIPAR
      </p>

      <h1 className="text-5xl md:text-7xl font-light leading-tight">
        БАННЫЕ
        <br />
        КОМПЛЕКСЫ
      </h1>

      <p className="mt-10 max-w-2xl text-lg text-white/80 leading-relaxed">
        Архитектура пара, воды и отдыха.
        <br />
        Проектируем и реализуем банные комплексы премиального уровня
        для частных резиденций, клубов и SPA-пространств.
      </p>

      <a
        href="#contact"
        className="inline-block mt-10 border border-[#c8aa78] px-8 py-4 hover:bg-[#c8aa78] hover:text-black transition"
      >
        Обсудить проект
      </a>
    </div>
  </section>

  {/* OLYMP CITY */}

  <section className="max-w-7xl mx-auto px-6 py-28">
    <h2 className="text-4xl md:text-5xl font-light mb-4">
      БАННЫЙ КОМПЛЕКС OLYMP CITY
    </h2>

    <p className="text-[#c8aa78] mb-8">
      Турция, Аланья · Премиум-квартал «ОЛИМП СИТИ»
    </p>

    <p className="max-w-3xl text-white/75 leading-relaxed mb-12">
      Ультрасовременное термальное пространство,
      объединяющее эстетику средиземноморского курорта
      и современные инженерные решения.
      Два банных комплекса с отдельными лоджиями отдыха,
      комнатами восстановления, массажными зонами и купелями.
    </p>

    <div className="grid md:grid-cols-3 gap-5">
      <Image src="/images/examples/olymp-city-1.jpg" alt="" width={800} height={600} className="w-full h-[320px] object-cover" />
      <Image src="/images/examples/olymp-city-2.jpg" alt="" width={800} height={600} className="w-full h-[320px] object-cover" />
      <Image src="/images/examples/olymp-city-3.jpg" alt="" width={800} height={600} className="w-full h-[320px] object-cover" />
      <Image src="/images/examples/olymp-city-4.jpg" alt="" width={800} height={600} className="w-full h-[320px] object-cover" />
      <Image src="/images/examples/olymp-city-5.jpg" alt="" width={800} height={600} className="w-full h-[320px] object-cover" />
    </div>
  </section>

  {/* THE BATH HOUSE */}

  <section className="bg-[#161616]">
    <div className="max-w-7xl mx-auto px-6 py-28">
      <h2 className="text-4xl md:text-5xl font-light mb-4">
        THE BATH HOUSE
      </h2>

      <p className="text-[#c8aa78] mb-8">
        Лондон · Grosvenor Gardens, 1
      </p>

      <p className="max-w-3xl text-white/75 leading-relaxed mb-12">
        Расположенный напротив Букингемского дворца комплекс сочетает
        традиции русской бани с современными технологиями SPA.
        Аутентичные парные, авторские печи и зоны отдыха формируют
        уникальный опыт для гостей одного из самых известных банных
        пространств Лондона.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <Image src="/images/examples/bath-house-1.jpg" alt="" width={1000} height={700} className="w-full h-[420px] object-cover" />
        <Image src="/images/examples/bath-house-2.jpg" alt="" width={1000} height={700} className="w-full h-[420px] object-cover" />
        <Image src="/images/examples/bath-house-3.jpg" alt="" width={1000} height={700} className="w-full h-[420px] object-cover" />
        <Image src="/images/examples/bath-house-4.jpg" alt="" width={1000} height={700} className="w-full h-[420px] object-cover" />
      </div>
    </div>
  </section>

  {/* ДУША КРАСНОГОРСКА */}

  <section className="max-w-7xl mx-auto px-6 py-28">
    <h2 className="text-4xl md:text-5xl font-light mb-4">
      ДУША КРАСНОГОРСКА
    </h2>

    <p className="text-[#c8aa78] mb-8">
      Красногорск · ул. Речная, 37
    </p>

    <p className="max-w-3xl text-white/75 leading-relaxed mb-12">
      Первое в России общественное банное пространство,
      адаптированное под коллективное парение и программы ауфгусс.
      Парная рассчитана на 50 человек и разделена на три
      температурные зоны.
    </p>

    <div className="grid md:grid-cols-3 gap-5">
      <Image src="/images/examples/krasnogorsk-1.jpg" alt="" width={800} height={600} className="w-full h-[300px] object-cover" />
      <Image src="/images/examples/krasnogorsk-2.jpg" alt="" width={800} height={600} className="w-full h-[300px] object-cover" />
      <Image src="/images/examples/krasnogorsk-3.jpg" alt="" width={800} height={600} className="w-full h-[300px] object-cover" />
    </div>
  </section>

  {/* РОСТОВ */}

  <section className="bg-[#161616]">
    <div className="max-w-7xl mx-auto px-6 py-28">
      <h2 className="text-4xl md:text-5xl font-light mb-4">
        БАННЫЙ КОМПЛЕКС 360 м²
      </h2>

      <p className="text-[#c8aa78] mb-8">
        Ростов-на-Дону
      </p>

      <p className="max-w-3xl text-white/75 leading-relaxed mb-12">
        Трехэтажный банный комплекс площадью более 360 м².
        Разработаны архитектурные решения, инженерные системы,
        вентиляция, дымоудаление, бассейны, водоподготовка и
        полный комплект рабочей документации.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        <Image src="/images/examples/rostov-plan-1.jpg" alt="" width={800} height={600} className="w-full h-[300px] object-cover" />
        <Image src="/images/examples/rostov-plan-2.jpg" alt="" width={800} height={600} className="w-full h-[300px] object-cover" />
        <Image src="/images/examples/rostov-plan-3.jpg" alt="" width={800} height={600} className="w-full h-[300px] object-cover" />
      </div>

      <p className="mt-6 text-white/50 text-sm">
        Фрагменты рабочей документации проекта.
      </p>
    </div>
  </section>

  {/* CTA */}

  <section
    id="contact"
    className="max-w-7xl mx-auto px-6 py-32 text-center"
  >
    <h2 className="text-5xl font-light mb-8">
      Создаём банные комплексы,
      которые работают десятилетиями
    </h2>

    <p className="max-w-2xl mx-auto text-white/70 leading-relaxed mb-12">
      От первых эскизов до запуска объекта.
      ARCHIPAR объединяет архитектуру,
      инженерию и строительную реализацию
      в единую систему.
    </p>

    <div className="max-w-3xl mx-auto">
      <ContactForm />
    </div>
  </section>
</main>
```

);
}
