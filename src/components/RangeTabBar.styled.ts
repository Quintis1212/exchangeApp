import styled from "styled-components/native";
import {
  colors,
  fontSizes,
  fontWeights,
  radius,
  spacing,
} from "../theme/theme";

type ActiveProp = { active: boolean };

export const RangeTabs = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${spacing.sm}px ${spacing.base}px;
  gap: ${spacing.sm}px;
`;

export const RangeTab = styled.TouchableOpacity<ActiveProp>`
  padding: 6px 14px;
  border-radius: ${radius.full}px;
  background-color: ${(props: ActiveProp) =>
    props.active ? colors.primary : colors.surface};
`;

export const RangeTabText = styled.Text<ActiveProp>`
  font-size: ${fontSizes.sm}px;
  font-weight: ${fontWeights.semibold};
  color: ${(props: ActiveProp) =>
    props.active ? colors.background : colors.textSecondary};
`;
