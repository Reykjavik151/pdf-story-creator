import React from 'react';
import { Text, View, Image } from 'react-native';
import ViewShot from 'react-native-view-shot';

import { generalStyles } from '#utils/generalStyles';

import ReactLogo from '../../../assets/images/react-logo.png';
import { usePageCreatorScreenController } from './hooks/usePageCreatorScreenController';
import { Header } from '#components';
import { PageHeaderButtons } from './components/PageHeaderButtons';
import { EditPageButton } from './components';

export const PageCreatorScreen = () => {
  const {
    viewShotRef,
    lastViewShotImageUri,
    selectedImageFromGallery,
    onCapturePage,
    onDownloadImageToGallery,
    onPickImageFromGallery,
    // onResetImageFromGallery,
  } = usePageCreatorScreenController();

  return (
    <View className="flex-1">
      <Header
        title="NEW PAGE"
        rightAbsoluteElement={
          <PageHeaderButtons
            isDownloadActive={!!lastViewShotImageUri}
            onCapturePage={onCapturePage}
            onDownloadImageToGallery={onDownloadImageToGallery}
          />
        }
      />

      <ViewShot style={generalStyles.flex} ref={viewShotRef}>
        <View className="flex-1 justify-center items-center bg-primary">
          <Text onPress={onPickImageFromGallery}>PageCreatorScreen</Text>
          <Image className="bg-black rounded-lg" source={ReactLogo} />
          {!!selectedImageFromGallery && (
            <Image
              source={{ uri: selectedImageFromGallery.assets[0].uri }}
              style={{
                width: 200,
                height: 200,
                borderWidth: 2,
                borderColor: 'black',
              }}
            />
          )}
        </View>
        {lastViewShotImageUri ? <Image className="flex-1" source={{ uri: lastViewShotImageUri }} /> : null}

        <EditPageButton />
      </ViewShot>
    </View>
  );
};
