import {Colors, FontSize} from '@assets';
import {FlashMessageProps, showMessage} from 'react-native-flash-message';
import {Platform, StatusBar} from 'react-native';

const DURATION = 3000;

export const showMessageCommon = (
  type: any = 'warning',
  title: string,
  message: string,
  props?: FlashMessageProps,
) => {
  showMessage({
    type: type,
    message: title,
    description: message,
    duration: DURATION,
    titleStyle: {
      fontSize: FontSize[17],
    },
    textStyle: {
      color: Colors.white,
      fontSize: FontSize[15],
    },
    style: {
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    ...props,
  });
};

export const showMessageDanger = (message: string) => {
  showMessageCommon('danger', 'Error', message);
};

export const showMessageSuccess = (
  message: string,
  props?: FlashMessageProps,
) => {
  showMessageCommon(
    'success',
    props?.message ? props.message : 'Success',
    message,
    props,
  );
};

export const showMessageWarning = (message: string) => {
  showMessageCommon('warning', 'Waring', message);
};
