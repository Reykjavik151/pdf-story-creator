import { NO_HEADER_OPTIONS } from '#constants/navigation';
import { Stack } from 'expo-router';

const PageStackLayout = () => (
  <Stack screenOptions={NO_HEADER_OPTIONS}>
    <Stack.Screen name="page-creator" />
    <Stack.Screen name="page-create-options" />
  </Stack>
);

export default PageStackLayout;
