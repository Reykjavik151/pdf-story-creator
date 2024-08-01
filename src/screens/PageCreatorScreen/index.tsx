import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Text, View, Image } from 'react-native';
import ViewShot from 'react-native-view-shot';
import ReactLogo from '../../../assets/images/react-logo.png';
import { generalStyles } from '#utils/generalStyles';

export const PageCreatorScreen = () => {
  const ref = useRef<ViewShot>(null);
  const [imageUri, setImageUri] = useState<string>();

  // Capture the screen and download the image as a file
  const onViewShotCapture = useCallback((uri: string) => {
    setImageUri(uri);
  }, []);

  const capturePage = useCallback(() => {
    ref.current?.capture?.().then(onViewShotCapture);
  }, [onViewShotCapture]);

  return (
    <ViewShot style={generalStyles.flex} ref={ref}>
      <View className="flex-1 justify-center items-center bg-primary">
        <Text>PageCreatorScreen</Text>
        <Image source={ReactLogo} />
      </View>
      {imageUri ? (
        <Image className="flex-1" source={{ uri: imageUri }} />
      ) : null}
    </ViewShot>
  );
};
