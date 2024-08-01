import React from 'react';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';

export const WelcomeScreen = () => {
  const router = useRouter();

  const goToStoryCreator = useCallback(() => {
    router.replace('/(tabs)');
  }, [router]);

  return (
    <View className="flex justify-center items-center">
      <Text>Welcome to the application!</Text>
      <Text onPress={goToStoryCreator}>CREATE YOUR STORY!</Text>
    </View>
  );
};
