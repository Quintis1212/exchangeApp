import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { STORAGE_KEYS } from "../constants";
import { mmkvStorage } from "../storage";
import { SavedCard } from "../types";

type CardsState = {
  cards: readonly SavedCard[];
  addCard: (card: SavedCard) => void;
  removeCard: (id: string) => void;
};

const useCardsStore = create<CardsState>()(
  persist(
    (set) => ({
      cards: [],
      addCard: (card) => set((state) => ({ cards: [card, ...state.cards] })),
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
