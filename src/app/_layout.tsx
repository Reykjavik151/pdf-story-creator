import { Stack } from 'expo-router';
import { NO_HEADER_OPTIONS } from '#constants/navigation';

import '../../nativewind.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={NO_HEADER_OPTIONS}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
