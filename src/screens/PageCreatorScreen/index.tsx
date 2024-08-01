import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';

import { generalStyles } from '#utils/generalStyles';

import ReactLogo from '../../../assets/images/react-logo.png';
import { usePageCreatorScreenController } from './hooks/usePageCreatorScreenController';

export const PageCreatorScreen = () => {
  const {
    viewShotRef,
    lastViewShotImageUri,
    onCapturePage,
    onDownloadImageToGallery,
  } = usePageCreatorScreenController();

  return (
    <>
      <ViewShot style={generalStyles.flex} ref={viewShotRef}>
        <View className="flex-1 justify-center items-center bg-primary">
          <Text>PageCreatorScreen</Text>
          <Image source={ReactLogo} />
        </View>
        {lastViewShotImageUri ? (
          <Image className="flex-1" source={{ uri: lastViewShotImageUri }} />
        ) : null}
      </ViewShot>

      {/** TODO: */}
      <TouchableOpacity
        onPress={onCapturePage}
        style={{
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
          position: 'absolute',
          bottom: 20,
        }}
      >
        <Text>Capture!</Text>
      </TouchableOpacity>

      {/** TODO: */}
      <TouchableOpacity
        onPress={onDownloadImageToGallery}
        style={{
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
          position: 'absolute',
          bottom: 100,
          right: 0,
        }}
      >
        <Text>Download!</Text>
      </TouchableOpacity>
    </>
  );
};
