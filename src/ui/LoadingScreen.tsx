import { ActivityIndicator } from 'react-native';
import { colors } from '../theme/theme';
import { CenteredView } from './primitives';

export const LoadingScreen = () => (
  <CenteredView>
    <ActivityIndicator size="large" color={colors.primary} />
  </CenteredView>
);
