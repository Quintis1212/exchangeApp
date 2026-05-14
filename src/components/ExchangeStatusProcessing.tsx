import { ActivityIndicator } from 'react-native';
import { colors, spacing } from '../theme/theme';
import { OverlayMsg, OverlayTitle } from './ExchangeStatusOverlay.styled';

export default function ExchangeStatusProcessing() {
  return (
    <>
      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={{ marginBottom: spacing.base }}
      />
      <OverlayTitle>Processing…</OverlayTitle>
      <OverlayMsg>Please wait while we process your exchange.</OverlayMsg>
    </>
  );
}
