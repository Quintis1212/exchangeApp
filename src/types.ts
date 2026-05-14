export type CurrencyRate = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};

export type CNBRates = {
  date: string;
  rates: CurrencyRate[];
};

export type YearRates = {
  year: number;
  dates: string[];
  ratesByDate: Record<string, CurrencyRate[]>;
};

export type SavedCard = {
  id: string;
  number: string;
  name: string;
  expiry: string;
  savedAt: number;
};

export type RateRow = {
  key: string;
  code: string;
  label: string;
  rateNote: string;
  rateValue: string;
};

export type ButtonVariant = 'primary' | 'secondary' | 'destructive';

export type FlexDirection = 'row' | 'column';
