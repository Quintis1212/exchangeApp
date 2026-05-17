import { spacing } from "../theme/theme";
import { RangeKey, Sign } from "../types";
import { Divider } from "../ui/primitives";
import HistoryChart from "./HistoryChart";
import HistorySummary from "./HistorySummary";
import RangeTabBar from "./RangeTabBar";

type Props = {
  fromCode: string;
  baseCode: string;
  latestRate: number | null;
  periodChangePercentage: number | null;
  periodSign: Sign;
  chartValues: number[];
  isLoading: boolean;
  range: RangeKey;
  onRangeChange: (range: RangeKey) => void;
};

export default function HistoryListHeader({
  fromCode,
  baseCode,
  latestRate,
  periodChangePercentage,
  chartValues,
  isLoading,
  periodSign,
  range,
  onRangeChange,
}: Props) {
  return (
    <>
      <HistorySummary
        fromCode={fromCode}
        baseCode={baseCode}
        latestRate={latestRate}
        periodChangePercentage={periodChangePercentage}
        periodSign={periodSign}
        range={range}
      />
      <HistoryChart
        values={chartValues}
        isLoading={isLoading}
        periodSign={periodSign}
      />
      <RangeTabBar value={range} onChange={onRangeChange} />
      <Divider style={{ marginBottom: spacing.sm }} />
    </>
  );
}
