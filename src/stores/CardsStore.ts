import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";
import { mmkvStorage } from "../storage";
import { CardDraft, SavedCard } from "../types";
import { newId } from "../utils";

type CardsState = {
  cards: readonly SavedCard[];
  addCard: (draft: CardDraft) => boolean;
  removeCard: (id: string) => void;
};

const useCardsStore = create<CardsState>()(
  persist(
    (set, get) => ({
      cards: [],
      addCard: (draft) => {
        if (get().cards.some((card) => card.number === draft.number)) {
          return false;
        }
        set((state) => ({
          cards: [
            { ...draft, id: newId(), savedAt: Date.now() },
            ...state.cards,
          ],
        }));
        return true;
      },
      removeCard: (id) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id),
        })),
    }),
    {
      name: STORAGE_KEYS.cards,
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);

export const useCards = () => useCardsStore((store) => store.cards);

export const useAddCard = () => useCardsStore((store) => store.addCard);

export const useRemoveCard = () => useCardsStore((store) => store.removeCard);
