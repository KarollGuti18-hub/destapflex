/**
 * Punto de extensión para un video futuro.
 * Si `productVideo` en `src/data/project.ts` define `src`, este componente
 * puede renderizar el reproductor sin reestructurar la página.
 */
import { productVideo } from "@/data/project";

export function ProductVideoSlot() {
  if (!productVideo?.src) {
    return null;
  }

  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-black shadow-card">
          <video
            className="aspect-video w-full"
            controls
            poster={productVideo.poster}
            title={productVideo.title}
          >
            <source src={productVideo.src} />
          </video>
        </div>
      </div>
    </section>
  );
}
