import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import RootNavigator from './navigation/RootNavigator';
import { Text, View } from 'react-native';

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const loadCustomFont = async () => {
    await Font.loadAsync({
      exo: require('./assets/fonts/Exo/Exo-Regular.otf'),
      exoSemibold: require('./assets/fonts/Exo/Exo-DemiBold.otf'),
      roboto: require('./assets/fonts/Roboto/Roboto-Light.ttf'),
      robotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    });

    setIsFontLoaded(true);
  };

  useEffect(() => {
    loadCustomFont();
  }, []);

  if (!isFontLoaded) {
    return (
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-red-500 font-roboto">E spoil o</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigator />
    </NavigationContainer>
  );
}
