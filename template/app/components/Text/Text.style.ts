import { TextStyle } from 'react-native';
import { THEME } from '../../theme';

const BASE: TextStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const textPresets: Record<string, TextStyle> = {
  primary: { ...BASE, backgroundColor: THEME.primary },
};

export type TextPresetNames = keyof typeof textPresets;
