import React from 'react';
import { View, Text as ReactNativeText, TouchableOpacity } from 'react-native';
import { translate } from '../../i18n';

import { TextProps } from './Text.props';

export const Text = (props: TextProps): JSX.Element => {
  const { children, text, i18n, i18nOptions } = props;

  const i18nText = i18n && translate(i18n, i18nOptions);
  const content = children;
  return <ReactNativeText>{content}</ReactNativeText>;
};
