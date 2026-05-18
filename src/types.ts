export type CurrencyRate = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};

export type HistoricalRate = Pick<CurrencyRate, "code" | "amount" | "rate">;

export type CNBRates = {
  date: string;
  rates: CurrencyRate[];
};

export type YearRates = {
  year: number;
  dates: string[];
  ratesByDate: Record<string, HistoricalRate[]>;
};

export type SavedCard = {
  id: string;
  number: string;
  name: string;
  expiry: string;
  savedAt: number;
};

export type CardDraft = Omit<SavedCard, "id" | "savedAt">;

export type CardScanStep = "camera" | "review";

export type PhotoOutput = ReturnType<
  typeof import("react-native-vision-camera").usePhotoOutput
>;

export type RateRow = {
  key: string;
  code: string;
  label: string;
  rateNote: string;
  rateValue: string;
};

export type ButtonVariant = "primary" | "secondary" | "destructive";

export type FlexDirection = "row" | "column";

export type DialogButtonStyle = {
  bg: string;
  border: string;
  borderWidth: number;
  text: string;
};

export type Sign = 1 | -1 | 0;
export type SignProp = { sign: Sign };

export type RangeKey = "1W" | "1M" | "3M" | "6M" | "1Y";

export type HistoryEntry = {
  date: string;
  rate: number | null;
};

export type ParsedCard = {
  number: string;
  expiry: string;
  name: string;
};

export type TabParamList = {
  Rates: undefined;
  Exchange: undefined;
  History: undefined;
  Cards: undefined;
  Settings: undefined;
};
