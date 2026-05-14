import styled from 'styled-components/native';
import { colors, fontSizes, fontWeights, radius, spacing } from '../theme/theme';
import { BaseCard } from '../ui/primitives';

export const OverlayCard = styled(BaseCard)`
  width: 100%;
  padding: ${spacing.xl}px;
  align-items: center;
`;

export const CheckCircle = styled.View`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: ${colors.positiveTint};
  border-width: 2px;
  border-color: ${colors.positive};
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacing.base}px;
`;

export const CheckIcon = styled.Text`
  font-size: 36px;
  color: ${colors.positive};
`;

export const OverlayTitle = styled.Text`
  font-size: ${fontSizes.titleLg}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
  margin-bottom: ${spacing.sm}px;
  text-align: center;
`;

export const OverlayMsg = styled.Text`
  font-size: ${fontSizes.body}px;
  color: ${colors.textSecondary};
  text-align: center;
  line-height: 22px;
  margin-bottom: ${spacing.xl}px;
`;

export const DoneBtn = styled.TouchableOpacity`
  background-color: ${colors.positive};
  border-radius: ${radius.md}px;
  padding: 14px;
  align-items: center;
  width: 100%;
`;

export const DoneBtnText = styled.Text`
  color: ${colors.textPrimary};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.bodyLg}px;
`;
