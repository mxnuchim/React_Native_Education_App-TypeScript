import { View, Text } from 'react-native';
import React from 'react';

interface HeaderTextProps {
  text: string;
}

const HeaderText = ({ text }: HeaderTextProps) => {
  return <Text className="font-exoSemibold text-2xl">{text}</Text>;
};

export default HeaderText;
