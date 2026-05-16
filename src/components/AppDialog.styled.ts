import styled from "styled-components/native";
import {
  buttonVariants,
  colors,
  fontSizes,
  fontWeights,
  radius,
  spacing,
} from "../theme/theme";
import { ButtonVariant, FlexDirection } from "../types";
import { BaseCard } from "../ui/primitives";

type VariantProp = { variant: ButtonVariant };
type FlexDirectionProp = { flexDirection: FlexDirection };

export const Card = styled(BaseCard)`
  width: 100%;
  padding: ${spacing.base}px;
`;

export const Title = styled.Text`
  font-size: ${fontSizes.title}px;
  font-weight: ${fontWeights.bold};
  color: ${colors.textPrimary};
  margin-bottom: ${spacing.sm}px;
`;

export const Message = styled.Text`
  font-size: ${fontSizes.body}px;
  color: ${colors.textSecondary};
  margin-bottom: ${spacing.base}px;
  line-height: 22px;
`;

export const ButtonRow = styled.View<FlexDirectionProp>`
  flex-direction: ${(props: FlexDirectionProp) => props.flexDirection};
  gap: ${spacing.sm}px;
  margin-top: ${spacing.sm}px;
`;

export const Button = styled.TouchableOpacity<VariantProp>`
  flex: 1;
  padding: 12px;
  border-radius: ${radius.md}px;
  align-items: center;
  background-color: ${(props: VariantProp) => buttonVariants[props.variant].bg};
  border-width: ${(props: VariantProp) =>
    buttonVariants[props.variant].borderWidth}px;
  border-color: ${(props: VariantProp) => buttonVariants[props.variant].border};
`;

export const ButtonText = styled.Text<VariantProp>`
  font-size: ${fontSizes.body}px;
  font-weight: ${fontWeights.semibold};
  color: ${(props: VariantProp) => buttonVariants[props.variant].text};
`;
