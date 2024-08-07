import { useCallback, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { Nullable } from '#types/Nullable';

export const useImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState<Nullable<ImagePicker.ImagePickerSuccessResult>>(null);

  const pickImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1.41],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result);
    }
  }, []);

  const resetImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return { resetImage, pickImage, selectedImage };
};
