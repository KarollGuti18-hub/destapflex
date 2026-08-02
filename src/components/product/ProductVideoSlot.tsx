import { productVideo } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

/**
 * Sección “Video de presentación” en Diseño Industrial.
 */
export function ProductVideoSlot() {
  if (!productVideo?.src) {
    return null;
  }

  return (
    <section id="video" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Multimedia"
            title="Video de presentación"
            description="Conoce el problema identificado, el funcionamiento de DestapFlex, su público objetivo, los parámetros CTS y CTQ y el valor agregado del producto."
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-black shadow-card">
            <div className="relative aspect-video w-full bg-black">
              <video
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster={productVideo.poster}
                title={productVideo.title}
                aria-label={productVideo.title}
              >
                <source src={productVideo.src} type="video/mp4" />
                Tu navegador no soporta la reproducción de video. Puedes{" "}
                <a
                  href={productVideo.src}
                  className="underline"
                  download
                >
                  descargar el video de DestapFlex
                </a>{" "}
                para verlo en otro reproductor.
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
