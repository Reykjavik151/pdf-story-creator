import { BackgroundShadow } from '#components/BackgroundShadow';
import { SectionTitle } from '#components/SectionTitle';
import { useImagePicker } from '#hooks/useImagePicker';
import { Nullable } from '#types/Nullable';
import IoniconsIcon from '@expo/vector-icons/Ionicons';
import clsx from 'clsx';
import { useEffect, useMemo } from 'react';
import { Pressable, View, Image } from 'react-native';

type ImagePickerProps = {
  title?: string;
  onSelectImage?: (imageUri: Nullable<string>) => void;
};

export const ImagePicker = ({ title, onSelectImage }: ImagePickerProps) => {
  const { pickImage, resetImage, selectedImage } = useImagePicker();

  useEffect(() => {
    onSelectImage?.(selectedImage?.assets[0].uri ?? null);
  }, [onSelectImage, selectedImage]);

  const containerClassName = useMemo(() => {
    if (!selectedImage) {
      return 'border-dashed border-secondaryDarkGray border-2';
    }
    return 'border-solid border-orangeAccent border-4';
  }, [selectedImage]);

  return (
    <>
      {!!title && <SectionTitle>{title}</SectionTitle>}
      <Pressable onPress={pickImage}>
        <View
          className={clsx(
            containerClassName,
            'h-[320px] rounded-2xl bg-secondaryLightGray justify-center items-center',
          )}
        >
          {!selectedImage && <IoniconsIcon name="images" size={56} />}
          {selectedImage && (
            <Image
              resizeMode="cover"
              source={{ uri: selectedImage.assets[0].uri }}
              className="h-full w-full rounded-xl"
            />
          )}
        </View>
        {selectedImage && <BackgroundShadow className="bg-orangeAccent" />}
      </Pressable>
    </>
  );
};
