import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { CurrencyRate } from '../types';
import { CZK_ENTRY } from '../api/cnb';
import { STORAGE_KEYS } from '../constants';
import { getJSON, setJSON } from '../storage';

type BaseCurrencyCtx = {
  base: CurrencyRate;
  setBase: (rate: CurrencyRate) => void;
};

const BaseCurrencyContext = createContext<BaseCurrencyCtx>({
  base: CZK_ENTRY,
  setBase: () => {},
});

export const useBase = () => useContext(BaseCurrencyContext);

export function BaseCurrencyProvider({ children }: { children: ReactNode }) {
  const [base, setBaseState] = useState<CurrencyRate>(
    () => getJSON<CurrencyRate>(STORAGE_KEYS.baseCurrency) ?? CZK_ENTRY,
  );

  const setBase = useCallback((rate: CurrencyRate) => {
    setBaseState(rate);
    setJSON(STORAGE_KEYS.baseCurrency, rate);
  }, []);

  const value = useMemo(() => ({ base, setBase }), [base, setBase]);

  return (
    <BaseCurrencyContext.Provider value={value}>
      {children}
    </BaseCurrencyContext.Provider>
  );
}
