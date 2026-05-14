import { SectionLabel } from '../ui/primitives';
import {
  AmountInput, CurrencyButton, CurrencyButtonText, InputCard, ResultText,
} from '../ui/primitives';

type CommonProps = {
  label: string;
  currencyCode: string;
  onPickCurrency: () => void;
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
        <CurrencyButton onPress={props.onPickCurrency}>
          <CurrencyButtonText>{props.currencyCode} ▾</CurrencyButtonText>
        </CurrencyButton>
      </InputCard>
    </>
  );
}
