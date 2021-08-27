import React from 'react';
import {linkTo} from '@storybook/addon-links';
import {storiesOf} from '@storybook/react';
import Welcome from '.';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));
