import styled from "styled-components/native";
import {
  colors,
  fontSizes,
  fontWeights,
  radius,
  spacing,
} from "../theme/theme";

export const Card = styled.View`
  background-color: ${colors.surface};
  border-radius: ${radius.md}px;
  padding: ${spacing.base}px;
  margin-bottom: ${spacing.sm}px;
  border-width: 1px;
  border-color: ${colors.border};
`;

export const CardTopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${spacing.sm}px;
`;

export const CardNumber = styled.Text`
  font-size: ${fontSizes.bodyLg}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
  letter-spacing: 2px;
`;

export const DeleteText = styled.Text`
  font-size: ${fontSizes.body}px;
  color: ${colors.textSecondary};
`;

export const CardBottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CardName = styled.Text`
  font-size: ${fontSizes.sm}px;
  color: ${colors.textSecondary};
  font-weight: ${fontWeights.semibold};
`;

export const CardMeta = styled.View`
  align-items: flex-end;
`;

export const CardExpiry = styled.Text`
  font-size: ${fontSizes.caption}px;
  color: ${colors.primary};
  font-weight: ${fontWeights.semibold};
`;

export const CardSavedDate = styled.Text`
  font-size: ${fontSizes.xs}px;
  color: ${colors.textMuted};
`;
