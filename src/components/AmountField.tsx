import { useState } from 'react';
import { CurrencyRate } from '../types';
import {
  AmountInput, CurrencyButton, CurrencyButtonText, InputCard, ResultText, SectionLabel,
} from '../ui/primitives';
import CurrencyPickerModal from './CurrencyPickerModal';

type CommonProps = {
  label: string;
  selected: CurrencyRate;
  rates: CurrencyRate[];
  onSelectCurrency: (rate: CurrencyRate) => void;
};

type Props =
  | (CommonProps & {
      mode: 'input';
      value: string;
      onChangeText: (value: string) => void;
    })
  | (CommonProps & {
      mode: 'display';
      value: string;
    });

export default function AmountField(props: Props) {
  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <>
      <SectionLabel>{props.label}</SectionLabel>
      <InputCard>
        {props.mode === 'input' ? (
          <AmountInput
            value={props.value}
            onChangeText={props.onChangeText}
            keyboardType="decimal-pad"
            placeholder="0"
          />
        ) : (
          <ResultText numberOfLines={1}>{props.value || '—'}</ResultText>
        )}
        <CurrencyButton onPress={() => setPickerVisible(true)}>
          <CurrencyButtonText>{props.selected.code} ▾</CurrencyButtonText>
        </CurrencyButton>
      </InputCard>
      <CurrencyPickerModal
        visible={pickerVisible}
        rates={props.rates}
        selected={props.selected}
        onSelect={props.onSelectCurrency}
        onClose={() => setPickerVisible(false)}
      />
    </>
  );
}
