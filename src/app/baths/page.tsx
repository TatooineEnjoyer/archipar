import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Бани — ARCHIPAR",
  description:
    "Проектируем и строим бани для загородных домов, участков и гостевых объектов.",
};

export default function BathsPage() {
  return <ProductPage product={products.baths} />;
}
