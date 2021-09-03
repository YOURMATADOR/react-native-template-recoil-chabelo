import I18n from 'i18n-js';
import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

import { TxKeyPath } from '../../i18n';
import { TextPresetNames } from './Text.style';

export interface TextProps extends TouchableOpacityProps {
  /**
   * use this if there is no key available in the i18n files
   */
  text?: string;

  /**
   * i18n text
   */
  i18n?: TxKeyPath;

  /**
   * i18n options
   */
  i18nOptions?: I18n.TranslateOptions;

  /**
   * use this if you want a custom children
   */
  children?: React.ReactNode;

  style?: StyleProp<TextStyle>;

  flavor?: TextPresetNames;
}
