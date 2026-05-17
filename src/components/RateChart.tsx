import { useWindowDimensions } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { CHART_PADDING_Y } from "../constants";
import { spacing } from "../theme/theme";

type Props = {
  values: number[];
  color: string;
  height?: number;
};

export default function RateChart({ values, color, height = 160 }: Props) {
  const { width } = useWindowDimensions();
  if (values.length < 2) return null;

  const W = width - spacing.base * 2;
  const min = Math.min(...values);
  const difference = Math.max(...values) - min || 1;
  const innerH = height - CHART_PADDING_Y * 2;
  const pt = (i: number): [number, number] => [
    (i / (values.length - 1)) * W,
    CHART_PADDING_Y + (1 - (values[i] - min) / difference) * innerH,
  ];

  const line = values
    .map((_, i) => {
      const [x, y] = pt(i);
      if (i === 0) return `M ${x},${y}`;
      const [px, py] = pt(i - 1);
      const mx = (px + x) / 2;
      return `C ${mx},${py} ${mx},${y} ${x},${y}`;
    })
    .join(" ");

  const [lx] = pt(values.length - 1);
  const fill = `${line} L ${lx},${height} L 0,${height} Z`;

  return (
    <Svg width={W} height={height}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={color} stopOpacity="0.3" />
          <Stop offset="1" stopColor={color} stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Path d={fill} fill="url(#grad)" />
      <Path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
