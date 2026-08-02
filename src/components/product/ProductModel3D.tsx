"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { assets } from "@/data/assets";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const MODEL_SRC = "/models/destapFlex.glb";
const DEFAULT_ORBIT = "35deg 70deg 70%";
const DEFAULT_TARGET = "auto auto auto";
const DEFAULT_FOV = "28deg";

type ModelViewerElement = HTMLElement & {
  src: string;
  autoRotate: boolean;
  cameraOrbit: string;
  cameraTarget: string;
  fieldOfView: string;
  resetTurntableRotation?: () => void;
  jumpCameraToGoal?: () => void;
};

function applyDefaultFraming(viewer: ModelViewerElement) {
  viewer.cameraTarget = DEFAULT_TARGET;
  viewer.cameraOrbit = DEFAULT_ORBIT;
  viewer.fieldOfView = DEFAULT_FOV;
  viewer.jumpCameraToGoal?.();
}

export function ProductModel3D() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewerRef = useRef<ModelViewerElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [nearViewport, setNearViewport] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!nearViewport || scriptReady) return;

    let cancelled = false;
    void import("@google/model-viewer").then(() => {
      if (!cancelled) setScriptReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [nearViewport, scriptReady]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !scriptReady) return;

    const onLoad = () => {
      applyDefaultFraming(viewer);
      setModelReady(true);
      setLoadError(false);
    };
    const onError = () => {
      setLoadError(true);
      setModelReady(false);
    };
    const onInteract = () => {
      setAutoRotate(false);
      viewer.autoRotate = false;
    };

    viewer.addEventListener("load", onLoad);
    viewer.addEventListener("error", onError);
    viewer.addEventListener("pointerdown", onInteract);
    viewer.addEventListener("touchstart", onInteract, { passive: true });
    viewer.addEventListener("wheel", onInteract, { passive: true });

    return () => {
      viewer.removeEventListener("load", onLoad);
      viewer.removeEventListener("error", onError);
      viewer.removeEventListener("pointerdown", onInteract);
      viewer.removeEventListener("touchstart", onInteract);
      viewer.removeEventListener("wheel", onInteract);
    };
  }, [scriptReady, nearViewport]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.autoRotate = autoRotate;
  }, [autoRotate, scriptReady, modelReady]);

  const resetView = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    applyDefaultFraming(viewer);
    viewer.resetTurntableRotation?.();
    setAutoRotate(true);
    viewer.autoRotate = true;
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const node = containerRef.current;
    if (!node) return;

    try {
      if (!document.fullscreenElement) {
        await node.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen may be blocked by the browser.
    }
  }, []);

  const showViewer = nearViewport && scriptReady;

  return (
    <section
      ref={sectionRef}
      id="modelo-3d"
      className="section-pad border-y border-[var(--color-line)] bg-white/60"
      aria-labelledby="modelo-3d-heading"
    >
      <div className="container-wide">
        <Reveal>
          <div id="modelo-3d-heading">
            <SectionTitle
              eyebrow="Modelo 3D interactivo"
              title="Explora DestapFlex en 3D"
              description="Gira, acerca y examina el ensamble completo del producto desde cualquier ángulo."
            />
          </div>
        </Reveal>

        <div
          ref={containerRef}
          className={`relative mt-10 overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-gradient-to-b from-[#eef2f6] to-[#e2e8ef] shadow-card ${
            isFullscreen ? "rounded-none" : ""
          }`}
        >
          <div
            className={`relative ${
              isFullscreen
                ? "h-screen"
                : "h-[460px] sm:h-[660px] md:h-[700px]"
            }`}
            role="img"
            aria-label={assets.model3d.alt}
          >
            {(!modelReady || loadError) && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#eef2f6]/95 to-[#e2e8ef]/95 p-6">
                <div className="relative mb-6 h-48 w-40 overflow-hidden rounded-2xl bg-white/70 shadow-soft ring-1 ring-black/5 sm:h-56 sm:w-44">
                  <Image
                    src={assets.renderPrincipal2.publicPath}
                    alt="Vista de respaldo de DestapFlex mientras carga el modelo 3D"
                    fill
                    className="object-contain p-3"
                    sizes="180px"
                  />
                </div>

                {loadError ? (
                  <p className="max-w-sm text-center text-sm text-ink-muted">
                    No fue posible cargar el modelo 3D. Puedes seguir explorando
                    las vistas en la galería de renders.
                  </p>
                ) : (
                  <>
                    <div
                      className="h-9 w-9 animate-spin rounded-full border-2 border-navy-900/20 border-t-navy-900"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm font-medium text-navy-900" aria-live="polite">
                      {nearViewport
                        ? "Cargando modelo 3D…"
                        : "Preparando visor 3D…"}
                    </p>
                    <p className="mt-1 text-xs text-steel-500">
                      Ensamble completo · aproximadamente 5,9 MB
                    </p>
                  </>
                )}
              </div>
            )}

            {showViewer ? (
              <model-viewer
                ref={(node: ModelViewerElement | null) => {
                  viewerRef.current = node;
                }}
                src={MODEL_SRC}
                alt={assets.model3d.alt}
                poster={assets.renderPrincipal2.publicPath}
                camera-controls
                touch-action="pan-y"
                {...(autoRotate ? { "auto-rotate": true } : {})}
                auto-rotate-delay="900"
                camera-orbit={DEFAULT_ORBIT}
                camera-target={DEFAULT_TARGET}
                field-of-view={DEFAULT_FOV}
                min-camera-orbit="auto 25deg 45%"
                max-camera-orbit="auto 110deg 160%"
                min-field-of-view="18deg"
                max-field-of-view="45deg"
                interaction-prompt="none"
                shadow-intensity="0.85"
                shadow-softness="0.9"
                exposure="1.05"
                environment-image="neutral"
                loading="eager"
                className="h-full w-full"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                  touchAction: "pan-y",
                  opacity: modelReady ? 1 : 0,
                  transition: "opacity 280ms ease",
                }}
              />
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] bg-white/85 px-4 py-3 backdrop-blur-sm sm:px-5">
            <p className="text-xs text-ink-muted sm:text-sm">
              Arrastra para girar · pellizca o usa la rueda para acercar
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setAutoRotate((value) => !value)}
                className="rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink ring-1 ring-[var(--color-line)] transition hover:bg-navy-50"
                aria-pressed={autoRotate}
              >
                {autoRotate ? "Pausar rotación" : "Reanudar rotación"}
              </button>
              <button
                type="button"
                onClick={resetView}
                className="rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink ring-1 ring-[var(--color-line)] transition hover:bg-navy-50"
              >
                Restablecer vista
              </button>
              <button
                type="button"
                onClick={() => void toggleFullscreen()}
                className="rounded-full bg-navy-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-navy-950"
              >
                {isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
