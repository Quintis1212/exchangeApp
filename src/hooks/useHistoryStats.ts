import { useMemo } from "react";
import { HistoryEntry, Sign } from "../types";
import { getSign } from "../utils";

type HistoryStats = {
  entriesDesc: HistoryEntry[];
  chartValues: number[];
  latestRate: number | null;
  periodChange: number | null;
  periodChangePercentage: number | null;
  periodSign: Sign;
};

export const useHistoryStats = (entriesAsc: HistoryEntry[]): HistoryStats => {
  const entriesDesc = useMemo(() => entriesAsc.toReversed(), [entriesAsc]);

  const chartValues = useMemo(
    () => entriesAsc.flatMap((e) => (e.rate !== null ? [e.rate] : [])),
    [entriesAsc],
  );

  const latestRate = entriesDesc.find((e) => e.rate !== null)?.rate ?? null;
  const oldestRate = entriesAsc.find((e) => e.rate !== null)?.rate ?? null;
  const periodChange =
    latestRate !== null && oldestRate !== null ? latestRate - oldestRate : null;
  const periodChangePercentage =
    periodChange !== null && oldestRate
      ? (periodChange / oldestRate) * 100
      : null;
  const periodSign = getSign(periodChange);

  return {
    entriesDesc,
    chartValues,
    latestRate,
    periodChange,
    periodChangePercentage,
    periodSign,
  };
};
