import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import RootNavigator from './RootNavigator';
import TabsNavigator from './TabsNavigator';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SelectGradeScreen from '../screens/auth/SelectGradeScreen';
import SelectProvinceScreen from '../screens/auth/SelectProvinceScreen';
import { AuthStackParamList } from '../types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Group
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <AuthStack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <AuthStack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={SignInScreen}
        />
        <AuthStack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        <AuthStack.Screen
          name="SelectGrade"
          options={{ headerShown: false }}
          component={SelectGradeScreen}
        />
        <AuthStack.Screen
          name="SelectProvince"
          options={{ headerShown: false }}
          component={SelectProvinceScreen}
        />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
