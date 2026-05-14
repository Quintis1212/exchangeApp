import { memo } from 'react';
import { spacing } from '../theme/theme';
import { CurrencyRate } from '../types';
import { PrimaryText, SecondaryText } from '../ui/primitives';
import { Check, PickerRow } from './CurrencyPickerModal.styled';

type Props = {
  rate: CurrencyRate;
  isSelected: boolean;
  onPick: (rate: CurrencyRate) => void;
};

function CurrencyPickerRow({ rate, isSelected, onPick }: Props) {
  return (
    <PickerRow onPress={() => onPick(rate)} activeOpacity={0.7}>
      <PrimaryText>{rate.code}</PrimaryText>
      <SecondaryText style={{ flex: 1, marginLeft: spacing.sm }}>
        {rate.country} · {rate.currency}
      </SecondaryText>
      {isSelected && <Check>✓</Check>}
    </PickerRow>
  );
}

export default memo(CurrencyPickerRow);
