import { ViewStyle } from 'react-native';
import { THEME } from '../../theme';

const BASE: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const viewPreset: Record<string, ViewStyle> = {
  primary: { ...BASE, backgroundColor: THEME.primary },
};

export type ButtonPresetNames = keyof typeof viewPreset;
