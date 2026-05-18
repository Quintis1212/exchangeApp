import { Ionicons } from "@expo/vector-icons";
import { CurrencyRate, ParsedCard, RangeKey } from "./types";

export const STORAGE_KEYS = {
  cards: "@exchangeapp/cards",
  baseCurrency: "@exchangeapp/base",
};

export const FALLBACK_CURRENCY_CODE = "EUR";

export const CZK_ENTRY: CurrencyRate = {
  code: "CZK",
  currency: "koruna",
  country: "Czech Republic",
  amount: 1,
  rate: 1,
};

export const ONE_HOUR_MS = 60 * 60 * 1000;

export const CNB_DAILY_URL =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export const CNB_YEAR_URL = `https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/year.txt?year= `;

export const CHART_PADDING_Y = 8;

export const SCAN_RETRY_DELAY_MS = 300;
export const MAX_CONSECUTIVE_ERRORS = 5;

export const RANGE_KEYS: readonly RangeKey[] = ["1W", "1M", "3M", "6M", "1Y"];

export const RANGES: Record<RangeKey, number> = {
  "1W": 7,
  "1M": 30,
  "3M": 90,
  "6M": 180,
  "1Y": 365,
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const CARD_NUMBER_RE = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/;
export const EXPIRY_RE = /\b(0[1-9]|1[0-2])[\/\-](\d{2}|\d{4})\b/;
export const NAME_RE = /^[A-Z]{2,}\s+[A-Z]{2,}(\s+[A-Z]{2,})?$/m;

export const EMPTY_PARSED_CARD: ParsedCard = {
  number: "",
  expiry: "",
  name: "",
};

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
