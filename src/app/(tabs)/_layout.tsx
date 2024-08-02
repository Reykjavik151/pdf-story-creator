import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NO_HEADER_OPTIONS } from '#constants/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '#constants/colors';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        ...NO_HEADER_OPTIONS,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'file-settings' : 'file-settings-outline'}
              size={30}
              color={focused ? COLORS.orangeAccent : COLORS.blackAccent}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="story-creator"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? 'book-open-page-variant'
                  : 'book-open-page-variant-outline'
              }
              size={30}
              color={focused ? COLORS.orangeAccent : COLORS.blackAccent}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={30}
              color={focused ? COLORS.orangeAccent : COLORS.blackAccent}
            />
          ),
        }}
      />
    </Tabs>
  );
}
