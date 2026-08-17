import { cjmAsset } from "@/data/research";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CustomerJourneySection() {
  return (
    <section
      id="customer-journey"
      className="border-y border-[var(--color-line)] bg-white/50 section-pad"
    >
      <div className="container-wide">
        <Reveal>
          <SectionTitle
            title="Customer Journey Map"
            description="Recorrido del usuario con DestapFlex: descubrimiento, compra, primer uso, uso diario y recomendación."
          />
        </Reveal>

        <Reveal className="mt-10">
          <ImageLightbox
            src={cjmAsset.src}
            alt={cjmAsset.alt}
            width={cjmAsset.width}
            height={cjmAsset.height}
            caption={cjmAsset.caption}
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </Reveal>
      </div>
    </section>
  );
}
