import styled from "styled-components/native";
import { colors, fontSizes, fontWeights, spacing } from "../theme/theme";
import { BaseCard } from "../ui/primitives";
import { colorForSign, SignProp } from "../utils";

export const HistoryRow = styled(BaseCard)`
  flex-direction: row;
  align-items: center;
  padding: 12px ${spacing.base}px;
  margin: 3px ${spacing.base}px;
`;

export const DateText = styled.Text`
  font-size: ${fontSizes.body}px;
  color: ${colors.textPrimary};
  font-weight: ${fontWeights.semibold};
  width: 72px;
`;

export const RateValue = styled.Text`
  flex: 1;
  font-size: ${fontSizes.body}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.primary};
  text-align: right;
`;

export const DeltaText = styled.Text<SignProp>`
  font-size: ${fontSizes.xs}px;
  color: ${(props: SignProp) => colorForSign(props.sign)};
  width: 72px;
  text-align: right;
`;
