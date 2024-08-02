import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { FONTS } from '#constants/fonts';

SplashScreen.preventAutoHideAsync();

export const useFontInit = () => {
  const [loaded, error] = useFonts({
    // FiraSans
    [FONTS.FIRASANS_BLACK]: require('../../assets/fonts/FiraSans/FiraSans-Black.ttf'),
    [FONTS.FIRASANS_BOLD]: require('../../assets/fonts/FiraSans/FiraSans-Bold.ttf'),
    [FONTS.FIRASANS_ITALIC]: require('../../assets/fonts/FiraSans/FiraSans-Italic.ttf'),
    [FONTS.FIRASANS_MEDIUM]: require('../../assets/fonts/FiraSans/FiraSans-Medium.ttf'),
    [FONTS.FIRASANS_REGULAR]: require('../../assets/fonts/FiraSans/FiraSans-Regular.ttf'),

    // Lato
    [FONTS.LATO_BLACK]: require('../../assets/fonts/Lato/Lato-Black.ttf'),
    [FONTS.LATO_BOLD]: require('../../assets/fonts/Lato/Lato-Bold.ttf'),
    [FONTS.LATO_ITALIC]: require('../../assets/fonts/Lato/Lato-Italic.ttf'),
    [FONTS.LATO_REGULAR]: require('../../assets/fonts/Lato/Lato-Regular.ttf'),

    // Montserrat
    [FONTS.MONTSERRAT_BLACK]: require('../../assets/fonts/Montserrat/Montserrat-Black.ttf'),
    [FONTS.MONTSERRAT_BOLD]: require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    [FONTS.MONTSERRAT_ITALIC]: require('../../assets/fonts/Montserrat/Montserrat-Italic.ttf'),
    [FONTS.MONTSERRAT_MEDIUM]: require('../../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    [FONTS.MONTSERRAT_REGULAR]: require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),

    // NotoSans
    [FONTS.NOTOSANS_BLACK]: require('../../assets/fonts/NotoSans/NotoSans-Black.ttf'),
    [FONTS.NOTOSANS_BOLD]: require('../../assets/fonts/NotoSans/NotoSans-Bold.ttf'),
    [FONTS.NOTOSANS_ITALIC]: require('../../assets/fonts/NotoSans/NotoSans-Italic.ttf'),
    [FONTS.NOTOSANS_MEDIUM]: require('../../assets/fonts/NotoSans/NotoSans-Medium.ttf'),
    [FONTS.NOTOSANS_REGULAR]: require('../../assets/fonts/NotoSans/NotoSans-Regular.ttf'),

    // OpenSans
    [FONTS.OPENSANS_BOLD]: require('../../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    [FONTS.OPENSANS_ITALIC]: require('../../assets/fonts/OpenSans/OpenSans-Italic.ttf'),
    [FONTS.OPENSANS_MEDIUM]: require('../../assets/fonts/OpenSans/OpenSans-Medium.ttf'),
    [FONTS.OPENSANS_REGULAR]: require('../../assets/fonts/OpenSans/OpenSans-Regular.ttf'),

    // Oswald
    [FONTS.OSWALD_BOLD]: require('../../assets/fonts/Oswald/Oswald-Bold.ttf'),
    [FONTS.OSWALD_MEDIUM]: require('../../assets/fonts/Oswald/Oswald-Medium.ttf'),
    [FONTS.OSWALD_REGULAR]: require('../../assets/fonts/Oswald/Oswald-Regular.ttf'),

    // Poppins
    [FONTS.POPPINS_BLACK]: require('../../assets/fonts/Poppins/Poppins-Black.ttf'),
    [FONTS.POPPINS_BOLD]: require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    [FONTS.POPPINS_ITALIC]: require('../../assets/fonts/Poppins/Poppins-Italic.ttf'),
    [FONTS.POPPINS_MEDIUM]: require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
    [FONTS.POPPINS_REGULAR]: require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),

    // Roboto
    [FONTS.ROBOTO_BLACK]: require('../../assets/fonts/Roboto/Roboto-Black.ttf'),
    [FONTS.ROBOTO_BOLD]: require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    [FONTS.ROBOTO_ITALIC]: require('../../assets/fonts/Roboto/Roboto-Italic.ttf'),
    [FONTS.ROBOTO_MEDIUM]: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    [FONTS.ROBOTO_REGULAR]: require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),

    // RobotoSlab
    [FONTS.ROBOTO_SLAB_BLACK]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Black.ttf'),
    [FONTS.ROBOTO_SLAB_BOLD]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Bold.ttf'),
    [FONTS.ROBOTO_SLAB_MEDIUM]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Medium.ttf'),
    [FONTS.ROBOTO_SLAB_REGULAR]: require('../../assets/fonts/RobotoSlab/RobotoSlab-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return loaded || error;
};
