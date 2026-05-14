import { Modal } from "react-native";
import { ButtonVariant, FlexDirection } from "../types";
import { ModalBackdrop } from "../ui/primitives";
import {
  Button,
  ButtonRow,
  ButtonText,
  Card,
  Message,
  Title,
} from "./AppDialog.styled";

type DialogButton = {
  text: string;
  onPress?: () => void;
  destructive?: boolean;
};

type Props = {
  visible: boolean;
  title: string;
  message?: string;
  buttons: DialogButton[];
  onClose: () => void;
};

export default function AppDialog({
  visible,
  title,
  message,
  buttons,
  onClose,
}: Props) {
  const flexDirection: FlexDirection = buttons.length > 2 ? "column" : "row";
  const lastIndex = buttons.length - 1;

  const variantFor = (btn: DialogButton, index: number): ButtonVariant => {
    if (btn.destructive) return "destructive";
    return index === lastIndex ? "secondary" : "primary";
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <ModalBackdrop>
        <Card>
          <Title>{title}</Title>
          {message ? <Message>{message}</Message> : null}
          <ButtonRow flexDirection={flexDirection}>
            {buttons.map((btn, i) => {
              const variant = variantFor(btn, i);
              return (
                <Button
                  key={i}
                  variant={variant}
                  onPress={() => {
                    btn.onPress?.();
                    onClose();
                  }}
                >
                  <ButtonText variant={variant}>{btn.text}</ButtonText>
                </Button>
              );
            })}
          </ButtonRow>
        </Card>
      </ModalBackdrop>
    </Modal>
  );
}
