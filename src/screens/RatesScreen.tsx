import { useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { ratesWithCZK } from "../utils";
import CurrencyPicker from "../components/CurrencyPicker";
import RateListItem from "../components/RateListItem";
import { useBase } from "../context/BaseCurrencyContext";
import { useCNBRates } from "../hooks/useCNBQueries";
import { useRatesRows } from "../hooks/useRatesRows";
import { fontSizes } from "../theme/theme";
import { RateRow } from "../types";
import { ErrorScreen } from "../ui/ErrorScreen";
import { LoadingScreen } from "../ui/LoadingScreen";
import {
  ScreenContainer,
  SearchBar,
  SecondaryText,
  Toolbar,
} from "../ui/primitives";

const keyExtractor = (item: RateRow) => item.key;

const renderItem: ListRenderItem<RateRow> = ({ item }) => (
  <RateListItem row={item} />
);

export default function RatesScreen() {
  const { data, isLoading, isError } = useCNBRates();
  const { base, setBase } = useBase();
  const [query, setQuery] = useState("");

  const rows = useRatesRows(data, base, query);

  if (isLoading || !data) return <LoadingScreen />;

  if (isError) {
    return <ErrorScreen message={"Failed to load rates.\nPull to retry."} />;
  }

  return (
    <ScreenContainer>
      <Toolbar>
        <SecondaryText style={{ flex: 1, fontSize: fontSizes.sm }}>
          ČNB · {data.date}
        </SecondaryText>
        <CurrencyPicker
          selected={base}
          rates={ratesWithCZK(data)}
          onSelect={setBase}
          prefix="Base"
        />
      </Toolbar>

      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search currency or country…"
        autoCorrect={false}
      />

      <FlatList
        data={rows}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        initialNumToRender={12}
        maxToRenderPerBatch={10}
      />
    </ScreenContainer>
  );
}
