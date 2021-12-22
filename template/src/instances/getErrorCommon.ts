import {API_ERROR_CODE} from './api-config';
import {AxiosResponse} from 'axios';
import {store, logout} from '@redux';
import {removeItemStorage, StorageConstant} from './storage';
import api from './api';

export async function getMessageError(response: AxiosResponse) {
  const {data, status, config} = response;
  let message = '';
  let error: any = 0;

  if (response?.code) {
    return response?.message;
  }

  switch (status) {
    case API_ERROR_CODE.REQUEST_ERROR.CODE:
      message =
        data.message ||
        (data.error && data.error.message) ||
        API_ERROR_CODE.REQUEST_ERROR.MESSAGE;
      error = API_ERROR_CODE.REQUEST_ERROR;
      break;
    case API_ERROR_CODE.INTERNET_SERVER_ERROR.CODE:
      message =
        data.message ||
        (data.error && data.error.message) ||
        API_ERROR_CODE.INTERNET_SERVER_ERROR.MESSAGE;
      error = API_ERROR_CODE.INTERNET_SERVER_ERROR;
      break;
    case API_ERROR_CODE.AUTHENTICATE.CODE:
      message =
        data.message ||
        (data.error && data.error.message) ||
        API_ERROR_CODE.AUTHENTICATE.MESSAGE;
      error = data.error || API_ERROR_CODE.AUTHENTICATE;
      await removeItemStorage(StorageConstant.TOKEN);
      store.dispatch(logout());
      break;
    case API_ERROR_CODE.VALIDATE.CODE:
      message = getValidateMessage(data);
      error = API_ERROR_CODE.VALIDATE.CODE;
      break;
    case API_ERROR_CODE.VALIDATE_LOGIN.CODE:
      message =
        data.message ||
        data.error.message ||
        API_ERROR_CODE.AUTHENTICATE.MESSAGE;
      error = API_ERROR_CODE.VALIDATE_LOGIN.CODE;
      break;
    case API_ERROR_CODE.SERVER_DATA_ERROR.CODE:
      message =
        data.message ||
        data.error.message ||
        API_ERROR_CODE.SERVER_DATA_ERROR.MESSAGE;
      error = API_ERROR_CODE.SERVER_DATA_ERROR.CODE;
      break;
    default:
      message = 'Something went wrong. Try Again later!';
      error = new Error('404');
      break;
  }

  return message;
}

export async function checkErrorStatus(response: AxiosResponse) {
  const {data, status, config} = response;

  switch (status) {
    case API_ERROR_CODE.REQUEST_ERROR.CODE:
      break;
    case API_ERROR_CODE.INTERNET_SERVER_ERROR.CODE:
      break;
    case API_ERROR_CODE.AUTHENTICATE.CODE:
      api.clear();
      store.dispatch(logout());
      break;
    case API_ERROR_CODE.VALIDATE.CODE:
      break;
    case API_ERROR_CODE.VALIDATE_LOGIN.CODE:
      break;
    case API_ERROR_CODE.SERVER_DATA_ERROR.CODE:
      break;
    default:
      break;
  }
}

export function getValidateMessage(data: {
  message: string;
  errors: {[key: string]: Array<string>};
}) {
  try {
    const {errors} = data;
    let listError = Object.keys(errors).map(key => {
      return errors[key].pop();
    });

    let message = listError.join('\n');
    return message ? message : data.message;
  } catch (error) {
    console.log('----getValidateMessage err', error);
    return API_ERROR_CODE.VALIDATE.MESSAGE;
  }
}
