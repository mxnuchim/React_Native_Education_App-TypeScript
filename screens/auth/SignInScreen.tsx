import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { EyeIcon } from 'react-native-heroicons/solid';
import { images } from '../../assets';
import Input from '../../components/input';
import Button from '../../components/button';
import { RootStackParamList } from '../../types';

const { signin } = images;

export default function SignInScreen() {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View
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

        <View className="flex-row justify-center  my-[-5%]">
          <Image source={signin} style={{ width: 266, height: 266 }} />
        </View>

        {/** ====================== Sign In inputs ============================= */}
        <KeyboardAvoidingView
          behavior="padding"
          className="flex flex-col w-full items-center justify-center mt-3"
        >
          <Input label={'Email address'} placeholder={'name@example.com'} />
          <Input
            label={'Password'}
            placeholder={'********'}
            Icon={EyeIcon}
            last
          />
        </KeyboardAvoidingView>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={'Sign In'}
          onPrimaryBtnPress={() => navigation.navigate('Home')}
          secondaryBtnText1={"Don't have an account?"}
          secondaryBtnText2={'Sign Up'}
          onSecondaryBtnPress={() => navigation.navigate('SignUp')}
        />
      </ScrollView>
    </View>
  );
}
