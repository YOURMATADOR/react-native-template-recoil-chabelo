import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Text} from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

 
storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
