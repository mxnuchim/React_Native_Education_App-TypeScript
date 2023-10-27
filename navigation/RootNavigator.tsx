import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectGradeScreen from '../screens/auth/SelectGradeScreen';
import SelectProvinceScreen from '../screens/auth/SelectProvinceScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './TabsNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="SelectGrade"
        options={{ headerShown: false }}
        component={SelectGradeScreen}
      />
      <Stack.Screen
        name="SelectProvince"
        options={{ headerShown: false }}
        component={SelectProvinceScreen}
      />
    </Stack.Navigator>
  );
}
