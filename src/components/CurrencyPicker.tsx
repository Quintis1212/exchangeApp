import { useState } from "react";
import { CurrencyRate } from "../types";
import { Pill, Text } from "../ui/primitives";
import CurrencyPickerModal from "./CurrencyPickerModal";

type Props = {
  selected: CurrencyRate;
  rates: CurrencyRate[];
  onSelect: (rate: CurrencyRate) => void;
  prefix?: string;
};

export default function CurrencyPicker({
  selected,
  rates,
  onSelect,
  prefix,
}: Props) {
  const [visible, setVisible] = useState(false);

  if (rates.length === 0) return null;

  return (
    <>
      <Pill onPress={() => setVisible(true)}>
        <Text>
          {prefix ? `${prefix}: ` : ""}
          {selected.code} ▾
        </Text>
      </Pill>
      <CurrencyPickerModal
        visible={visible}
        rates={rates}
        selected={selected}
        onSelect={onSelect}
        onClose={() => setVisible(false)}
      />
    </>
  );
}
