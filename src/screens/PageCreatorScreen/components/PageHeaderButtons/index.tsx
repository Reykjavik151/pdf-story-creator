import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, View } from 'react-native';
import clsx from 'clsx';

type Props = {
  isDownloadActive: boolean;
  onCapturePage: () => void;
  onDownloadImageToGallery: () => void;
};

export const PageHeaderButtons = ({ isDownloadActive, onCapturePage, onDownloadImageToGallery }: Props) => {
  return (
    <View className="gap-4 flex-row pr-4">
      <TouchableOpacity onPress={onCapturePage}>
        <MaterialCommunityIcons name="check-decagram" size={36} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onDownloadImageToGallery} disabled={!isDownloadActive}>
        <MaterialCommunityIcons
          name="file-download"
          size={36}
          color="white"
          className={clsx(!isDownloadActive && 'opacity-40')}
        />
      </TouchableOpacity>
    </View>
  );
};
