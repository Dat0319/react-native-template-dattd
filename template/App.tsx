import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Platform, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { AppNavigator, NavigationUtils } from '@navigation';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import FlashMessage from 'react-native-flash-message';
import { AppNotification } from '@instances';
import { PersistGate } from 'redux-persist/integration/react';
import { StorageConstant, getStorage, api, Config } from '@instances';
import { GlobalUI } from '@components';

const CODE_PUSH_DEPLOYMENT_KEY = Platform.select({
  ios: Config.CODE_PUSH_DEV
    ? Config.CODE_PUSH_IOS_STAGING
    : Config.CODE_PUSH_IOS_PRODUCTION,
  android: Config.CODE_PUSH_DEV
    ? Config.CODE_PUSH_ANDROID_STAGING
    : Config.CODE_PUSH_ANDROID_PRODUCTION,
});

const pushOptions = {
  // updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
  deploymentKey: CODE_PUSH_DEPLOYMENT_KEY,
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _environment();
    SplashScreen.hide();
    AppNotification.init();
  }, []);

  const _environment = async () => {
    let token: any = await getStorage(StorageConstant.TOKEN);
    if (token !== null) {
      api.setToken(token);
    }
    let intro = await getStorage(StorageConstant.IS_INTRO);
    if (intro !== '0') {
      Config.isIntro = true;
    }
    setLoading(true);
  };

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {loading && (
            <AppNavigator
              ref={(navigatorRef) =>
                NavigationUtils.setTopLevelNavigator(navigatorRef)
              }
            />
          )}
        </PersistGate>
      </Provider>
      <GlobalUI />
      <FlashMessage position="top" floating={true} hideStatusBar={false} />
    </>
  );
};

export default Config.CODE_PUSH_STATUS ? codePush(pushOptions)(App) : App;
