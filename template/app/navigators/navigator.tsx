import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';

import { withEmoji } from '../recoil/example/withEmoji';

function HomeScreen() {
  const emojis = useRecoilValue(withEmoji);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{emojis}</Text>
    </View>
  );
}

const withSafeArea =
  (WrappedComponent: React.ComponentType, props?: Record<string, any>) => () =>
    (
      <SafeAreaProvider>
        <WrappedComponent {...props} />
      </SafeAreaProvider>
    );

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={withSafeArea(HomeScreen)} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
