import styled from 'styled-components/native';
import { colors, fontSizes, spacing } from '../theme/theme';

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px ${spacing.base}px;
`;

export const RowLabel = styled.Text`
  font-size: ${fontSizes.bodyLg}px;
  color: ${colors.textLabel};
`;
