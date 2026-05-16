import { View } from 'react-native';
import { RangeKey } from '../hooks/useHistoryEntries';
import { spacing } from '../theme/theme';
import {
  Badge, BadgeText, HeadingText, SecondaryText,
} from '../ui/primitives';
import { Sign } from '../types';
import { arrowForSign, bgForSign, colorForSign } from '../utils';

type Props = {
  fromCode: string;
  baseCode: string;
  latestRate: number | null;
  periodChangePercentage: number | null;
  periodSign: Sign;
  range: RangeKey;
};

export default function HistorySummary({
  fromCode, baseCode, latestRate, periodChangePercentage, periodSign, range,
}: Props) {
  return (
    <View style={{ padding: spacing.base, paddingBottom: spacing.sm }}>
      <SecondaryText>1 {fromCode} in {baseCode}</SecondaryText>
      <HeadingText>
        {latestRate !== null ? `${latestRate.toFixed(4)} ${baseCode}` : '—'}
      </HeadingText>
      {periodChangePercentage !== null && (
        <Badge style={{ backgroundColor: bgForSign(periodSign) }}>
          <BadgeText style={{ color: colorForSign(periodSign) }}>
            {arrowForSign(periodSign)} {Math.abs(periodChangePercentage).toFixed(2)}% ({range})
          </BadgeText>
        </Badge>
      )}
    </View>
  );
}
