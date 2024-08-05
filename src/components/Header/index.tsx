import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type HeaderProps = {
  title: string;
  leftAbsoluteElement?: React.ReactNode;
  rightAbsoluteElement?: React.ReactNode;
};

export const Header = ({ title, leftAbsoluteElement, rightAbsoluteElement }: HeaderProps) => {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#008080' }}>
      <View className="bg-[#008080] py-6 row items-center">
        {!!leftAbsoluteElement && (
          <View className="absolute left-0 top-0 bottom-0 justify-center">{leftAbsoluteElement}</View>
        )}

        <Text className="text-white font-oswald-bold text-xl">{title}</Text>

        {!!rightAbsoluteElement && (
          <View className="absolute right-0 top-0 bottom-0 justify-center">{rightAbsoluteElement}</View>
        )}
      </View>
    </SafeAreaView>
  );
};
