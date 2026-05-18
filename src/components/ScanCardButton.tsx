import { useState } from 'react';
import { spacing } from '../theme/theme';
import { CardDraft } from '../types';
import { PrimaryButton, PrimaryButtonText } from '../ui/primitives';
import CardScanModal from './CardScanModal';

type Props = {
  onSave: (draft: CardDraft) => boolean;
};

const triggerStyle = { margin: spacing.base };

export default function ScanCardButton({ onSave }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <PrimaryButton onPress={() => setVisible(true)} style={triggerStyle}>
        <PrimaryButtonText>+ Scan Card</PrimaryButtonText>
      </PrimaryButton>
      <CardScanModal
        visible={visible}
        onClose={() => setVisible(false)}
        onSave={onSave}
      />
    </>
  );
}
