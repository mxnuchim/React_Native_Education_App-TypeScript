import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { EyeIcon } from 'react-native-heroicons/solid';
import { images } from '../../assets';
import { RootStackParamList } from '../../types';
import Input from '../../components/input';
import Button from '../../components/button';

const { signup } = images;

export default function SignUpScreen() {
  const navigation = useNavigation<RootStackParamList>();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key: string | number, value: string | number) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = () => {
    // Navigate to the next screen with user data
    console.log('user data --> ', userData);
    navigation.navigate('SelectGrade');
  };

  const isAndroid = Platform.OS === 'android';

  return (
    <SafeAreaView
      className={`flex-1 bg-bgWhite px-8 ${
        Platform.OS === 'web' ? 'px-10' : ''
      }`}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-around',
          marginVertical: 16,
        }}
        keyboardDismissMode={'interactive'}
        automaticallyAdjustKeyboardInsets
        showsVerticalScrollIndicator={false}
      >
        {/** ====================== Image ============================= */}
        <View className="flex-row justify-center my-[-5%]">
          <Image source={signup} style={{ width: 353, height: 235 }} />
        </View>
        {/** ====================== Sign Up inputs ============================= */}
        <View className="flex flex-col w-full items-center justify-center mt-3">
          <Input
            label={'Name'}
            placeholder={'Your name'}
            value={userData.name}
            onChange={(text) => handleInputChange('name', text)}
          />
          <Input
            label={'Email address'}
            placeholder={'name@example.com'}
            onChange={(text) => handleInputChange('email', text)}
          />
          <Input
            label={'Password'}
            placeholder={'**********'}
            Icon={EyeIcon}
            onChange={(text) => handleInputChange('password', text)}
            last
          />
        </View>

        {/** ====== Action button -> Navigation to grade selection screen ======= */}
        <View style={{ paddingTop: isAndroid ? '10%' : 0 }}>
          <Button
            primaryBtnText={'Sign Up'}
            onPrimaryBtnPress={handleSubmit}
            secondaryBtnText1={'Already have an account?'}
            secondaryBtnText2={'Sign In'}
            onSecondaryBtnPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
