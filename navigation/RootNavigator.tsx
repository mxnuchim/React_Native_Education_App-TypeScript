import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import AuthNavigator from './AuthNavigator';
import { View } from 'react-native';
import { RootStackParamList } from '../types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <>
      <RootStack.Navigator initialRouteName="Auth">
        <RootStack.Screen
          name="TabsStack"
          component={TabsNavigator}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </>
  );
};

export default RootNavigator;

const Example = () => {
  return <View />;
};
