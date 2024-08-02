import React from 'react';
import { Text, View, Image } from 'react-native';
import ViewShot from 'react-native-view-shot';

import { generalStyles } from '#utils/generalStyles';

import ReactLogo from '../../../assets/images/react-logo.png';
import { usePageCreatorScreenController } from './hooks/usePageCreatorScreenController';
import { Header } from '#components';
import { PageHeaderButtons } from './components/PageHeaderButtons';

export const PageCreatorScreen = () => {
  const {
    viewShotRef,
    lastViewShotImageUri,
    onCapturePage,
    onDownloadImageToGallery,
  } = usePageCreatorScreenController();

  return (
    <View className="flex-1">
      <Header
        title="Create your page!"
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
          <Text>PageCreatorScreen</Text>
          <Image className="bg-black rounded-lg" source={ReactLogo} />
        </View>
        {lastViewShotImageUri ? (
          <Image className="flex-1" source={{ uri: lastViewShotImageUri }} />
        ) : null}
      </ViewShot>
    </View>
  );
};
