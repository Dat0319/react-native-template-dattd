import messaging from '@react-native-firebase/messaging';
import {StackNavigationProp} from '@react-navigation/stack';
import {Device} from '@assets';
import {showMessageSuccess} from './flashMessageCommon';
import {navigate} from '@navigation';
// import { setReadNotificationAction, store, setBadgeAction, getListSampleAction } from "@store";

function createAppNotification() {
  let fcmToken = '';
  let badgeCount = 0;
  let lastMessageId = '';
  // let navigation: StackNavigationProp<any> = <StackNavigationProp<any>>{};

  const init = (propsNavigation?: StackNavigationProp<any>) => {
    // navigation = propsNavigation;
    requestUserPermission();
    messaging().onTokenRefresh((newFcmToken: string) => {
      saveDeviceToken(newFcmToken);
    });
    messaging()
      .getInitialNotification()
      .then(async notification => {
        if (!notification) return;
        if (notification.messageId !== lastMessageId) {
          lastMessageId = notification.messageId || '';
        }
        badgeCount += 1;
        // console.log("-----getInitialNotification", notification);
        handleUserInteractionNotification(notification);
      });
    messaging().onMessage(notification => {
      console.log('-----onMessage', notification);
      if (notification.messageId !== lastMessageId) {
        lastMessageId = notification.messageId || '';
        badgeCount += 1;
        handleNotiOnForeground(notification);
      }
    });
    messaging().onNotificationOpenedApp(notification => {
      if (notification.messageId !== lastMessageId) {
        lastMessageId = notification.messageId || '';
      }
      badgeCount -= 1;
      // console.log("-----onNotificationOpenedApp", notification);
      handleUserInteractionNotification(notification);
    });
    messaging().setBackgroundMessageHandler(async notification => {
      if (notification.messageId !== lastMessageId) {
        lastMessageId = notification.messageId || '';
      }
      badgeCount += 1;
      // console.log("-----setBackgroundMessageHandler", notification);
      handleUserInteractionNotification(notification);
    });
  };

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const newFcmToken = await messaging().getToken();
      console.log('newFcmTokennewFcmTokennewFcmToken', newFcmToken);
      saveDeviceToken(newFcmToken);
    }
  };

  const setBadgeCount = (count: number) => {
    console.log('count badge', count);
    badgeCount = count;
    // PushNotification.setApplicationIconBadgeNumber(count)
  };

  const handleUserInteractionNotification = (message: any) => {
    // console.log("handleUserInteractionNotification", message);
    console.log('0000000 0000000 0000000 0000000 0000000 0000000');
    let {notification, data} = message;
    let title = '';
    let bodyMessage = '';
    // let params = JSON.parse(data.params);
    let params = data;
    // store.dispatch(setBadgeAction(parseInt(data.total_new_notify)));
    try {
      if (Device.isIos) {
        title = notification.title;
        // bodyMessage = notification.body;
      } else {
        title = notification.title;
        // bodyMessage = notification.message;
      }
      if (!!params.request && !!params.request.id) {
        // let request: DETAIL_REQUEST = params.request;
        // console.log("-----request", request)
        // GlobalUIManager.view.showPopup(request)
        return;
      }
      // store.dispatch(setReadNotificationAction({ notify_code: data.notify_code }));
      // store.dispatch(getListSampleAction());
      navigate(data.screen, {
        data: {id: parseInt(data.sample_id)},
        // status: typeSample.default,
        loadData: true,
      });
    } catch (error) {
      console.log('----err', error);
    }
    // GlobalUIManager.navigation.navigate(data.screen, params)
  };

  const getToken = async () => await messaging().getToken();

  const handleNotiOnForeground = (message: any) => {
    let {notification, data} = message;
    let title = '';
    let bodyMessage = '';
    // let params = JSON.parse(data.params);
    let params = data;

    try {
      if (Device.isIos) {
        title = notification.title;
        // bodyMessage = notification.body;
      } else {
        title = notification.title;
        // bodyMessage = notification.message;
      }
      if (!!params.request && !!params.request.id) {
        // let request: DETAIL_REQUEST = params.request;
        // console.log("-----request", request)
        // GlobalUIManager.view.showPopup(request)
        return;
      }
      // store.dispatch(setBadgeAction(parseInt(data.total_new_notify)));

      showMessageSuccess(title, {
        onPress() {
          // store.dispatch(setReadNotificationAction({ notify_code: data.notify_code }));
          navigate(data.screen, {
            data: {id: parseInt(data.sample_id)},
            // status: typeSample.default,
            loadData: true,
          });
        },
      });
    } catch (error) {
      console.log('----err', error);
    }
  };

  const saveDeviceToken = (newFcmToken: string) => {
    console.log('-----newFcmToken', newFcmToken);
    fcmToken = newFcmToken;
    try {
      // NotificationServices.saveDeviceTokenService({
      //     "token": newFcmToken,
      //     "type": Device.isIos ? 0 : 1,
      //     "os_version": Platform.Version,
      //     "app_version": "1.0.1",
      //     "os_name": Platform.OS,
      //     "locale": "en",
      //     "user_type": "0"
      // })
    } catch (error) {
      console.log('----err', error);
    }
  };

  return {
    setBadgeCount,
    requestUserPermission,
    fcmToken,
    init,
    getToken,
  };
}

export const AppNotification = createAppNotification();
