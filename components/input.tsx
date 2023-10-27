import { Text, TextInput, View } from 'react-native';
import React from 'react';

interface InputProps {
  label: string; // Type for the label text
  placeholder: string; // Type for the placeholder text
  last?: boolean; // Type for the flag that controls whether it's the last input (optional)
  Icon?: any;
  value?: string; // Type for the input value
  onChange?: (text: string) => void; // Type for the input change handler
}

const Input = ({
  label,
  placeholder,
  last = false,
  Icon,
  value,
  onChange,
}: InputProps) => {
  return (
    <View
      className={`flex flex-col gap-2 relative w-full ${last ? '' : 'mb-5'}`}
    >
      <Text className="font-exo font-semibold text-darkGrayText text-base">
        {label}
      </Text>
      {/** ====================== Text Input ============================= */}
      <View className="flex flex-row items-center justify-between px-4 bg-white h-12 rounded-lg shadow">
        <TextInput
          className={
            'font-exo flex items-center text-darkGrayText text-sm h-full w-full bg-white rounded-lg'
          }
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={label === 'Password'}
        />
        {/** ====================== Optional Icon ============================= */}
        {Boolean(Icon) ? (
          <Icon
            className="text-lightGrayText absolute right-0 mr-4"
            size={20}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Input;
