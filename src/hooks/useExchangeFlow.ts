import { useState } from 'react';
import { ExchangeStatus } from '../components/ExchangeStatusOverlay';

type Params = {
  hasCards: boolean;
};

export function useExchangeFlow({ hasCards }: Params) {
  const [status, setStatus] = useState<ExchangeStatus>('idle');
  const [noCardDialog, setNoCardDialog] = useState(false);

  const startExchange = () => {
    if (!hasCards) {
      setNoCardDialog(true);
      return;
    }
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  const dismissNoCard = () => setNoCardDialog(false);
  const dismissStatus = () => setStatus('idle');

  return { status, noCardDialog, startExchange, dismissNoCard, dismissStatus };
}
