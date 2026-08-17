import type { Metadata } from "next";

import { CtsCtqExplorer } from "@/components/product/CtsCtqExplorer";
import { CtsCtqNuevas } from "@/components/product/CtsCtqNuevas";
import { CustomerJourneySection } from "@/components/product/CustomerJourneySection";
import { HowItWorks } from "@/components/product/HowItWorks";
import { InnovationProposal } from "@/components/product/InnovationProposal";
import { ProductDescription } from "@/components/product/ProductDescription";
import { ProductModel3D } from "@/components/product/ProductModel3D";
import { ProductVideoSlot } from "@/components/product/ProductVideoSlot";
import { RenderExplorer } from "@/components/product/RenderExplorer";
import { TechnicalFeatures } from "@/components/product/TechnicalFeatures";
import { ValsSection } from "@/components/product/ValsSection";
import { PageBanner } from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "DestapFlex",
  description:
    "Conoce DestapFlex: componentes, funcionamiento, VALS, Customer Journey, CTS/CTQ y propuesta de innovación.",
};

export default function DisenoIndustrialPage() {
  return (
    <>
      <PageBanner
        eyebrow="Diseño Industrial"
        title="Producto DestapFlex"
        description="Descripción, componentes, funcionamiento, renders, modelo 3D, video, VALS, Customer Journey Map, CTS/CTQ y propuesta de innovación."
      />
      <ProductDescription />
      <TechnicalFeatures />
      <HowItWorks />
      <RenderExplorer />
      <ProductModel3D />
      <ProductVideoSlot />
      <ValsSection />
      <CustomerJourneySection />
      <CtsCtqNuevas />
      <InnovationProposal />
      <CtsCtqExplorer />
    </>
  );
}
