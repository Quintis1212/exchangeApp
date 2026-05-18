import TextRecognition from "@react-native-ml-kit/text-recognition";
import {
  CARD_NUMBER_RE,
  CZK_ENTRY,
  EXPIRY_RE,
  FALLBACK_CURRENCY_CODE,
  MONTHS,
  NAME_RE,
} from "./constants";
import { colors } from "./theme/theme";
import {
  CardDraft,
  CNBRates,
  CurrencyRate,
  HistoricalRate,
  ParsedCard,
  PhotoOutput,
  RateRow,
  Sign,
  YearRates,
} from "./types";

export const parseCNBText = (text: string): CNBRates => {
  const lines = text.trim().split("\n");
  const date = lines[0].split("#")[0].trim();

  const rates: CurrencyRate[] = lines
    .slice(2)
    .filter(Boolean)
    .map((line) => {
      const [country, currency, amount, code, rate] = line.split("|");
      return {
        country: country.trim(),
        currency: currency.trim(),
        amount: parseInt(amount.trim(), 10),
        code: code.trim(),
        rate: parseFloat(rate.trim()),
      };
    });

  return { date, rates };
};

export const parseCNBYearText = (text: string, year: number): YearRates => {
  const [header, ...dataLines] = text.trim().split("\n");
  const cols = header
    .split("|")
    .slice(1)
    .map((h) => ({
      code: h.trim().split(" ")[1],
      amount: parseInt(h, 10),
    }));
  const ratesByDate: Record<string, HistoricalRate[]> = {};
  const dates: string[] = [];
  for (const line of dataLines) {
    const parts = line.split("|");
    const date = parts[0].trim();
    if (date === "") continue;
    ratesByDate[date] = cols.flatMap((col, c) => {
      const rate = parseFloat(parts[c + 1] ?? "");
      return isNaN(rate) ? [] : [{ ...col, rate }];
    });
    dates.push(date);
  }
  return { year, dates, ratesByDate };
};

export const getUnitRate = (rate: HistoricalRate): number =>
  rate.rate / rate.amount;

export const parseDDMMYYYY = (date: string): Date => {
  const [day, month, year] = date.split(".").map(Number);
  return new Date(year, month - 1, day);
};

export const computeRate = (
  dayRates: HistoricalRate[],
  displayCurrency: CurrencyRate,
  base: CurrencyRate,
): number | null => {
  const fromRate = dayRates.find((rate) => rate.code === displayCurrency.code);
  if (!fromRate) return null;
  if (base.code === "CZK") return getUnitRate(fromRate);
  const baseRate = dayRates.find((rate) => rate.code === base.code);
  if (!baseRate) return null;
  const baseUnit = getUnitRate(baseRate);
  return baseUnit ? getUnitRate(fromRate) / baseUnit : null;
};

export const convert = (
  amount: number,
  from: CurrencyRate,
  to: CurrencyRate,
): number => (amount * getUnitRate(from)) / getUnitRate(to);

export const ratesWithCZK = (data: CNBRates): CurrencyRate[] => [
  CZK_ENTRY,
  ...data.rates,
];

export const defaultCounterCurrency = (
  data: CNBRates | undefined,
): CurrencyRate =>
  data?.rates.find((rate) => rate.code === FALLBACK_CURRENCY_CODE) ?? CZK_ENTRY;

export const fmtDate = (ddmmyyyy: string, now: Date = new Date()): string => {
  const d = parseDDMMYYYY(ddmmyyyy);
  const month = MONTHS[d.getMonth()];
  return d.getFullYear() === now.getFullYear()
    ? `${d.getDate()} ${month}`
    : `${d.getDate()} ${month} ${d.getFullYear()}`;
};

export const getSign = (n: number | null): Sign =>
  n === null ? 0 : n > 0 ? 1 : n < 0 ? -1 : 0;

export const colorForSign = (sign: Sign) =>
  sign === 1
    ? colors.positive
    : sign === -1
      ? colors.negative
      : colors.textSecondary;

export const bgForSign = (sign: Sign) =>
  sign === 1
    ? colors.positiveTint
    : sign === -1
      ? colors.negativeTint
      : "transparent";

export const arrowForSign = (sign: Sign) =>
  sign === 1 ? "▲" : sign === -1 ? "▼" : "—";

export const parseCardText = (text: string): ParsedCard => ({
  number: text.match(CARD_NUMBER_RE)?.[0].replace(/[\s-]+/g, " ") ?? "",
  expiry: text.match(EXPIRY_RE)?.[0] ?? "",
  name: text.match(NAME_RE)?.[0] ?? "",
});

export const toCardDraft = (card: ParsedCard): CardDraft => ({
  number: card.number.replace(/\s/g, ""),
  name: card.name.trim(),
  expiry: card.expiry.trim(),
});

export const isCardValid = (card: ParsedCard): boolean =>
  Boolean(card.number.trim() && card.expiry.trim() && card.name.trim());

export const mergeCard = (prev: ParsedCard, next: ParsedCard): ParsedCard => ({
  number: next.number || prev.number,
  expiry: next.expiry || prev.expiry,
  name: next.name || prev.name,
});

export const scanFrame = async (
  photoOutput: PhotoOutput,
): Promise<ParsedCard> => {
  const file = await photoOutput.capturePhotoToFile({ flashMode: "off" }, {});
  const result = await TextRecognition.recognize(`file://${file.filePath}`);
  return parseCardText(result.blocks.map((block) => block.text).join("\n"));
};

export const maskCardNumber = (num: string) =>
  `**** **** **** ${num.slice(-4)}`;

export const newId = (): string => crypto.randomUUID();

export const formatSavedDate = (timestamp: number) =>
  new Date(timestamp).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export const toRow = (row: CurrencyRate): RateRow => ({
  key: row.code,
  code: row.code,
  label: `${row.country} · ${row.currency}`,
  rateNote: `${row.amount} ${row.code} =`,
  rateValue: `${row.rate.toFixed(3)} CZK`,
});

export const toRowAgainst =
  (base: CurrencyRate) =>
  (row: CurrencyRate): RateRow => ({
    key: row.code,
    code: row.code,
    label: `${row.country} · ${row.currency}`,
    rateNote: `${row.amount} ${row.code} =`,
    rateValue: `${convert(row.amount, row, base).toFixed(4)} ${base.code}`,
  });
