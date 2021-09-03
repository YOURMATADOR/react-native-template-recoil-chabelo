import { action } from '@storybook/addon-actions';
import React from 'react';
import { Text } from '.';

export default {
  component: Text,
  title: 'Text',
  argTypes: {
    children: {
      control: false,
    },
    text: {
      description: 'Some awesome description',
      control: {
        type: 'text',
      },
    },
  },
};

export const Emoji = ({
  text = 'iahuu',
}: Record<string, string>): JSX.Element => (
  <Text onPress={action('clicked-emoji')}>🦾{text}🔥</Text>
);
