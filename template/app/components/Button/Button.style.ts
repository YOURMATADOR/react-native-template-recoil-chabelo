import { ViewStyle } from 'react-native';
import { THEME } from '../../theme';

const BASE: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export type ButtonPresetNames = 'primary';

export const viewPreset: Record<ButtonPresetNames | string, ViewStyle> = {
  primary: { ...BASE, backgroundColor: THEME.primary } as ViewStyle,
};
