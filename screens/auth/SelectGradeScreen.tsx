import { Platform, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import HeaderText from '../../components/headerText';
import { gradesData } from '../../assets/data/data';
import SubjectPicker from '../../components/subjectPicker';
import { RootStackParamList } from '../../types';
import Button from '../../components/button';

const SelectGradeScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeAreaView className="px-7 py-8">
      {/** ============== Header text component =========== */}
      <HeaderText text={"What's your grade?"} />

      {/** ============== Select Grades ===================== */}
      <View className="mt-10">
        {gradesData.map((grade, index) => (
          <SubjectPicker grades={grade} key={index} />
        ))}
      </View>

      {/** ========= Action button ================== */}
      <View className={Platform.OS === 'ios' ? 'mt-[30%]' : 'mt-[10%]'}>
        <Button
          primaryBtnText={'Next'}
          onPrimaryBtnPress={() => navigation.navigate('SelectProvince')}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => navigation.navigate('SelectProvince')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectGradeScreen;
