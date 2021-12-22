// import Realm from 'realm';
// import { DB } from 'constants/common';
// import FastImage from 'react-native-fast-image';
// import RNFetchBlob from 'rn-fetch-blob';

// class RealmDB {
//   realm: any;

//   constructor() {
//     this.realm = new Realm({
//       path: DB.NAME,
//       schema: [
//         {
//           name: 'camera',
//           properties: {
//             camera_id: { type: 'int', default: 0 },
//             id: 'string',
//             imei: { type: 'int', default: 0 },
//             name: 'string',
//             size: 'int',
//           },
//         },
//         {
//           name: 'images',
//           properties: {
//             image_id: { type: 'int', default: 0 },
//             camera_imei: { type: 'int', default: 0 },
//             id: 'string',
//             link: 'string',
//             path: 'string',
//             name: 'string',
//             size: 'int',
//             favoriteId: 'string',
//             create_date: 'int',
//           },
//         },
//       ],
//     });
//   }

//   // control Camera DB

//   findCameraByImei = (imei: string) => {
//     return this.realm?.objects(DB.CAMERA)?.filtered('imei = ' + imei);
//   };

//   nextCameraId = () => {
//     return this.realm.objects(DB.CAMERA).sorted('camera_id', true).length > 0
//       ? this.realm.objects(DB.CAMERA).sorted('camera_id', true)[0].camera_id + 1
//       : 1;
//   };

//   addNewCamera = (
//     item_id: string,
//     item_last_image_imei: string,
//     item_camera_imei: string,
//     item_settings_alias: string,
//   ) => {
//     this.realm.write(() => {
//       let id = this.nextCameraId();
//       this.realm.create(DB.CAMERA, {
//         camera_id: id,
//         id: item_id,
//         imei: item_last_image_imei
//           ? Number(item_camera_imei)
//           : Number(item_id.match(/\d/g)?.join('')),
//         name: item_settings_alias,
//         size: 0,
//       });
//     });
//   };

//   // control Image DB

//   findImageId = (id: string) => {
//     return this.realm?.objects(DB.IMAGE)?.filtered('id CONTAINS $0', id);
//   };
//   nextImageId = () => {
//     return this.realm.objects(DB.IMAGE).sorted('image_id', true).length > 0
//       ? this.realm.objects(DB.IMAGE).sorted('image_id', true)[0].image_id + 1
//       : 1;
//   };
//   addNewImage = (
//     item_imei: string,
//     item_id: string,
//     item_link: string,
//     item_image_name: string,
//     item_favorite_id: string,
//     path: string,
//     size: number | undefined,
//   ) => {
//     this.realm.write(() => {
//       let id = this.nextImageId();
//       this.realm.create(DB.IMAGE, {
//         image_id: id,
//         camera_imei: Number(item_imei),
//         id: item_id,
//         link: item_link,
//         path: path,
//         name: item_image_name,
//         size: size,
//         favoriteId: item_favorite_id,
//         create_date: new Date().getTime(),
//       });
//     });
//   };
//   updateImage = (item_id: string, path: string, size: number | undefined) => {
//     let check_image = this.findImageId(item_id);
//     this.realm.write(() => {
//       check_image[0].path = path;
//       check_image[0].size = size;
//       check_image[0].create_date = new Date().getTime();
//     });
//   };
//   deleteAnImage = (image_id: string) => {
//     this.realm.write(() => {
//       this.realm.delete(
//         this.realm.objects(DB.IMAGE).filtered('image_id =' + image_id),
//       );
//     });
//   };
//   sortImageByDate = () => {
//     let images = this.realm.objects(DB.IMAGE).sorted('create_date', false);
//     return images;
//   };

//   // control cached image
//   deleteCacheAnImage = (src: string) => {
//     this.realm.write(() => {
//       this.realm.delete(this.realm.objects(DB.IMAGE).filtered('link =' + src));
//     });
//     FastImage.getCachePath({ uri: src }).then((res) => {
//       RNFetchBlob.fs.unlink(res);
//     });
//   };
// }
// export default new RealmDB();
