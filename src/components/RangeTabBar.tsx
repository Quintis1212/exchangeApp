import { RANGE_KEYS } from "../constants";
import { RangeKey } from "../types";
import { RangeTab, RangeTabs, RangeTabText } from "./RangeTabBar.styled";

type Props = {
  value: RangeKey;
  onChange: (range: RangeKey) => void;
};

export default function RangeTabBar({ value, onChange }: Props) {
  return (
    <RangeTabs>
      {RANGE_KEYS.map((range) => (
        <RangeTab
          key={range}
          active={range === value}
          onPress={() => onChange(range)}
        >
          <RangeTabText active={range === value}>{range}</RangeTabText>
        </RangeTab>
      ))}
    </RangeTabs>
  );
}
