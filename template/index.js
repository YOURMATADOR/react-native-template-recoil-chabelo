/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {RecoilRoot} from 'recoil';

import App from './app/App';
import {name as appName} from './app.json';

const Root = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

AppRegistry.registerComponent(appName, () => Root);
