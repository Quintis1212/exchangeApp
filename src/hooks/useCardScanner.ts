import { useCallback, useEffect, useRef, useState } from "react";
import {
  EMPTY_PARSED_CARD,
  MAX_CONSECUTIVE_ERRORS,
  SCAN_RETRY_DELAY_MS,
} from "../constants";
import { ParsedCard, PhotoOutput } from "../types";
import { isCardValid, mergeCard, scanFrame } from "../utils";

type Options = {
  enabled: boolean;
  photoOutput: PhotoOutput;
  onComplete: (card: ParsedCard) => void;
  onPersistentError?: () => void;
};

export const useCardScanner = ({
  enabled,
  photoOutput,
  onComplete,
  onPersistentError,
}: Options) => {
  const [card, setCard] = useState<ParsedCard>(EMPTY_PARSED_CARD);
  const cardRef = useRef<ParsedCard>(EMPTY_PARSED_CARD);

  const latest = useRef({ photoOutput, onComplete, onPersistentError });
  latest.current = { photoOutput, onComplete, onPersistentError };

  const reset = useCallback(() => {
    cardRef.current = EMPTY_PARSED_CARD;
    setCard(EMPTY_PARSED_CARD);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let errors = 0;

    const tick = async () => {
      try {
        const parsed = await scanFrame(latest.current.photoOutput);
        if (cancelled) return;
        const merged = mergeCard(cardRef.current, parsed);
        cardRef.current = merged;
        setCard(merged);
        errors = 0;
        if (isCardValid(merged)) {
          latest.current.onComplete(merged);
          return;
        }
      } catch {
        if (++errors >= MAX_CONSECUTIVE_ERRORS) {
          latest.current.onPersistentError?.();
          return;
        }
      }
      if (!cancelled) timeoutId = setTimeout(tick, SCAN_RETRY_DELAY_MS);
    };

    timeoutId = setTimeout(tick, SCAN_RETRY_DELAY_MS);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [enabled]);

  return { card, setCard, reset };
};
