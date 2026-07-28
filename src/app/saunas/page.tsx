import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Сауны — ARCHIPAR",
  description:
    "Проектируем и строим сауны для домов, квартир, банных зон и коммерческих объектов.",
};

export default function SaunasPage() {
  return <ProductPage product={products.saunas} />;
}
