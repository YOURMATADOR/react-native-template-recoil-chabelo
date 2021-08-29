import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Text} from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

export default {
  component: Button,
  title: 'Button',
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

export const Emoji = ({text = 'iahuu'}) => {
  return (
    <Button onPress={action('clicked-emoji')}>
      <Text>🦾{text}🔥</Text>
    </Button>
  );
};

