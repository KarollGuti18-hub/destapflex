"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import * as XLSX from "xlsx";

import { excelWorkbooks, type ExcelWorkbookRef } from "@/data/excelFiles";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface SheetGrid {
  name: string;
  rows: string[][];
}

function trimGrid(rows: string[][]): string[][] {
  const filled = rows.filter((row) => row.some((cell) => cell.trim() !== ""));
  const width = filled.reduce((max, row) => {
    let last = -1;
    row.forEach((cell, index) => {
      if (cell.trim() !== "") last = index;
    });
    return Math.max(max, last + 1);
  }, 0);

  if (width === 0) return [];

  return filled.map((row) => {
    const next = row.slice(0, width).map((cell) => cell.trim());
    while (next.length < width) next.push("");
    return next;
  });
}

function readWorkbook(buffer: ArrayBuffer): SheetGrid[] {
  const workbook = XLSX.read(buffer, { type: "array" });
  return workbook.SheetNames.map((name) => {
    const sheet = workbook.Sheets[name];
    const raw = XLSX.utils.sheet_to_json<(string | number | boolean | null)[]>(sheet, {
      header: 1,
      raw: false,
      defval: "",
    });
    const rows = raw.map((row) =>
      (Array.isArray(row) ? row : []).map((cell) => (cell == null ? "" : String(cell))),
    );
    return { name: name.trim(), rows: trimGrid(rows) };
  });
}

interface ExcelFrameProps {
  workbookId?: string;
  initialSheet?: string;
  showSwitcher?: boolean;
}

export function ExcelFrame({
  workbookId,
  initialSheet,
  showSwitcher = true,
}: ExcelFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const books = workbookId
    ? excelWorkbooks.filter((item) => item.id === workbookId)
    : excelWorkbooks;
  const [fileId, setFileId] = useState(books[0]?.id ?? excelWorkbooks[0].id);
  const [sheets, setSheets] = useState<SheetGrid[]>([]);
  const [sheetIndex, setSheetIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const file = books.find((item) => item.id === fileId) ?? books[0];
  const sheet = sheets[sheetIndex] ?? null;

  const loadFile = useCallback(async (target: ExcelWorkbookRef) => {
    setLoading(true);
    setError(null);
    setSheets([]);
    setSheetIndex(0);
    try {
      const response = await fetch(target.href);
      if (!response.ok) {
        throw new Error("No se pudo abrir el archivo.");
      }
      const buffer = await response.arrayBuffer();
      const nextSheets = readWorkbook(buffer);
      setSheets(nextSheets);
      const start = initialSheet
        ? nextSheets.findIndex((item) => item.name.toLowerCase() === initialSheet.toLowerCase())
        : 0;
      setSheetIndex(start >= 0 ? start : 0);
    } catch {
      setSheets([]);
      setError("No se pudo leer el Excel. Puedes descargarlo y abrirlo en tu computador.");
    } finally {
      setLoading(false);
    }
  }, [initialSheet]);

  useEffect(() => {
    if (!file) return;
    void loadFile(file);
  }, [file, loadFile]);

  useEffect(() => {
    const onChange = () => {
      setFullscreen(document.fullscreenElement === frameRef.current);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const open = fullscreen || expanded;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function toggleFullscreen() {
    const node = frameRef.current;
    if (!node) return;
    if (open) {
      setExpanded(false);
      if (document.fullscreenElement === node) await document.exitFullscreen();
      return;
    }
    setExpanded(true);
    try {
      await node.requestFullscreen();
    } catch {
      setExpanded(true);
    }
  }

  if (!file) return null;

  return (
        <div
          ref={frameRef}
          className={`overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-lift ${
            open ? "fixed inset-0 z-[80] flex h-dvh flex-col rounded-none border-0" : ""
          }`}
        >
          <div className="flex flex-wrap items-center gap-3 bg-navy-950 px-4 py-3 text-white sm:px-5">
            <div className="min-w-0 flex-1">
              <p id={titleId} className="truncate text-sm font-semibold">
                {file.fileName}
              </p>
              <p className="truncate text-xs text-white/60">{file.summary}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={file.href}
                download={file.fileName}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-950 transition hover:bg-amber-100"
              >
                Descargar
              </a>
              <button
                type="button"
                onClick={() => void toggleFullscreen()}
                className="rounded-full bg-amber-500 px-3 py-1.5 text-xs font-semibold text-navy-950 transition hover:bg-amber-400"
              >
                {open ? "Salir de pantalla completa" : "Pantalla completa"}
              </button>
            </div>
          </div>

          {showSwitcher ? (
          <div className="flex gap-2 overflow-x-auto border-b border-[var(--color-line)] bg-navy-50 px-3 py-2">
            {books.map((item) => {
              const selected = item.id === file.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFileId(item.id)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                    selected ? "bg-navy-900 text-white" : "bg-white text-navy-800"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          ) : null}

          <div
            className="flex gap-1 overflow-x-auto border-b border-[var(--color-line)] px-3 py-2"
            role="tablist"
            aria-label="Hojas del libro"
          >
            {sheets.map((item, index) => {
              const selected = index === sheetIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setSheetIndex(index)}
                  className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold ${
                    selected
                      ? "bg-amber-100 text-navy-950"
                      : "text-ink-muted hover:bg-navy-50 hover:text-navy-900"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <div
            className={open ? "min-h-0 flex-1 overflow-auto" : "h-[28rem] overflow-auto sm:h-[32rem]"}
            aria-labelledby={titleId}
          >
            {loading ? (
              <p className="px-5 py-8 text-sm text-ink-muted">Cargando hojas…</p>
            ) : null}
            {error ? (
              <p className="px-5 py-8 text-sm text-ink-muted" role="alert">
                {error}
              </p>
            ) : null}
            {!loading && !error && sheet && sheet.rows.length === 0 ? (
              <p className="px-5 py-8 text-sm text-ink-muted">Esta hoja no tiene datos.</p>
            ) : null}
            {!loading && !error && sheet && sheet.name.toLowerCase() === "patentes" ? (
              <div className="border-b border-[var(--color-line)] bg-[#f7f4ef] px-4 py-4">
                <ImageLightbox
                  src="/assets/proteccion/abridor-ajustable.png"
                  alt="Explosionado del abridor ajustable, celda de la hoja patentes."
                  width={770}
                  height={670}
                  className="mx-auto max-w-xl"
                  imageClassName="mx-auto h-auto max-h-72 w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 576px"
                />
              </div>
            ) : null}
            {!loading && !error && sheet && sheet.rows.length > 0 ? (
              <table className="min-w-full border-collapse text-left text-[12px]">
                <caption className="sr-only">
                  {file.fileName}, hoja {sheet.name}
                </caption>
                <tbody>
                  {sheet.rows
                    .map((row) => row.map((cell) => (cell === "#VALUE!" ? "" : cell)))
                    .filter((row) => row.some((cell) => cell.trim() !== ""))
                    .map((row, rowIndex) => (
                    <tr key={`${sheet.name}-${rowIndex}`} className="border-b border-[var(--color-line)]">
                      {row.map((cell, cellIndex) => {
                        const Tag = rowIndex === 0 ? "th" : "td";
                        return (
                          <Tag
                            key={`${sheet.name}-${rowIndex}-${cellIndex}`}
                            scope={rowIndex === 0 ? "col" : undefined}
                            className={`max-w-[16rem] px-3 py-2 align-top font-normal leading-snug ${
                              rowIndex === 0
                                ? "sticky top-0 bg-navy-900 font-semibold text-white"
                                : rowIndex % 2 === 0
                                  ? "bg-white text-ink-soft"
                                  : "bg-[#f7f9fb] text-ink-soft"
                            }`}
                          >
                            {cell}
                          </Tag>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
  );
}

export function ExcelWindow() {
  return (
    <section id="excel" className="section-pad scroll-mt-32">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Archivos de Excel"
          title="Las hojas del segundo corte"
          description="Vigilancia y matrices, abiertas en el portafolio. Puedes recorrer las pestañas, pasar a pantalla completa o descargar el archivo original."
        />
        <div className="mt-8">
          <ExcelFrame />
        </div>
      </div>
    </section>
  );
}
