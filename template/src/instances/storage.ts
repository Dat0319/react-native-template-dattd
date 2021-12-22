import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageConstant = {
  TOKEN: 'USER_TOKEN',
  FIRST_TIME: 'FIRST_TIME',
  LANGUAGE: 'LANGUAGE',
  NOTIFICATION_ENABLE: 'NOTIFICATION_ENABLE',
  LOCATION_TRACKING: 'LOCATION_TRACKING',
  IS_INTRO: 'IS_INTRO',
  OAUTH_PROVIDER: 'OAUTH_PROVIDER',
  ROOM_ID: 'ROOM_ID',
  IS_STREAM: 'IS_STREAM',
  PRODUCT_ID: 'PRODUCT_ID',
};

export async function getKeys() {
  return await AsyncStorage.getAllKeys();
}

export async function getAllStorage(cb?: (error: any) => void) {
  try {
    let allKeys = await getKeys();
    let data: any = await AsyncStorage.multiGet(allKeys);
    return Object.fromEntries(data);
  } catch (error: any) {
    cb !== undefined && cb(error);
  }
}

export async function getStorage(key, cb?: (error: any) => void) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    cb !== undefined && cb(error);
  }
}

export async function setStorage(key, value, cb?: (error: any) => void) {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    cb !== undefined && cb(error);
  }
}

export async function getMultiStorage(keys, cb?: (error: any) => void) {
  try {
    return Object.fromEntries(await AsyncStorage.multiGet(keys));
  } catch (error) {
    cb !== undefined && cb(error);
  }
}

export async function setMultiStorage(
  keyValuePairs,
  cb?: (error: any) => void
) {
  try {
    return AsyncStorage.multiSet(keyValuePairs);
  } catch (error) {
    cb !== undefined && cb(error);
  }
}

export async function removeItemStorage(key, cb?: (error: any) => void) {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    cb !== undefined && cb(error);
  }
}

export async function removeMultiStorage(keys, cb) {
  try {
    return await AsyncStorage.multiRemove(keys);
  } catch (error) {
    cb !== undefined && cb(error);
  }
}

export async function clearStorage(cb?: (error: any) => void) {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    cb !== undefined && cb(error);
  }
}
