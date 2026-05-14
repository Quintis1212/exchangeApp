import { Modal } from 'react-native';
import { ModalBackdrop } from '../ui/primitives';
import { OverlayCard } from './ExchangeStatusOverlay.styled';
import ExchangeStatusProcessing from './ExchangeStatusProcessing';
import ExchangeStatusSuccess from './ExchangeStatusSuccess';

export type ExchangeStatus = 'idle' | 'loading' | 'success';

type Props = {
  status: ExchangeStatus;
  summary: string;
  onDone: () => void;
};

export default function ExchangeStatusOverlay({ status, summary, onDone }: Props) {
  return (
    <Modal
      visible={status !== 'idle'}
      transparent
      animationType="fade"
      onRequestClose={onDone}
    >
      <ModalBackdrop>
        <OverlayCard>
          {status === 'loading' ? (
            <ExchangeStatusProcessing />
          ) : (
            <ExchangeStatusSuccess summary={summary} onDone={onDone} />
          )}
        </OverlayCard>
      </ModalBackdrop>
    </Modal>
  );
}
