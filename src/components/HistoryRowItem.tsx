import { HistoryEntry } from '../hooks/useHistoryEntries';
import { SecondaryText } from '../ui/primitives';
import { fmtDate, getSign } from '../utils';
import { DateText, DeltaText, HistoryRow, RateValue } from './HistoryRowItem.styled';

type Props = {
  entry: HistoryEntry;
  previous: HistoryEntry | undefined;
  baseCode: string;
};

export default function HistoryRowItem({ entry, previous, baseCode }: Props) {
  const delta = entry.rate !== null && previous?.rate != null ? entry.rate - previous.rate : null;
  const deltaSign = getSign(delta);

  return (
    <HistoryRow>
      <DateText>{fmtDate(entry.date)}</DateText>
      <SecondaryText style={{ flex: 1 }}>
        {entry.rate !== null ? entry.rate.toFixed(4) : '—'}
      </SecondaryText>
      <RateValue>{baseCode}</RateValue>
      <DeltaText sign={deltaSign}>
        {delta !== null ? `${deltaSign === 1 ? '+' : ''}${delta.toFixed(4)}` : ''}
      </DeltaText>
    </HistoryRow>
  );
}
