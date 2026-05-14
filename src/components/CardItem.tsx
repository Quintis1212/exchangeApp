import { memo } from "react";
import { TouchableOpacity } from "react-native";
import { SavedCard } from "../types";
import { formatSavedDate, maskCardNumber } from "../utils";
import {
  Card,
  CardBottomRow,
  CardExpiry,
  CardMeta,
  CardName,
  CardNumber,
  CardSavedDate,
  CardTopRow,
  DeleteText,
} from "./CardItem.styled";

type Props = {
  card: SavedCard;
  onDelete: (id: string) => void;
};

function CardItem({ card, onDelete }: Props) {
  return (
    <Card>
      <CardTopRow>
        <CardNumber>{maskCardNumber(card.number)}</CardNumber>
        <TouchableOpacity onPress={() => onDelete(card.id)} hitSlop={8}>
          <DeleteText>✕</DeleteText>
        </TouchableOpacity>
      </CardTopRow>
      <CardBottomRow>
        <CardName>{card.name || "—"}</CardName>
        <CardMeta>
          {card.expiry ? <CardExpiry>{card.expiry}</CardExpiry> : null}
          <CardSavedDate>{formatSavedDate(card.savedAt)}</CardSavedDate>
        </CardMeta>
      </CardBottomRow>
    </Card>
  );
}

export default memo(CardItem);
