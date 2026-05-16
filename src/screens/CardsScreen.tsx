import { useState } from "react";
import { ScrollView } from "react-native";
import AppDialog from "../components/AppDialog";
import CardItem from "../components/CardItem";
import CardScanModal from "../components/CardScanModal";
import CardsEmptyState from "../components/CardsEmptyState";
import { useAddCard, useCards, useRemoveCard } from "../stores/CardsStore";
import { spacing } from "../theme/theme";
import { ScreenContainer } from "../ui/primitives";

export default function CardsScreen() {
  const cards = useCards();
  const addCard = useAddCard();
  const removeCard = useRemoveCard();
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const isEmpty = cards.length === 0;

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={{ padding: spacing.sm }}>
        {isEmpty ? (
          <CardsEmptyState />
        ) : (
          cards.map((card) => (
            <CardItem key={card.id} card={card} onDelete={setPendingDeleteId} />
          ))
        )}
      </ScrollView>

      <CardScanModal onSave={addCard} />

      <AppDialog
        visible={pendingDeleteId !== null}
        title="Remove Card"
        message="Are you sure you want to remove this card?"
        buttons={[
          { text: "Cancel" },
          {
            text: "Remove",
            destructive: true,
            onPress: () => pendingDeleteId && removeCard(pendingDeleteId),
          },
        ]}
        onClose={() => setPendingDeleteId(null)}
      />
    </ScreenContainer>
  );
}
