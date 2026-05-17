import { ActivityIndicator, View } from "react-native";
import { colors, spacing } from "../theme/theme";
import { Sign } from "../types";
import { ChartSkeleton } from "../ui/primitives";
import RateChart from "./RateChart";

type Props = {
  values: number[];
  isLoading: boolean;
  periodSign: Sign;
};

export default function HistoryChart({ values, isLoading, periodSign }: Props) {
  const showSkeleton = isLoading || values.length < 2;
  const trendColor =
    periodSign === 1
      ? colors.positive
      : periodSign === -1
        ? colors.negative
        : colors.primary;

  return (
    <View
      style={{ paddingHorizontal: spacing.base, paddingBottom: spacing.sm }}
    >
      {showSkeleton ? (
        <ChartSkeleton>
          {isLoading && <ActivityIndicator color={colors.primary} />}
        </ChartSkeleton>
      ) : (
        <RateChart values={values} color={trendColor} />
      )}
    </View>
  );
}
