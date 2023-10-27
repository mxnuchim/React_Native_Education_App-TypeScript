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
      exo: require('./assets/fonts/Exo/static/Exo-Regular.ttf'),
      exoSemibold: require('./assets/fonts/Exo/static/Exo-SemiBold.ttf'),
      roboto: require('./assets/fonts/Roboto/Roboto-Light.ttf'),
      robotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    });

    setIsFontLoaded(true);
  };

  useEffect(() => {
    loadCustomFont();
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigator />
    </NavigationContainer>
  );
}
