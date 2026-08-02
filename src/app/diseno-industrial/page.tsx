import type { Metadata } from "next";

import { CtsCtqExplorer } from "@/components/product/CtsCtqExplorer";
import { HowItWorks } from "@/components/product/HowItWorks";
import { ProductDescription } from "@/components/product/ProductDescription";
import { ProductModel3D } from "@/components/product/ProductModel3D";
import { ProductVideoSlot } from "@/components/product/ProductVideoSlot";
import { RenderExplorer } from "@/components/product/RenderExplorer";
import { TechnicalFeatures } from "@/components/product/TechnicalFeatures";
import { PageBanner } from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Diseño Industrial | DestapFlex",
  description:
    "Conoce DestapFlex: componentes, funcionamiento, renders, modelo 3D y parámetros críticos.",
};

export default function DisenoIndustrialPage() {
  return (
    <>
      <PageBanner
        eyebrow="Diseño Industrial"
        title="Producto DestapFlex"
        description="Descripción, componentes, funcionamiento, renders, modelo 3D y parámetros CTS/CTQ del producto en su estado actual."
      />
      <ProductDescription />
      <TechnicalFeatures />
      <HowItWorks />
      <RenderExplorer />
      <ProductModel3D />
      <CtsCtqExplorer />
      <ProductVideoSlot />
    </>
  );
}
