import { Appearance } from 'react-native';
import { DARK, LIGHT } from './palette';

export const colorsLight = {
  primary: LIGHT.lightPink,
};

type ColorsLightType = typeof colorsLight;

export const colorsDark = {
  primary: DARK.lightPink,
};
type ColorsDarkType = typeof colorsDark;

export const THEME: ColorsDarkType | ColorsLightType =
  Appearance.getColorScheme() === 'dark' ? colorsDark : colorsLight;
