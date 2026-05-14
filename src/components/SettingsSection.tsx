import { ReactNode } from 'react';
import { View } from 'react-native';
import { spacing } from '../theme/theme';
import { SectionLabel, SurfaceCard } from '../ui/primitives';

type Props = {
  label: string;
  children: ReactNode;
};

export default function SettingsSection({ label, children }: Props) {
  return (
    <View
      style={{
        marginHorizontal: spacing.base,
        marginTop: spacing.base,
        gap: spacing.sm,
      }}
    >
      <SectionLabel>{label}</SectionLabel>
      <SurfaceCard>{children}</SurfaceCard>
    </View>
  );
}
