import { spacing } from '../theme/theme';
import { SecondaryText, BaseCard } from '../ui/primitives';

type Props = {
  fromCode: string;
  toCode: string;
  rate: number;
  date: string;
};

export default function ExchangeRateCard({ fromCode, toCode, rate, date }: Props) {
  return (
    <BaseCard style={{ padding: spacing.md, alignItems: 'center' }}>
      <SecondaryText>
        1 {fromCode} = {rate.toFixed(6)} {toCode}
      </SecondaryText>
      <SecondaryText>ČNB · {date}</SecondaryText>
    </BaseCard>
  );
}
