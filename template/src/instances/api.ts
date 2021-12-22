import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { API_ERROR_CODE, ApiConfigs } from './api-config';
import {
  showMessageDanger,
  showMessageSuccess,
  showMessageWarning,
} from './flashMessageCommon';
import { getMessageError } from './getErrorCommon';
import {
  setStorage,
  StorageConstant,
  removeItemStorage,
  getStorage,
} from './storage';
import { store, useSelector, RootReducerProps } from '@redux';
import { checkErrorStatus } from './getErrorCommon';

export type RequestConfigProperties = {
  showMessage: boolean;
  showMessageError: boolean;
};

export interface RequestQueueItemProperties {
  id: Number;
  config: RequestConfigProperties;
}

const DURATION = 5000;

class AxiosClass {
  static instance: AxiosClass;

  static default() {
    if (!AxiosClass.instance) {
      AxiosClass.instance = new AxiosClass();
    }
    return AxiosClass.instance;
  }

  api!: AxiosInstance;
  incrementRequestId = 0;
  requestQueue: Array<RequestQueueItemProperties> = [];
  token = '';
  storeKey = '';
  lang = store.getState().authReducers.locale;

  constructor() {
    this.api = axios.create(ApiConfigs);
    this.api.interceptors.request.use(this.checkRequest, this.errorRequest);
    this.api.interceptors.response.use(
      this.interceptorResponses,
      this.handleErrors
    );
  }

  checkRequest = async (conf) => {
    // let token = store.getState().authReducers.token;
    let token: any = await getStorage(StorageConstant.TOKEN);
    conf.headers.common['Authorization'] = token;
    this.lang = store.getState().authReducers.locale;
    return conf;
  };

  errorRequest = (error) => {
    return Promise.reject(error);
  };

  setToken = async (token: string) => {
    this.token = token;
    this.api.defaults.headers.common['Authorization'] = token;
    await setStorage(StorageConstant.TOKEN, token);
  };

  setTokenWithoutSaveLocal = async (token: string) => {
    this.token = token;
    this.api.defaults.headers.common['Authorization'] = token;
  };

  clear = () => {
    this.token = '';
    this.api.defaults.headers.common['Authorization'] = null;
    removeItemStorage(StorageConstant.TOKEN);
  };
  getToken = () => this.token;
  setStoreKey = (key: string) => {
    this.storeKey = key;
  };

  handleErrors = (error: AxiosError) => {
    console.log('error', error);
    let message = '';
    const { response, request } = error;
    console.log('interceptorResponses error response', response);
    console.log('interceptorResponses error request', request);
    if (response) {
      this.handleErrorOnResponse(response);
      return Promise.resolve(response);
    } else if (request) {
      NetInfo.fetch().then((isConnected) => {
        if (!isConnected) {
          message = 'No internet connection!';
        } else {
          message = error?.message;
        }
        showMessageDanger(message);
        return Promise.reject(error);
      });
    } else {
      message = error?.message;
    }
    showMessageDanger(message);
    return Promise.reject(error);
  };

  interceptorResponses = (response: AxiosResponse): Promise<any> => {
    console.log('response', response);
    const { data, config } = response;
    let optionShowMess = this.requestQueue.find((i) => {
      return i.id === this.incrementRequestId;
    });
    // console.log("-----optionShowMess", optionShowMess);

    // data.showAlert && this.pushFlashMessage(data.message, config, true)
    if (!!optionShowMess?.config.showMessage) {
      showMessageSuccess(
        (data?.data && data?.data?.errors?.message) || data?.message
      );
    }
    return Promise.resolve(data);
  };

  async handleErrorOnResponse(response: AxiosResponse) {
    const { data, status, config } = response;
    let message =
      (data?.data && data?.data?.errors?.message) ||
      data?.message ||
      getMessageError(response);

    let optionShowMess = this.requestQueue.find((i) => {
      return i.id === this.incrementRequestId;
    });
    let isShowError = !!optionShowMess?.config.showMessageError;
    checkErrorStatus(response);
    isShowError &&
      showMessageWarning(
        (data?.data && data?.data?.errors?.message) || data?.message
      );
    return Promise.reject({ message });
  }

  pushReqestQueue = (config: RequestConfigProperties) => {
    this.incrementRequestId++;
    this.requestQueue.push({
      id: this.incrementRequestId,
      config,
    });
  };

  get<T>(
    url: string,
    config: RequestConfigProperties,
    headers?: any
  ): Promise<T> {
    this.pushReqestQueue(config);
    let headerCheck = !!headers ? headers : {};
    return this.api.get(url, {
      headers: {
        _id: this.incrementRequestId,
        ...this.api.defaults.headers,
        ...headerCheck,
        locale: this.lang,
      },
    });
  }

  del<T>(url: string, config: RequestConfigProperties): Promise<T> {
    this.pushReqestQueue(config);
    return this.api.delete(url, {
      headers: {
        _id: this.incrementRequestId,
        ...this.api.defaults.headers,
        locale: this.lang,
      },
    });
  }

  postNormal<T>(
    url: string,
    body: any,
    config: RequestConfigProperties = {
      showMessage: true,
      showMessageError: true,
    },
    header: any = {}
  ): Promise<T> {
    this.pushReqestQueue(config);
    return this.api.post(url, body, {
      headers: {
        _id: this.incrementRequestId,
        ...header,
        locale: this.lang,
      },
    });
  }

  postFormData<T>(
    url: string,
    body: any,
    config: RequestConfigProperties = {
      showMessage: true,
      showMessageError: true,
    }
  ): Promise<T> {
    this.pushReqestQueue(config);
    // this.api.defaults.headers['Content-Type'] = 'multipart/form-data';
    // console.log('postFormData:', body, this.api.defaults.headers);
    return this.api.post(url, body, {
      headers: {
        _id: this.incrementRequestId,
        ['Content-Type']: 'multipart/form-data',
        locale: this.lang,
      },
    });
  }

  put<T>(
    url: string,
    body: any,
    config: RequestConfigProperties = {
      showMessage: true,
      showMessageError: true,
    }
  ): Promise<T> {
    this.pushReqestQueue(config);
    return this.api.put(url, body, {
      headers: {
        _id: this.incrementRequestId,
        locale: this.lang,
      },
    });
  }

  postForm<T>(
    url: string,
    body: any,
    config: RequestConfigProperties
  ): Promise<T> {
    // console.log(body, url, config);
    this.pushReqestQueue(config);
    let formData = new FormData();
    if (body instanceof FormData) {
      formData = body;
    } else {
      for (var attr in body) {
        if (body[attr].type && body[attr].type === 'image') {
          formData.append(attr.toString(), {
            uri: body[attr].path,
            type: body[attr].mime,
            name: body[attr].filename,
            size: body[attr].size,
          });
        } else {
          formData.append(attr.toString(), body[attr]);
        }
      }
    }
    return this.api.post(url, formData, {
      headers: {
        _id: this.incrementRequestId,
        // ...this.api.defaults.headers,
        // "Accept": 'application/body',
        'Content-Type': 'multipart/form-data',
        locale: this.lang,
      },
    });
  }
}

export default AxiosClass.default();
