import type { Metadata } from "next";

import { BeforeAfter } from "@/components/third-cut/BeforeAfter";
import { CutNav } from "@/components/third-cut/CutNav";
import { DataTable } from "@/components/third-cut/DataTable";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  ctsRows,
  developmentNav,
  notPatentable,
  patentable,
  productIntro,
  productPhotos,
} from "@/data/thirdCut";

export const metadata: Metadata = {
  title: "DestapFlex",
  description:
    "Desarrollo de innovación de DestapFlex: producto, CTS, patentabilidad, precio y utilidad.",
};

export default function DesarrolloInnovacionPage() {
  return (
    <>
      <PageBanner
        eyebrow="Desarrollo de Innovación"
        title="Producto de gestión tecnológica"
        description="El abridor después de los ajustes, las CTS que resuelve, lo que se puede proteger y el precio esperado."
      />
      <CutNav label="Apartados de desarrollo de innovación" items={developmentNav} />

      <section id="producto" className="border-b border-[var(--color-line)] py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle eyebrow="01" title="De diseño industrial a este producto" />
          <p className="prose-body mt-6 max-w-3xl text-sm leading-relaxed">{productIntro}</p>
          <p className="prose-body mt-4 max-w-3xl text-sm leading-relaxed">
            El producto no se rediseñó. Los ajustes fueron cambiar el seguro por un pin de bola
            con anillo y agregar fundas de goma al mango.
          </p>
          <BeforeAfter />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {productPhotos.slice(2).map((photo) => (
              <ImageLightbox
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                caption={photo.caption}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white"
                imageClassName="h-auto max-h-[32rem] w-full object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="cts" className="border-b border-[var(--color-line)] bg-stone-50 py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="02"
            title="CTS y CTQ que resuelve"
            description="Quedan tres CTS. Portable salió de la tabla porque la voz del cliente no la confirmó."
          />
          <div className="mt-8">
            <DataTable
              caption="CTS, CTQ y cómo las resuelve DestapFlex"
              headers={["CTS", "CTQ", "Variable", "Meta", "Cómo lo resuelve DESTAPFLEX"]}
              rows={ctsRows}
            />
          </div>
          <p className="mt-6">
            <a
              href="/docs/cts-ctq-destapflex.xlsx"
              download
              className="text-sm font-semibold text-navy-800 underline decoration-amber-400 underline-offset-4"
            >
              Descargar la tabla de CTS y CTQ
            </a>
          </p>
        </div>
      </section>

      <section id="patente" className="border-b border-[var(--color-line)] py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="03"
            title="Qué se puede proteger"
            description="La protección más fuerte es un modelo de utilidad sobre la correa perforada con pin de bola, junto con las dos cuñas."
          />
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,20rem)_1fr]">
            <ImageLightbox
              src="/assets/desarrollo/render-final.png"
              alt="Render con la correa, el pin y las dos cuñas"
              width={478}
              height={782}
              caption="En el render: correa perforada, pin, cuña en L y cuña abrelatas."
              className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white"
            />
            <div className="space-y-4">
              {patentable.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[var(--color-line)] bg-white p-5"
                >
                  <h3 className="font-display text-lg font-semibold text-navy-950">{item.title}</h3>
                  <p className="prose-body mt-2 text-sm leading-relaxed">{item.text}</p>
                </article>
              ))}
              <p className="prose-body rounded-2xl border border-amber-300/70 bg-amber-50 p-5 text-sm leading-relaxed">
                {notPatentable}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="precio" className="py-16">
        <div className="container-wide px-5 sm:px-8 lg:px-10">
          <SectionTitle eyebrow="04" title="Precio y utilidad esperada" />
          <p className="prose-body mt-6 max-w-3xl text-base leading-relaxed">
            El precio esperado es <strong>$49.900</strong>, con una utilidad de{" "}
            <strong>$23.710 por unidad (47,5 %)</strong> y <strong>$56,4 millones en el año 5</strong>.
          </p>
          <p className="prose-body mt-4 max-w-3xl text-sm leading-relaxed">
            La encuesta mostró que el 60 % esperaba pagar entre $15.000 y $25.000. Con los costos
            actuales, bajar el precio a $35.000 deja el margen en $10.300 y sube el equilibrio a
            unas 5.978 unidades al año. Por eso el precio se sostiene comunicando el valor del 3 en
            1, la durabilidad y la garantía.
          </p>
        </div>
      </section>
    </>
  );
}
