"use client";

import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

const projects = [
{
title: "OLYMP CITY",
location: "Турция, Аланья",
description:
"Современный банный комплекс с хамамом, зонами отдыха и бассейнами.",
image: "/images/examples/olymp-city.jpg",
},
{
title: "THE BATH HOUSE",
location: "Лондон",
description:
"Премиальный банный комплекс с русскими парными и SPA-зонами.",
image: "/images/examples/bath-house.jpg",
},
{
title: "ДУША КРАСНОГОРСКА",
location: "Красногорск",
description:
"Общественное банное пространство для коллективного парения.",
image: "/images/examples/krasnogorsk.jpg",
},
{
title: "КОМПЛЕКС 360 м²",
location: "Ростов-на-Дону",
description:
"Трехэтажный банный комплекс с бассейном и инженерными системами.",
image: "/images/examples/rostov.jpg",
},
];

export default function BathComplexesPortfolio() {
return ( <main className="bg-black text-white"> <Header />

```
  <section className="relative h-[80vh] flex items-center">
    <Image
      src="/images/examples/hero.jpg"
      alt="Банный комплекс"
      fill
      priority
      className="object-cover opacity-40"
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-light">
        БАННЫЕ КОМПЛЕКСЫ
      </h1>

      <p className="mt-6 max-w-2xl text-white/80">
        Проектирование банных комплексов, SPA, хамамов, бассейнов и зон отдыха.
      </p>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-4xl mb-12">Наши проекты</h2>

    <div className="grid md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="border border-white/10 overflow-hidden"
        >
          <div className="relative h-[350px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl">{project.title}</h3>

            <p className="text-[#c8aa78] mt-2">
              {project.location}
            </p>

            <p className="text-white/70 mt-4">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>

  <section
    id="contact"
    className="max-w-5xl mx-auto px-6 py-24"
  >
    <h2 className="text-4xl mb-8 text-center">
      Обсудить проект
    </h2>

    <ContactForm />
  </section>
</main>
```

);
}
