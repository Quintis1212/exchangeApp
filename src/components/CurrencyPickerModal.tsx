import { useCallback } from "react";
import { FlatList, ListRenderItem, Modal } from "react-native";
import { CurrencyRate } from "../types";
import {
  CloseBtn,
  CloseText,
  Overlay,
  Sheet,
  SheetHeader,
  SheetTitle,
} from "./CurrencyPickerModal.styled";
import CurrencyPickerRow from "./CurrencyPickerRow";

type Props = {
  visible: boolean;
  rates: CurrencyRate[];
  selected: CurrencyRate;
  onSelect: (rate: CurrencyRate) => void;
  onClose: () => void;
};

const keyExtractor = (item: CurrencyRate) => item.code;

export default function CurrencyPickerModal({
  visible,
  rates,
  selected,
  onSelect,
  onClose,
}: Props) {
  const handlePick = useCallback(
    (rate: CurrencyRate) => {
      onSelect(rate);
      onClose();
    },
    [onSelect, onClose],
  );

  const renderItem = useCallback<ListRenderItem<CurrencyRate>>(
    ({ item }) => (
      <CurrencyPickerRow
        rate={item}
        isSelected={selected.code === item.code}
        onPick={handlePick}
      />
    ),
    [selected.code, handlePick],
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Overlay>
        <Sheet>
          <SheetHeader>
            <SheetTitle>Select Currency</SheetTitle>
            <CloseBtn onPress={onClose}>
              <CloseText>✕</CloseText>
            </CloseBtn>
          </SheetHeader>
          <FlatList
            data={rates}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            initialNumToRender={15}
            maxToRenderPerBatch={10}
          />
        </Sheet>
      </Overlay>
    </Modal>
  );
}
