import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../assets';
import { welcomeScreenData } from '../../assets/data/data';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, RootStackScreenProps } from '../../types';

const { welcome } = images;

export default function WelcomeScreen() {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <View
        className={`flex-1 flex justify-around my-4 ${
          Platform.OS === 'web' ? 'px-10' : ''
        }`}
      >
        {/** ====================== Image =================================== */}
        <View className="flex-row justify-center">
          <Image source={welcome} style={{ width: 324, height: 324 }} />
        </View>

        {/** ====================== Welcome Text ============================= */}
        <View className={`flex flex-col gap-2`}>
          <Text className="text-darkGrayText text-xl text-center font-exoSemibold">
            {welcomeScreenData.title}
          </Text>
          <Text className="text-darkGrayText text-lg text-center font-exo">
            {welcomeScreenData.subtitle}
          </Text>
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={'Sign Up'}
          onPrimaryBtnPress={() => navigation.navigate('SignUp')}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
}
