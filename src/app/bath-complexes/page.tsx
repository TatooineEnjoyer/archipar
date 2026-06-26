import type { Metadata } from "next";
import BathComplexesPortfolio from "@/components/BathComplexesPortfolio";

export const metadata: Metadata = {
title: "Банные комплексы — ARCHIPAR",
description: "Проектирование банных комплексов",
};

export default function BathComplexesPage() {
return <BathComplexesPortfolio />;
}
