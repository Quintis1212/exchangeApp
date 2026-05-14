import { memo } from 'react';
import { View } from 'react-native';
import { RateRow } from '../types';
import { fontSizes } from '../theme/theme';
import {
  AccentText, ListCard, PrimaryText, SecondaryText,
} from '../ui/primitives';

type Props = { row: RateRow };

function RateListItem({ row }: Props) {
  return (
    <ListCard>
      <View style={{ flex: 1 }}>
        <PrimaryText>{row.code}</PrimaryText>
        <SecondaryText>{row.label}</SecondaryText>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <SecondaryText style={{ fontSize: fontSizes.xs }}>
          {row.rateNote}
        </SecondaryText>
        <AccentText>{row.rateValue}</AccentText>
      </View>
    </ListCard>
  );
}

export default memo(RateListItem);
