import { Stack } from 'expo-router';
import { Provider as ReduxProvider } from 'react-redux';

import '../../nativewind.css';

import { NO_HEADER_OPTIONS } from '#constants/navigation';

import { store } from '../redux/store';
import { useFontInit } from '#hooks/useFontInit';

// Root navigation stack
const RootStack = () => (
  <Stack screenOptions={NO_HEADER_OPTIONS}>
    <Stack.Screen name="welcome" />
    <Stack.Screen name="(tabs)" />
  </Stack>
);

// Here we can apply different context providers
export default function RootLayout() {
  const isFontsLoadFinished = useFontInit();
  if (!isFontsLoadFinished) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <RootStack />
    </ReduxProvider>
  );
}
