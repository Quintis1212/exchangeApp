import { ActivityIndicator, View } from 'react-native';
import { colors, spacing } from '../theme/theme';
import { ChartSkeleton } from '../ui/primitives';
import RateChart from './RateChart';

type Props = {
  values: number[];
  isLoading: boolean;
  color: string;
};

export default function HistoryChart({ values, isLoading, color }: Props) {
  const showSkeleton = isLoading || values.length < 2;

  return (
    <View style={{ paddingHorizontal: spacing.base, paddingBottom: spacing.sm }}>
      {showSkeleton ? (
        <ChartSkeleton>
          {isLoading && <ActivityIndicator color={colors.primary} />}
        </ChartSkeleton>
      ) : (
        <RateChart values={values} color={color} />
      )}
    </View>
  );
}
