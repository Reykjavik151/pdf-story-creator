import { useRef, useCallback } from 'react';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { useAppDispatch, useAppSelector } from '#redux/hooks';
import { selectLastCreatedPageUri } from '#redux/pages/pagesSelectors';
import { setCreatedPage } from '#redux/pages/pagesSlice';

export const usePageCreatorScreenController = () => {
  const dispatch = useAppDispatch();

  const lastViewShotImageUri = useAppSelector(selectLastCreatedPageUri);

  const viewShotRef = useRef<ViewShot>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const onDownloadImageToGallery = useCallback(async () => {
    // Only existing image URIs should be saved to the gallery
    if (!lastViewShotImageUri) {
      return;
    }

    if (permissionResponse?.granted) {
      await MediaLibrary.saveToLibraryAsync(lastViewShotImageUri);
    } else {
      await requestPermission();
    }
  }, [permissionResponse, lastViewShotImageUri, requestPermission]);

  const onViewShotCapture = useCallback(
    (uri: string) => {
      dispatch(setCreatedPage(uri));
    },
    [dispatch],
  );

  const onCapturePage = useCallback(() => {
    viewShotRef.current?.capture?.().then(onViewShotCapture);
  }, [onViewShotCapture]);

  return {
    viewShotRef,
    lastViewShotImageUri,
    onCapturePage,
    onDownloadImageToGallery,
  };
};
