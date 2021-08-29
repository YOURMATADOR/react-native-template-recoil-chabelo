/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { RecoilRoot } from 'recoil';

import { Navigator } from './navigators';

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Navigator />
    </RecoilRoot>
  );
};

export default App;
