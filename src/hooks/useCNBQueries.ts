import { useQuery } from "@tanstack/react-query";
import { fetchCNBRates, fetchCNBYear } from "../api/cnb";
import { ONE_HOUR_MS } from "../constants";

export const useCNBRates = () =>
  useQuery({
    queryKey: ["cnbRates"],
    queryFn: fetchCNBRates,
    staleTime: ONE_HOUR_MS,
  });

export const useCNBYear = (year: number) =>
  useQuery({
    queryKey: ["cnbYear", year],
    queryFn: () => fetchCNBYear(year),
    staleTime: ONE_HOUR_MS,
  });
