import {Dimensions, Platform, NativeModules} from 'react-native';
const {width, height} = Dimensions.get('window');
const {PlatformConstants} = NativeModules;

export const Device = {
  width,
  height,
  isIos: Platform.OS === 'ios',
  deviceType: PlatformConstants.interfaceIdiom,
  isSmallDevice: width < 375,
};
