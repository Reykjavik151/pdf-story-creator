import { COLORS } from '#constants/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

export const EditPageButton = () => {
  const router = useRouter();

  const onPress = useCallback(() => {
    router.navigate('(tabs)/page-stack/page-create-options');
  }, [router]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="rounded-full p-3 absolute right-4 bottom-4 bg-tealAccent">
        <MaterialCommunityIcons name="pencil" size={24} color={COLORS.primary} />
      </View>
    </TouchableOpacity>
  );
};
