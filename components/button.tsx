import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface ButtonProps {
  onPrimaryBtnPress: () => void; // Type for the primary button press handler
  primaryBtnText: string; // Type for the primary button text
  showSecondaryBtn?: boolean; // Type for the flag that controls the visibility of the secondary button (optional)
  secondaryBtnText1?: string; // Type for the first part of secondary button text (optional)
  secondaryBtnText2?: string; // Type for the second part of secondary button text (optional)
  onSecondaryBtnPress?: () => void; // Type for the secondary button press handler (optional)
}

const Button = ({
  onPrimaryBtnPress,
  primaryBtnText,
  showSecondaryBtn = true,
  secondaryBtnText1,
  secondaryBtnText2,
  onSecondaryBtnPress,
}: ButtonProps) => {
  return (
    <View className="flex flex-col items-center gap-8">
      {/** ====================== Main Button ============================= */}
      <Pressable
        onPress={onPrimaryBtnPress}
        className="py-3 bg-bgPurple px-7 rounded-xl w-[267px] max-h-[61px] flex items-center justify-center"
      >
        <Text className="text-xl font-exoSemibold text-center text-bgWhite">
          {primaryBtnText}
        </Text>
      </Pressable>
      {/** ====================== Secondary pressable ============================= */}
      {showSecondaryBtn ? (
        <View className="flex-row justify-center">
          <Text className="text-darkGrayText font-exo text-lg">
            {secondaryBtnText1}{' '}
          </Text>
          <Pressable onPress={onSecondaryBtnPress}>
            <Text className="font-exo text-bgPurple text-lg">
              {secondaryBtnText2}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default Button;
