import { Text } from 'react-native';
import { spacing } from '../theme/theme';
import { CenteredView, PrimaryText, SecondaryText } from '../ui/primitives';

export default function CardsEmptyState() {
  return (
    <CenteredView>
      <Text style={{ fontSize: 48, marginBottom: spacing.sm }}>💳</Text>
      <PrimaryText style={{ marginBottom: spacing.xs }}>No cards saved</PrimaryText>
      <SecondaryText>Tap &ldquo;Scan Card&rdquo; to add your first card</SecondaryText>
    </CenteredView>
  );
}
