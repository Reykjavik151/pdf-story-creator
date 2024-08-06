import React from 'react';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '#constants/colors';
import { generalStyles } from '#utils/generalStyles';

export const WelcomeScreen = () => {
  const router = useRouter();

  const goToStoryCreator = useCallback(() => {
    router.replace('/(tabs)/page-stack/page-creator');
  }, [router]);

  return (
    <View className="flex-1 justify-center items-center">
      <LinearGradient colors={[COLORS.secondaryDarkGray, COLORS.tealAccent]} style={generalStyles.absoluteContainer} />
      <Text className="text-primary font-firasans-regular text-xl text-center pb-8">
        {'Welcome to the \nPDF Story Creator!'}
      </Text>
      <Text className="text-primary font-firasans-black text-2xl" onPress={goToStoryCreator}>
        CREATE YOUR STORY!
      </Text>
    </View>
  );
};
