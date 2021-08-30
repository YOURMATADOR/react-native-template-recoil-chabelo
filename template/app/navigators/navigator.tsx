import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens';

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
