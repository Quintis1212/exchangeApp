import { StyleSheet } from 'react-native';
import {
  Camera, useCameraDevice, usePhotoOutput,
} from 'react-native-vision-camera';
import { PrimaryButton, PrimaryButtonText } from '../ui/primitives';
import {
  CameraOverlay, CameraWrapper, CardFrame, Centered, Hint,
} from './CardScanModal.styled';

type Props = {
  hasPermission: boolean;
  requestPermission: () => Promise<boolean>;
  device: ReturnType<typeof useCameraDevice>;
  photoOutput: ReturnType<typeof usePhotoOutput>;
  isActive: boolean;
};

export default function CardScanCameraStep({
  hasPermission, requestPermission, device, photoOutput, isActive,
}: Props) {
  if (!hasPermission) {
    return (
      <Centered>
        <Hint>Camera permission is required to scan cards.</Hint>
        <PrimaryButton onPress={requestPermission}>
          <PrimaryButtonText>Grant Permission</PrimaryButtonText>
        </PrimaryButton>
      </Centered>
    );
  }

  if (!device) {
    return (
      <Centered>
        <Hint>No camera found on this device.</Hint>
      </Centered>
    );
  }

  return (
    <CameraWrapper>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        outputs={[photoOutput]}
      />
      <CameraOverlay>
        <CardFrame />
        <Hint>Hold the card steady — scanning automatically…</Hint>
      </CameraOverlay>
    </CameraWrapper>
  );
}
