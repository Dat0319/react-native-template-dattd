import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import { Platform } from 'react-native';

import { I18n } from '@instances';
/**
 * Image Picker from Local Library
 * @author
 * @param title
 * @param cb
 */

export const imagePicker = (title, cb) => {
  let options: any = {
    title: title,
    cancelButtonTitle: I18n.trans('imagePicker.cancel'),
    takePhotoButtonTitle: I18n.trans('imagePicker.takePhoto'),
    chooseFromLibraryButtonTitle: I18n.trans('imagePicker.chooseFromLibrary'),
    mediaType: 'mixed',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, async (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      let path = response?.uri,
        width = response.width,
        height = response.height,
        size = response.fileSize;
      if (parseFloat(response.fileSize + '') / 1024 >= 2048) {
        let quality = Math.round(((2048 * 1024) / response.fileSize) * 100);
        if (quality > 100) {
          quality = 100;
        }
        if (width > 1000) {
          width = 900;
          height = 1300;
        }
        await ImageResizer.createResizedImage(
          path,
          width,
          height,
          'JPEG',
          quality,
          0
        ).then((uri) => {
          if (uri) {
            if (uri.uri) {
              path = uri.uri;
              width = uri.width;
              height = uri.height;
              size = uri.size;
            }
          }
        });
      }
      if (Platform.OS === 'android') {
        path = path.replace('file://', '');
      }
      let source = {
        uri: response.uri,
        path: path,
        height: height,
        width: width,
        mime: response.type,
        fileSize: response.fileSize,
        fileName: response.fileName
          ? response.fileName
          : Math.floor(Math.random() * Math.floor(999999999)) + '.jpg',
      };
      cb(source);
    }
  });
};

export const resizeImage = async (source: any, quality: number) => {
  await ImageResizer.createResizedImage(
    source.path,
    source.width,
    source.height,
    'JPEG',
    quality,
    0
  ).then((uri) => {
    return uri;
  });
};
