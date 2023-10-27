import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, Image, View } from 'react-native';
import { images } from '../assets';
import ClassworkScreen from '../screens/ClassworkScreen';
import HomeScreen from '../screens/HomeScreen';
import StreamScreen from '../screens/StreamScreen';
import { themeColors } from '../theme/colors';
import { RootStackParamList } from '../types';

{
  /** ============== Bottom Tab Navigator =================== */
}
const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator<RootStackParamList>();

const { streamIcon, classWorkIcon, exploreIcon } = images;
const extraTabOptions = {
  tabBarLabelStyle: { fontFamily: 'exo' },
  tabBarStyle: { borderTopRightRadius: 12, borderTopLeftRadius: 12 },
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};

export default function BottomTabNavigator() {
  return (
    <View
      style={{
        width,
        height,
      }}
    >
      <Tab.Navigator initialRouteName="Explore">
        <Tab.Screen
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
        <Tab.Screen
          name="Stream"
          component={StreamScreen}
          options={{
            headerShown: false,
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
        <Tab.Screen
          name="Classwork"
          component={ClassworkScreen}
          options={{
            headerShown: false,
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
      </Tab.Navigator>
    </View>
  );
}
