import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { colors, fontSizes, fontWeights, radius, spacing } from '../theme/theme';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.base}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const CloseButton = styled.TouchableOpacity`
  padding: ${spacing.sm}px;
`;

export const CloseText = styled.Text`
  font-size: ${fontSizes.bodyLg}px;
  color: ${colors.textSecondary};
`;

export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${spacing.base}px;
`;

export const Hint = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${fontSizes.body}px;
  text-align: center;
  margin-bottom: ${spacing.base}px;
`;

export const CameraWrapper = styled.View`
  flex: 1;
  position: relative;
`;

export const CameraOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const CardFrame = styled.View`
  width: 300px;
  height: 190px;
  border-width: 2px;
  border-color: ${colors.primary};
  border-radius: ${radius.md}px;
  margin-bottom: ${spacing.base}px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  border-radius: ${radius.md}px;
  border-width: 1px;
  border-color: ${colors.primary};
  padding: 14px ${spacing.xl}px;
  align-items: center;
  margin-top: ${spacing.sm}px;
`;

export const SecondaryButtonText = styled.Text`
  color: ${colors.primary};
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes.bodyLg}px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: spacing.base },
})``;

export const FieldLabel = styled.Text`
  font-size: ${fontSizes.sm}px;
  font-weight: ${fontWeights.semibold};
  color: ${colors.textSecondary};
  margin-top: ${spacing.base}px;
  margin-bottom: ${spacing.xs}px;
`;

export const FormInput = styled(TextInput).attrs({
  placeholderTextColor: colors.textSecondary,
})`
  background-color: ${colors.surface};
  border-radius: ${radius.md}px;
  padding: ${spacing.base}px;
  color: ${colors.textPrimary};
  font-size: ${fontSizes.body}px;
  border-width: 1px;
  border-color: ${colors.border};
`;
