import { PrimaryButton, PrimaryButtonText } from '../ui/primitives';
import {
  FieldLabel, Form, FormInput, SecondaryButton, SecondaryButtonText,
} from './CardScanModal.styled';
import { ParsedCard } from '../utils';

type Props = {
  card: ParsedCard;
  onChange: (card: ParsedCard) => void;
  onSave: () => void;
  onRescan: () => void;
};

export default function CardScanReviewStep({ card, onChange, onSave, onRescan }: Props) {
  const update = (field: keyof ParsedCard) => (value: string) =>
    onChange({ ...card, [field]: value });

  return (
    <Form>
      <FieldLabel>Card Number</FieldLabel>
      <FormInput
        value={card.number}
        onChangeText={update('number')}
        placeholder="0000 0000 0000 0000"
        keyboardType="numeric"
        maxLength={23}
      />

      <FieldLabel>Cardholder Name</FieldLabel>
      <FormInput
        value={card.name}
        onChangeText={update('name')}
        placeholder="FULL NAME"
        autoCapitalize="characters"
      />

      <FieldLabel>Expiry (MM/YY)</FieldLabel>
      <FormInput
        value={card.expiry}
        onChangeText={update('expiry')}
        placeholder="MM/YY"
        keyboardType="numeric"
        maxLength={5}
      />

      <PrimaryButton onPress={onSave}>
        <PrimaryButtonText>Save Card</PrimaryButtonText>
      </PrimaryButton>
      <SecondaryButton onPress={onRescan}>
        <SecondaryButtonText>Re-scan</SecondaryButtonText>
      </SecondaryButton>
    </Form>
  );
}
