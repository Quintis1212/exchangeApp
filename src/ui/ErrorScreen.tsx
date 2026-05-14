import { CenteredView, ErrorText } from './primitives';

type Props = { message: string };

export const ErrorScreen = ({ message }: Props) => (
  <CenteredView>
    <ErrorText>{message}</ErrorText>
  </CenteredView>
);
