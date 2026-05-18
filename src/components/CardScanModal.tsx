import { useCallback, useState } from "react";
import { Modal } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
  usePhotoOutput,
} from "react-native-vision-camera";
import { useCardScanner } from "../hooks/useCardScanner";
import { CardDraft, CardScanStep } from "../types";
import { PrimaryText, ScreenContainer } from "../ui/primitives";
import { isCardValid, toCardDraft } from "../utils";
import AppDialog from "./AppDialog";
import CardScanCameraStep from "./CardScanCameraStep";
import { CloseButton, CloseText, Header } from "./CardScanModal.styled";
import CardScanReviewStep from "./CardScanReviewStep";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (draft: CardDraft) => boolean;
};

export default function CardScanModal({ visible, onClose, onSave }: Props) {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");
  const photoOutput = usePhotoOutput();

  const [step, setStep] = useState<CardScanStep>("camera");
  const [showError, setShowError] = useState<string | null>(null);

  const handleComplete = useCallback(() => setStep("review"), []);
  const handleError = useCallback(
    () => setShowError("Scanning failed. Please close and try again."),
    [],
  );

  const {
    card,
    setCard,
    reset: resetScanner,
  } = useCardScanner({
    enabled: visible && step === "camera" && hasPermission && device != null,
    photoOutput,
    onComplete: handleComplete,
    onPersistentError: handleError,
  });

  const handleClose = () => {
    resetScanner();
    setStep("camera");
    setShowError(null);
    onClose();
  };

  const handleSave = () => {
    if (!isCardValid(card)) {
      setShowError("All fields are required.");
      return;
    }
    const added = onSave(toCardDraft(card));
    if (!added) {
      setShowError("This card is already saved.");
      return;
    }
    handleClose();
  };

  const handleRescan = () => {
    resetScanner();
    setStep("camera");
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={handleClose}>
      <AppDialog
        visible={showError !== null}
        title="Invalid card"
        message={showError ?? ""}
        buttons={[{ text: "OK", onPress: () => setShowError(null) }]}
        onClose={() => setShowError(null)}
      />
      <ScreenContainer>
        <Header>
          <PrimaryText>
            {step === "camera" ? "Scan Card" : "Review Details"}
          </PrimaryText>
          <CloseButton onPress={handleClose} hitSlop={8}>
            <CloseText>✕</CloseText>
          </CloseButton>
        </Header>

        {step === "camera" ? (
          <CardScanCameraStep
            hasPermission={hasPermission}
            requestPermission={requestPermission}
            device={device}
            photoOutput={photoOutput}
            isActive={visible}
          />
        ) : (
          <CardScanReviewStep
            card={card}
            onChange={setCard}
            onSave={handleSave}
            onRescan={handleRescan}
          />
        )}
      </ScreenContainer>
    </Modal>
  );
}
