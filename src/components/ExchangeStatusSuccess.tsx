import {
  CheckCircle, CheckIcon, DoneBtn, DoneBtnText,
  OverlayMsg, OverlayTitle,
} from './ExchangeStatusOverlay.styled';

type Props = {
  summary: string;
  onDone: () => void;
};

export default function ExchangeStatusSuccess({ summary, onDone }: Props) {
  return (
    <>
      <CheckCircle>
        <CheckIcon>✓</CheckIcon>
      </CheckCircle>
      <OverlayTitle>Exchange Successful</OverlayTitle>
      <OverlayMsg>{summary}</OverlayMsg>
      <DoneBtn onPress={onDone}>
        <DoneBtnText>Done</DoneBtnText>
      </DoneBtn>
    </>
  );
}
