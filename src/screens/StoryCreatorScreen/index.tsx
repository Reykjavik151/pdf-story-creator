import { ComingSoonBanner, Header } from '#components';
import React from 'react';
import { View } from 'react-native';

export const StoryCreatorScreen = () => {
  return (
    <View className="flex-1">
      <Header title="NEW STORY" />
      <View className="flex-1 justify-center items-center">
        <ComingSoonBanner />
      </View>
    </View>
  );
};
