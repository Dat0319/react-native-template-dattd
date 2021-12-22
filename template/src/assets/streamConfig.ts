import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const streamConfig = {
  appId: '959ee72b58c345bbb1593dfade0032ef',
};

export const streamInit = async () => {
  if (Platform.OS === 'android') {
    try {
      let cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
      if (cameraPermission !== RESULTS.GRANTED) {
        await request(PERMISSIONS.ANDROID.CAMERA);
      }
      let microPermission = await check(PERMISSIONS.ANDROID.RECORD_AUDIO);
      if (microPermission !== RESULTS.GRANTED) {
        await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
      }
    } catch (error) {
      console.log('Error: ', error.toString());
      return error.toString();
    }
  } else if (Platform.OS === 'ios') {
    try {
      let cameraPermission = await check(PERMISSIONS.IOS.CAMERA);
      if (cameraPermission !== RESULTS.GRANTED) {
        await request(PERMISSIONS.IOS.CAMERA);
      }
      let microPermission = await check(PERMISSIONS.IOS.MICROPHONE);
      if (microPermission !== RESULTS.GRANTED) {
        await request(PERMISSIONS.IOS.MICROPHONE);
      }
    } catch (error) {
      console.log('Error: ', error.toString());
      return error.toString();
    }
  }
};
