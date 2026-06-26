import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Банные комплексы — ARCHIPAR",
  description: "Проектируем и строим банные комплексы для загородных домов, гостевых домов и частных участков.",
};

export default function BathComplexesPage() {
  return <ProductPage product={products["bath-complexes"]} />;
}
