/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {RecoilRoot} from 'recoil';

import App from './app/App';
import {name as appName} from './app.json';

const Root = () => (
  <RecoilRoot>
    <App />
    <Text>Text</Text>
  </RecoilRoot>
);

AppRegistry.registerComponent(appName, () => Root);
