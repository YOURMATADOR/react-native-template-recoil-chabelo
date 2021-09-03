import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from './Button.props';

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, text } = props;
  const content = children || <Text>{text}</Text>;
  return <TouchableOpacity>{content}</TouchableOpacity>;
};
