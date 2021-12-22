// import {put, takeEvery, call} from 'redux-saga/effects';
// import {AUTHENTICATE} from '../actions/type';
// import {SCREEN_ROUTER} from '@assets';
// import { API, SCREEN_ROUTER } from "@assets";
// import {NavigationUtils} from '@navigation';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {showMessage, hideMessage} from 'react-native-flash-message';

// const saveTokenToStorage = token => {
//   AsyncStorage.setItem('token', token);
// };

// export function* login(action) {
//   try {
//       const response = yield call(API.login, action.payload)
//       saveTokenToStorage(response.access_token)
//       yield put({
//           type: AUTHENTICATE_SUCCESS, payload: response
//       })
//   } catch (error) {
//       if (error.response.data.data.status === 0) {
//           const { status } = error.response.data.data
//           NavigationUtils.navigate(SCREEN_ROUTER.VERIFY, { email: action.payload.email, status: status })
//       }
//       yield put({
//           type: AUTHENTICATE_FAIL, payload: error.response.data
//       })
//   }
// }

// export const watchFetchAuthenticate = takeEvery(AUTHENTICATE, login);
