import {
  NativeSyntheticEvent,
  Platform,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import React, { JSXElementConstructor } from 'react';

interface SearchInputProps {
  placeholder: string;
  Icon: any;
  value: string;
  onChange?: (text: string) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}

const SearchInput = ({
  placeholder,
  Icon,
  value,
  onChange,
  onFocus,
  onBlur,
}: SearchInputProps) => {
  return (
    <View className={`flex flex-col gap-2 relative `}>
      {/** ====================== Text Input ============================= */}
      <View className="flex flex-row items-center justify-between px-4 bg-white h-12 rounded-lg shadow">
        <TextInput
          className={
            'font-exo font-semibold flex items-center text-black text-base h-full w-full bg-white rounded-lg'
          }
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          onFocus={Platform.OS === 'web' ? onFocus : undefined}
          onPressIn={Platform.OS === 'web' ? undefined : onFocus}
          onEndEditing={onBlur}
        />
        {/** ====================== Search Icon ============================= */}

        <View
          className={`absolute right-0 flex items-center justify-center  py-2 bg-bgPurple rounded-lg ${
            Platform.OS === 'web' ? 'px-2 mr-[2%]' : 'px-1 mr-[2.5%]'
          }`}
        >
          <Icon className="text-white" size={20} />
        </View>
      </View>
    </View>
  );
};

export default SearchInput;
