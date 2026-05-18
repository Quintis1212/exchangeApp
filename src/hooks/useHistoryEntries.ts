import { useMemo } from "react";
import { RANGES } from "../constants";
import { CurrencyRate, HistoryEntry, RangeKey } from "../types";
import { computeRate, parseDDMMYYYY } from "../utils";
import { useCNBYear } from "./useCNBQueries";

export const useHistoryEntries = (
  displayCurrency: CurrencyRate,
  base: CurrencyRate,
  range: RangeKey,
): { entriesAsc: HistoryEntry[]; isLoading: boolean } => {
  const currentYear = new Date().getFullYear();
  const { data: thisYear, isLoading: loadingThis } = useCNBYear(currentYear);
  const { data: lastYear, isLoading: loadingLast } = useCNBYear(
    currentYear - 1,
  );
  const { data: twoYearsAgo, isLoading: loadingTwoYears } = useCNBYear(
    currentYear - 2,
  );

  const isLoading =
    loadingThis || loadingLast || (range === "1Y" && loadingTwoYears);

  const entriesAsc = useMemo<HistoryEntry[]>(() => {
    const allDates = Array.from(
      new Set([
        ...(twoYearsAgo?.dates ?? []),
        ...(lastYear?.dates ?? []),
        ...(thisYear?.dates ?? []),
      ]),
    );
    const ratesByDate = {
      ...(twoYearsAgo?.ratesByDate ?? {}),
      ...(lastYear?.ratesByDate ?? {}),
      ...(thisYear?.ratesByDate ?? {}),
    };

    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - RANGES[range]);
    cutoff.setHours(0, 0, 0, 0);

    return allDates
      .filter((date) => parseDDMMYYYY(date) >= cutoff)
      .map((date) => ({
        date,
        rate: computeRate(ratesByDate[date] ?? [], displayCurrency, base),
      }));
  }, [twoYearsAgo, lastYear, thisYear, range, displayCurrency, base]);

  return { entriesAsc, isLoading };
};
