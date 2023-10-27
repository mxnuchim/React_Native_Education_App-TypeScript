import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ClassworkScreen from '../screens/ClassworkScreen';
import StreamScreen from '../screens/StreamScreen';
import { themeColors } from '../theme/colors';
import { TabsStackParamList } from '../types';
import { images } from '../assets';

const { streamIcon, exploreIcon, classWorkIcon } = images;
const extraTabOptions = {
  tabBarLabelStyle: { fontFamily: 'exo' },
  tabBarStyle: { borderTopRightRadius: 12, borderTopLeftRadius: 12 },
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <TabsStack.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={exploreIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <TabsStack.Screen
        name="Stream"
        component={StreamScreen}
        options={{
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={streamIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <TabsStack.Screen
        name="Classwork"
        component={ClassworkScreen}
        options={{
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={classWorkIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;
