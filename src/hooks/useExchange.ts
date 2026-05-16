import { useMemo, useState } from 'react';
import { convert, defaultCounterCurrency } from '../api/cnb';
import { CZK_ENTRY } from '../constants';
import { CNBRates, CurrencyRate } from '../types';

export function useExchange(data: CNBRates | undefined) {
  const [fromCurrency, setFromCurrency] = useState<CurrencyRate>(CZK_ENTRY);
  const [toCurrency, setToCurrency] = useState<CurrencyRate | null>(null);
  const [fromAmount, setFromAmount] = useState('1000');

  const toRate = toCurrency ?? defaultCounterCurrency(data);

  const toAmount = useMemo(() => {
    const amount = parseFloat(fromAmount);
    if (!data || isNaN(amount) || amount <= 0) return '';
    return convert(amount, fromCurrency, toRate).toFixed(4);
  }, [fromAmount, fromCurrency, toRate, data]);

  const exchangeRate = useMemo(
    () => (data ? convert(1, fromCurrency, toRate) : null),
    [fromCurrency, toRate, data],
  );

  const swap = () => {
    setFromCurrency(toRate);
    setToCurrency(fromCurrency);
    if (toAmount) setFromAmount(toAmount);
  };

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    toRate,
    fromAmount,
    setFromAmount,
    toAmount,
    exchangeRate,
    swap,
  };
}
