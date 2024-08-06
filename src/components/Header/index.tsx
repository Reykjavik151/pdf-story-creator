import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '#constants/colors';
import { generalStyles } from '#utils/generalStyles';

export type HeaderProps = {
  title: string;
  leftAbsoluteElement?: React.ReactNode;
  rightAbsoluteElement?: React.ReactNode;
};

export const Header = ({ title, leftAbsoluteElement, rightAbsoluteElement }: HeaderProps) => {
  const { top: topInset } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: topInset }} className="border-b-8 border-orangeAccent">
      {/** Background Linear Gradient */}
      <LinearGradient colors={[COLORS.secondaryDarkGray, COLORS.tealAccent]} style={generalStyles.absoluteContainer} />

      <View className="pt-2 pb-6 row items-center shadow-xl">
        {!!leftAbsoluteElement && (
          <View className="absolute left-0 top-0 bottom-0 justify-center">{leftAbsoluteElement}</View>
        )}

        <Text className="text-white font-oswald-bold text-xl -mb-2 mt-2">{title}</Text>

        {!!rightAbsoluteElement && (
          <View className="absolute right-0 top-0 bottom-0 justify-center">{rightAbsoluteElement}</View>
        )}
      </View>
    </View>
  );
};
