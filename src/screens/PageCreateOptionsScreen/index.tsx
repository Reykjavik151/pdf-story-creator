import { ExtendedTextInput, Header, ImagePicker } from '#components';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { usePageCreateOptionsScreenController } from './hooks/usePageCreateOptionsScreenController';

export const PageCreateOptionsScreen = () => {
  const { titleInputValue, onTitleInputChange } = usePageCreateOptionsScreenController();

  return (
    <View className="flex-1">
      <Header title="PAGE OPTIONS" />
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        <ScrollView
          className="flex-1 p-4 bg-primary"
          contentContainerClassName="pb-16"
          showsVerticalScrollIndicator={false}
        >
          <ImagePicker title="Image" />

          <View className="h-8" />

          <ExtendedTextInput
            title="Text"
            value={titleInputValue}
            onChangeText={onTitleInputChange}
            multiline
            numberOfLines={5}
            className="max-h-80"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
