interface DataTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
  highlightColumn?: number;
  highlightRow?: string;
}

export function DataTable({ headers, rows, caption, highlightColumn, highlightRow }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-navy-950 text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={`${header}-${index}`}
                scope="col"
                className={`px-4 py-3 font-medium ${
                  index === highlightColumn ? "bg-amber-500 text-navy-950" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const rowActive = highlightRow !== undefined && row[0] === highlightRow;
            return (
              <tr
                key={row.join("|")}
                className={`border-t border-[var(--color-line)] ${
                  rowActive ? "bg-amber-50 shadow-[inset_3px_0_0_#f59e0b]" : "even:bg-stone-50"
                }`}
              >
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={`px-4 py-3 align-top leading-relaxed text-[var(--color-ink)] ${
                      index === 0 ? "font-medium" : ""
                    } ${index === highlightColumn ? "bg-amber-50 font-semibold text-navy-950" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
