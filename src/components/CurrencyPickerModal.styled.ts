import styled from 'styled-components/native';
import { colors, spacing, fontSizes, fontWeights } from '../theme/theme';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: flex-end;
`;

export const Sheet = styled.View`
  background-color: ${colors.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  max-height: 70%;
  padding-bottom: ${spacing.xl}px;
`;

export const SheetHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.base}px ${spacing.base}px ${spacing.sm}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const SheetTitle = styled.Text`
  font-size: ${fontSizes.bodyLg}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
`;

export const CloseBtn = styled.TouchableOpacity`
  padding: ${spacing.xs}px ${spacing.sm}px;
`;

export const CloseText = styled.Text`
  font-size: ${fontSizes.bodyLg}px;
  color: ${colors.textSecondary};
`;

export const PickerRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px ${spacing.base}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const Check = styled.Text`
  color: ${colors.primary};
  font-size: ${fontSizes.bodyLg}px;
`;
