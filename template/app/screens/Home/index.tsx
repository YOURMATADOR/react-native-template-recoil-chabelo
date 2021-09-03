import React from 'react';
import { useRecoilValue } from 'recoil';
import { View, Text } from 'react-native';

import { withEmoji } from '../../recoil/example/withEmoji';

export const HomeScreen = () => {
  const emojis = useRecoilValue(withEmoji);
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{emojis}</Text>
      
    </View>
  );
};
