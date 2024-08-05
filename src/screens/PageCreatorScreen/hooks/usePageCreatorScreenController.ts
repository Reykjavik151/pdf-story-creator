import { useRef, useCallback, useEffect } from 'react';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { useAppDispatch, useAppSelector } from '#redux/hooks';
import { selectLastCreatedPageUri } from '#redux/pages/pagesSelectors';
import { addCreationOptions, setCreatedPage } from '#redux/pages/pagesSlice';
import { useImagePicker } from '#hooks/useImagePicker';
import { usePrevious } from 'react-native-hookbox';

export const usePageCreatorScreenController = () => {
  const dispatch = useAppDispatch();

  const lastViewShotImageUri = useAppSelector(selectLastCreatedPageUri);

  const viewShotRef = useRef<ViewShot>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const {
    selectedImage: selectedImageFromGallery,
    pickImage: onPickImageFromGallery,
    resetImage: onResetImageFromGallery,
  } = useImagePicker();
  const previousSelectedImageFromGallery = usePrevious(selectedImageFromGallery);

  // Update page creation options after selectedImageFromGallery changes
  useEffect(() => {
    if (selectedImageFromGallery && selectedImageFromGallery !== previousSelectedImageFromGallery) {
      dispatch(
        addCreationOptions({
          imageUri: selectedImageFromGallery.assets[0].uri,
        }),
      );
    }
  }, [dispatch, selectedImageFromGallery, previousSelectedImageFromGallery]);

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

  const onCapturePage = useCallback(() => {
    viewShotRef.current?.capture?.().then((uri) => {
      dispatch(setCreatedPage(uri));
    });
  }, [dispatch]);

  return {
    viewShotRef,
    lastViewShotImageUri,
    selectedImageFromGallery,
    onCapturePage,
    onDownloadImageToGallery,
    onPickImageFromGallery,
    onResetImageFromGallery,
  };
};
