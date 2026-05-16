import { Ionicons } from "@expo/vector-icons";

export const STORAGE_KEYS = {
  cards: "@exchangeapp/cards",
  baseCurrency: "@exchangeapp/base",
};

export const FALLBACK_CURRENCY_CODE = "EUR";

export const ONE_HOUR_MS = 60 * 60 * 1000;

export const INFO_ROWS = [
  { label: "API", value: "cnb.cz" },
  { label: "App version", value: "1.0.0" },
];
export const ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  Rates: "bar-chart-outline",
  Exchange: "repeat-outline",
  History: "time-outline",
  Cards: "card-outline",
  Settings: "settings-outline",
};
