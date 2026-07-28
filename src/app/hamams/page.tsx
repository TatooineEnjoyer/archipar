import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Хамамы — ARCHIPAR",
  description:
    "Проектируем и строим хамамы для домов, банных комплексов, спа-зон и коммерческих объектов.",
};

export default function HamamsPage() {
  return <ProductPage product={products.hamams} />;
}
