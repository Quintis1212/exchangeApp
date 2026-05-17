import { useCallback, useMemo, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import CurrencyPicker from "../components/CurrencyPicker";
import HistoryListHeader from "../components/HistoryListHeader";
import HistoryRowItem from "../components/HistoryRowItem";
import { useBase } from "../context/BaseCurrencyContext";
import { useCNBRates } from "../hooks/useCNBQueries";
import { useHistoryEntries } from "../hooks/useHistoryEntries";
import { useHistoryStats } from "../hooks/useHistoryStats";
import { spacing } from "../theme/theme";
import { CurrencyRate, HistoryEntry, RangeKey } from "../types";
import { ScreenContainer, SecondaryText, Toolbar } from "../ui/primitives";
import { defaultCounterCurrency, ratesWithCZK } from "../utils";

const listContentContainerStyle = { paddingBottom: spacing.base };
const keyExtractor = (item: HistoryEntry) => item.date;

export default function HistoryScreen() {
  const { base, setBase } = useBase();
  const { data: todayData } = useCNBRates();

  const [fromCurrency, setFromCurrency] = useState<CurrencyRate | null>(null);
  const [range, setRange] = useState<RangeKey>("1W");

  const displayCurrency = fromCurrency ?? defaultCounterCurrency(todayData);
  const { entriesAsc, isLoading } = useHistoryEntries(
    displayCurrency,
    base,
    range,
  );
  const {
    entriesDesc,
    chartValues,
    latestRate,
    periodChangePercentage,
    periodSign,
  } = useHistoryStats(entriesAsc);

  const allRates = useMemo(
    () => (todayData ? ratesWithCZK(todayData) : []),
    [todayData],
  );

  const ratesExcludingBase = useMemo(
    () => allRates.filter((r) => r.code !== base.code),
    [allRates, base.code],
  );
  const ratesExcludingDisplay = useMemo(
    () => allRates.filter((r) => r.code !== displayCurrency.code),
    [allRates, displayCurrency.code],
  );

  const renderItem = useCallback<ListRenderItem<HistoryEntry>>(
    ({ item, index }) => (
      <HistoryRowItem
        entry={item}
        previous={entriesDesc[index + 1]}
        baseCode={base.code}
      />
    ),
    [entriesDesc, base.code],
  );

  return (
    <ScreenContainer>
      <Toolbar>
        <CurrencyPicker
          selected={displayCurrency}
          rates={ratesExcludingBase}
          onSelect={setFromCurrency}
        />
        <SecondaryText>/</SecondaryText>
        <CurrencyPicker
          selected={base}
          rates={ratesExcludingDisplay}
          onSelect={setBase}
        />
        <SecondaryText>— rate history</SecondaryText>
      </Toolbar>

      <FlatList
        data={entriesDesc}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <HistoryListHeader
            fromCode={displayCurrency.code}
            baseCode={base.code}
            latestRate={latestRate}
            periodChangePercentage={periodChangePercentage}
            periodSign={periodSign}
            chartValues={chartValues}
            isLoading={isLoading}
            range={range}
            onRangeChange={setRange}
          />
        }
        renderItem={renderItem}
        contentContainerStyle={listContentContainerStyle}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
      />
    </ScreenContainer>
  );
}
