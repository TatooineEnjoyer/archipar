export type ProductPageData = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  albumHref?: string;
  points: string[];
  gallery: string[];
};

export const products: Record<string, ProductPageData> = {
  "bath-complexes": {
    slug: "bath-complexes",
    title: "Банные комплексы",
    eyebrow: "Главный продукт ARCHIPAR",
    description:
      "Цельное пространство отдыха, где парная, хамам, сауна, зона отдыха, купель, душевая и инженерия климата проектируются как единая система.",
    heroImage: "/images/complexes/private-complex.jpg",
    albumHref: "/albums/bath-complexes.pdf",
    points: [
      "Архитектурная концепция комплекса",
      "Планировка и сценарии использования",
      "Парная, хамам, сауна и зона отдыха",
      "Купель, душевая и контрастные процедуры",
      "Инженерия климата, вентиляции и влажности",
      "Авторский надзор и запуск объекта",
    ],
    gallery: [
      "/images/complexes/private-complex.jpg",
      "/images/complexes/house-complex.jpg",
      "/images/complexes/commercial-complex.jpg",
      "/images/cases/case-01.jpg",
      "/images/cases/case-02.jpg",
      "/images/cases/case-03.jpg",
    ],
  },

  baths: {
    slug: "baths",
    title: "Бани",
    eyebrow: "Русская баня",
    description:
      "Парная с правильным климатом, светом, материалами, полками и сценариями пара. Не просто помещение, а продуманная банная система.",
    heroImage: "/images/modules/steam-room.jpg",
    albumHref: "/albums/baths.pdf",
    points: [
      "Планировка парной",
      "Подбор материалов и света",
      "Сценарии пара и влажности",
      "Эргономика полков",
      "Вентиляция и безопасность",
      "Интеграция в дом или банный комплекс",
    ],
    gallery: [
      "/images/modules/steam-room.jpg",
      "/images/cases/case-01.jpg",
      "/images/cases/case-02.jpg",
      "/images/cases/case-04.jfif",
      "/images/hero/hero-main.jpg",
      "/images/hero/hero-secondary.jpg",
    ],
  },

  saunas: {
    slug: "saunas",
    title: "Сауны",
    eyebrow: "Сухой жар",
    description:
      "Современные сауны для частных домов и премиальных пространств: сухой жар, чистая геометрия, дерево, свет и стабильная инженерия.",
    heroImage: "/images/modules/sauna.jpg",
    albumHref: "/albums/saunas.pdf",
    points: [
      "Сухой климат и температурный режим",
      "Дерево и безопасные материалы",
      "Скрытый свет и атмосфера",
      "Эргономика посадочных зон",
      "Инженерия и электробезопасность",
      "Встраивание в wellness-зону",
    ],
    gallery: [
      "/images/modules/sauna.jpg",
      "/images/cases/case-03.jpg",
      "/images/cases/case-05.jfif",
      "/images/complexes/house-complex.jpg",
      "/images/modules/lounge.jpg",
      "/images/modules/engineering.jpg",
    ],
  },

  hamams: {
    slug: "hamams",
    title: "Хамамы",
    eyebrow: "Пар, камень, мягкое тепло",
    description:
      "Хамам как часть премиального wellness-пространства: камень, мозаика, мягкий пар, лежаки, подсветка и инженерия влажных зон.",
    heroImage: "/images/modules/hamam.jpg",
    albumHref: "/albums/hamams.pdf",
    points: [
      "Планировка влажной зоны",
      "Камень, мозаика и лежаки",
      "Парогенерация и мягкое тепло",
      "Гидроизоляция и водоотведение",
      "Световые сценарии",
      "Интеграция в частный дом или SPA",
    ],
    gallery: [
      "/images/modules/hamam.jpg",
      "/images/cases/case-06.jfif",
      "/images/modules/cooling.jpg",
      "/images/complexes/commercial-complex.jpg",
      "/images/modules/engineering.jpg",
      "/images/hero/hero-secondary.jpg",
    ],
  },
};
