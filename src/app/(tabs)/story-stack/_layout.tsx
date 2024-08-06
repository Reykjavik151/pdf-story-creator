import { NO_HEADER_OPTIONS } from '#constants/navigation';
import { Stack } from 'expo-router';

const StoryStackLayout = () => (
  <Stack screenOptions={NO_HEADER_OPTIONS}>
    <Stack.Screen name="story-creator" />
  </Stack>
);

export default StoryStackLayout;
