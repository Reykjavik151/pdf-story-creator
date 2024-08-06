import { NO_HEADER_OPTIONS } from '#constants/navigation';
import { Stack } from 'expo-router';

const SettingsStackLayout = () => (
  <Stack screenOptions={NO_HEADER_OPTIONS}>
    <Stack.Screen name="settings" />
  </Stack>
);

export default SettingsStackLayout;
