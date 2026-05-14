import { KeyboardAvoidingView, TextInput } from "react-native";
import styled from "styled-components/native";
import {
  colors,
  fontSizes,
  fontWeights,
  radius,
  spacing,
} from "../theme/theme";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const KeyboardScreen = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${colors.background};
`;

export const ScreenContent = styled.View`
  flex: 1;
  padding: ${spacing.base}px;
  justify-content: center;
  gap: ${spacing.base}px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
`;

export const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${spacing.sm}px;
  padding: ${spacing.sm}px ${spacing.base}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const ModalBackdrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  padding: ${spacing.xl}px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${colors.border};
  margin: 0 ${spacing.base}px;
`;

export const BaseCard = styled.View`
  background-color: ${colors.surface};
  border-radius: ${radius.md}px;
  border-width: 1px;
  border-color: ${colors.border};
  overflow: hidden;
`;

export const ListCard = styled(BaseCard)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px ${spacing.base}px;
  margin: 5px ${spacing.base}px;
`;

export const InputCard = styled(BaseCard)`
  flex-direction: row;
  align-items: center;
  padding: 0 ${spacing.base}px;
`;

export const ChartSkeleton = styled.View`
  height: 160px;
  background-color: ${colors.surface};
  border-radius: ${radius.md}px;
  justify-content: center;
  align-items: center;
`;

export const SectionLabel = styled.Text`
  font-size: ${fontSizes.xs}px;
  font-weight: ${fontWeights.semibold};
  color: ${colors.textSecondary};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const PrimaryText = styled.Text`
  font-size: ${fontSizes.title}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
`;

export const SecondaryText = styled.Text`
  font-size: ${fontSizes.caption}px;
  color: ${colors.textSecondary};
`;

export const AccentText = styled.Text`
  font-size: ${fontSizes.title}px;
  font-weight: ${fontWeights.semibold};
  color: ${colors.primary};
`;

export const HeadingText = styled.Text`
  font-size: 32px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
`;

export const ResultText = styled.Text`
  flex: 1;
  font-size: 28px;
  font-weight: ${fontWeights.bold};
  color: ${colors.primary};
  padding: ${spacing.base}px 0;
`;

export const ErrorText = styled.Text`
  color: ${colors.error};
  font-size: ${fontSizes.body}px;
  text-align: center;
  padding: 0 ${spacing.xl}px;
`;

export const AmountInput = styled(TextInput).attrs({
  placeholderTextColor: colors.textSecondary,
})`
  flex: 1;
  font-size: 28px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
  padding: ${spacing.base}px 0;
`;

export const SearchBar = styled(TextInput).attrs({
  placeholderTextColor: colors.textSecondary,
})`
  margin: ${spacing.sm}px ${spacing.base}px;
  padding: ${spacing.sm}px ${spacing.base}px;
  background-color: ${colors.surface};
  border-radius: ${radius.md}px;
  border-width: 1px;
  border-color: ${colors.border};
  color: ${colors.textPrimary};
  font-size: ${fontSizes.body}px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: ${radius.md}px;
  padding: 14px ${spacing.base}px;
  align-items: center;
`;

export const PrimaryButtonText = styled.Text`
  color: ${colors.background};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.bodyLg}px;
`;

export const Pill = styled.TouchableOpacity`
  padding: 6px 12px;
  background-color: ${colors.surface};
  border-radius: ${radius.full}px;
  border-width: 1px;
  border-color: ${colors.primary};
`;

export const PillText = styled.Text`
  font-size: ${fontSizes.caption}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.primary};
`;

export const CurrencyButton = styled.TouchableOpacity`
  padding: 8px 12px;
  background-color: ${colors.border};
  border-radius: ${radius.md}px;
  margin-left: ${spacing.sm}px;
`;

export const CurrencyButtonText = styled.Text`
  font-size: ${fontSizes.bodyLg}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
`;

export const SwapButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${colors.surface};
  border-width: 1px;
  border-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const SwapIcon = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
`;

export const Badge = styled.View`
  align-self: flex-start;
  margin-top: ${spacing.xs}px;
  padding: 4px 10px;
  border-radius: ${radius.full}px;
`;

export const BadgeText = styled.Text`
  font-size: ${fontSizes.sm}px;
  font-weight: ${fontWeights.semibold};
`;
