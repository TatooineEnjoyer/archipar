import type { Metadata } from "next";
import BathComplexesPortfolio from "@/components/BathComplexesPortfolio";

export const metadata: Metadata = {
title: "Банные комплексы — ARCHIPAR",
description:
"Проектирование и реализация премиальных банных комплексов, SPA-пространств и хамамов.",
};

export default function BathComplexesPage() {
return <BathComplexesPortfolio />;
}
