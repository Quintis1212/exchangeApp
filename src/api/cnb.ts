import { CNB_DAILY_URL, CNB_YEAR_URL } from "../constants";
import { CNBRates, YearRates } from "../types";
import { parseCNBText, parseCNBYearText } from "../utils";

export const fetchCNBRates = async (): Promise<CNBRates> => {
  try {
    const res = await fetch(CNB_DAILY_URL);
    if (!res.ok) throw new Error("Failed to fetch ČNB rates");
    const text = await res.text();
    return parseCNBText(text);
  } catch (error) {
    console.error("Error fetching CNB rates:", error);
    throw new Error("Failed to fetch ČNB rates");
  }
};

export const fetchCNBYear = async (year: number): Promise<YearRates> => {
  try {
    const res = await fetch(CNB_YEAR_URL + year);
    if (!res.ok) throw new Error(`Failed to fetch ČNB year ${year}`);
    const text = await res.text();
    return parseCNBYearText(text, year);
  } catch (error) {
    console.error(`Error fetching CNB year ${year}:`, error);
    throw new Error(`Failed to fetch ČNB year ${year}`);
  }
};
