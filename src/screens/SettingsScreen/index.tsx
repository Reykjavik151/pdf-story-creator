import { Header, ComingSoonBanner } from '#components';
import React from 'react';
import { View } from 'react-native';

export const SettingsScreen = () => {
  return (
    <View className="flex-1">
      <Header title="SETTINGS" />
      <View className="flex-1 justify-center items-center">
        <ComingSoonBanner />
      </View>
    </View>
  );
};
