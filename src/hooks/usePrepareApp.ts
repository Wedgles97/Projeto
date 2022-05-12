/* eslint-disable no-console */
/* eslint-disable camelcase */
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

import InterBlack from '@assets/fonts/Inter-Black.otf';

export function usePrepareApp() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        await Font.loadAsync({
          'Inter-Black': InterBlack,
          'Inter-SemiBoldItalic':
            'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
          'Montserrat-Regular': Montserrat_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return { onLayoutRootView, appIsReady };
}
