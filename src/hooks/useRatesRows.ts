import { useMemo } from "react";
import { CNBRates, CurrencyRate, RateRow } from "../types";
import { czkRowAgainst, toRow, toRowAgainst } from "../utils";

const matchesQuery = (row: RateRow, query: string) =>
  row.code.toLowerCase().includes(query) ||
  row.label.toLowerCase().includes(query);

export function useRatesRows(
  data: CNBRates | undefined,
  base: CurrencyRate,
  query: string,
) {
  const rows = useMemo<RateRow[]>(() => {
    if (!data) return [];
    if (base.code === "CZK") return data.rates.map(toRow);
    return [
      czkRowAgainst(base),
      ...data.rates.filter((r) => r.code !== base.code).map(toRowAgainst(base)),
    ];
  }, [data, base]);

  return useMemo(() => {
    const result = query.trim().toLowerCase();
    return result ? rows.filter((row) => matchesQuery(row, result)) : rows;
  }, [rows, query]);
}
