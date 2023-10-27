import { Platform, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import HeaderText from '../../components/headerText';
import ProvinceSelector from '../../components/provinceSelector';
import Button from '../../components/button';

const SelectProvinceScreen = () => {
  const navigation = useNavigation<RootStackParamList>();

  return (
    <SafeAreaView
      className={`px-7 py-8 ${Platform.OS === 'web' ? 'px-10' : ''}`}
    >
      {/** ============== Header text component =========== */}
      <HeaderText text={"What's your province?"} />

      {/** ============== Select Grades ===================== */}
      <View className="mt-10">
        <ProvinceSelector />
      </View>

      {/** ========= Action button ================== */}
      <View className={`${Platform.OS === 'web' ? 'mt-[10%]' : 'mt-[25%]'}`}>
        <Button
          primaryBtnText={'Next'}
          onPrimaryBtnPress={() => navigation.navigate('Home')}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectProvinceScreen;
