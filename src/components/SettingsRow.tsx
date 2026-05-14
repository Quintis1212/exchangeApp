import { ReactNode } from 'react';
import { Row, RowLabel } from './SettingsRow.styled';

type Props = {
  label: string;
  children: ReactNode;
};

export default function SettingsRow({ label, children }: Props) {
  return (
    <Row>
      <RowLabel>{label}</RowLabel>
      {children}
    </Row>
  );
}
