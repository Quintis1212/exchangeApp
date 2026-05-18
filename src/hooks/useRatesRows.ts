import { useMemo } from "react";
import { CZK_ENTRY } from "../constants";
import { CNBRates, CurrencyRate, RateRow } from "../types";
import { toRow, toRowAgainst } from "../utils";

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
    const against = toRowAgainst(base);
    return [
      against(CZK_ENTRY),
      ...data.rates.filter((r) => r.code !== base.code).map(against),
    ];
  }, [data, base]);

  return useMemo(() => {
    const result = query.trim().toLowerCase();
    return result ? rows.filter((row) => matchesQuery(row, result)) : rows;
  }, [rows, query]);
}
