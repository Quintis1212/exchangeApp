import { Platform } from "react-native";
import { ratesWithCZK } from "../utils";
import AmountField from "../components/AmountField";
import AppDialog from "../components/AppDialog";
import ExchangeRateCard from "../components/ExchangeRateCard";
import ExchangeStatusOverlay from "../components/ExchangeStatusOverlay";
import { useCNBRates } from "../hooks/useCNBQueries";
import { useExchange } from "../hooks/useExchange";
import { useExchangeFlow } from "../hooks/useExchangeFlow";
import { useCards } from "../stores/CardsStore";
import { spacing } from "../theme/theme";
import { ErrorScreen } from "../ui/ErrorScreen";
import { LoadingScreen } from "../ui/LoadingScreen";
import {
  KeyboardScreen,
  PrimaryButton,
  PrimaryButtonText,
  ScreenContent,
  SwapButton,
  SwapIcon,
} from "../ui/primitives";

export default function ExchangeScreen() {
  const { data, isLoading, isError } = useCNBRates();
  const cards = useCards();
  const exchange = useExchange(data);
  const { status, noCardDialog, startExchange, dismissNoCard, dismissStatus } =
    useExchangeFlow({ hasCards: cards.length > 0 });

  if (isLoading || !data) return <LoadingScreen />;
  if (isError) return <ErrorScreen message="Failed to load rates." />;

  const {
    fromCurrency,
    setFromCurrency,
    setToCurrency,
    toRate,
    fromAmount,
    setFromAmount,
    toAmount,
    exchangeRate,
    swap,
  } = exchange;
  const fromCode = fromCurrency.code;
  const toCode = toRate.code;
  const allRates = ratesWithCZK(data);

  return (
    <KeyboardScreen behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScreenContent>
        <AmountField
          mode="input"
          label="From"
          value={fromAmount}
          onChangeText={setFromAmount}
          selected={fromCurrency}
          rates={allRates}
          onSelectCurrency={setFromCurrency}
        />

        <SwapButton onPress={swap} activeOpacity={0.7}>
          <SwapIcon>⇅</SwapIcon>
        </SwapButton>

        <AmountField
          mode="display"
          label="To"
          value={toAmount}
          selected={toRate}
          rates={allRates}
          onSelectCurrency={setToCurrency}
        />

        {exchangeRate !== null && (
          <ExchangeRateCard
            fromCode={fromCode}
            toCode={toCode}
            rate={exchangeRate}
            date={data.date}
          />
        )}
      </ScreenContent>

      <PrimaryButton
        onPress={startExchange}
        activeOpacity={0.8}
        style={{ marginHorizontal: spacing.base, marginBottom: spacing.base }}
      >
        <PrimaryButtonText>⇄ Exchange</PrimaryButtonText>
      </PrimaryButton>

      <AppDialog
        visible={noCardDialog}
        title="No card added"
        message="Please go to the Cards tab and scan or add a card before making an exchange."
        buttons={[{ text: "Got it" }]}
        onClose={dismissNoCard}
      />

      <ExchangeStatusOverlay
        status={status}
        summary={`${fromAmount} ${fromCode} → ${toAmount} ${toCode}`}
        onDone={dismissStatus}
      />
    </KeyboardScreen>
  );
}
