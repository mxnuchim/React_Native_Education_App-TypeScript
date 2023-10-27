import {
  View,
  Text,
  Image,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import { images } from '../../assets';

interface SectionHeaderProps {
  title: string;
  onFilterPress: (event: GestureResponderEvent) => void;
  tintColor: string;
}

const { funnel } = images;

const SectionHeader = ({
  title,
  onFilterPress,
  tintColor,
}: SectionHeaderProps) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="font-exoSemibold text-darkGrayText text-lg capitalize">
        {title}
      </Text>
      <Pressable className="" onPress={onFilterPress}>
        <Image
          source={funnel}
          style={{ width: 28, height: 28 }}
          tintColor={tintColor}
        />
      </Pressable>
    </View>
  );
};

export default SectionHeader;
