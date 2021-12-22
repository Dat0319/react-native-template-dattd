export const Config = {
  token: '',
  chat_base_url: '',
  oauth_provider: '',
  isIntro: false,
  CODE_PUSH_STATUS: true,
  CODE_PUSH_DEV: true,
  CODE_PUSH_ANDROID_STAGING: 'codepushandroidstaging',
  CODE_PUSH_ANDROID_PRODUCTION: 'codepushandroidproduction',
  CODE_PUSH_IOS_STAGING: 'codepushiosstaging',
  CODE_PUSH_IOS_PRODUCTION: 'codepushiosproduction',
  socketURL: 'https://base.com/',
};

export const ApiConfigs = {
  // baseURL: "https://base.com/api/",
  baseURL: 'https://base.com/api/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    timeout: 5000,
  },
  timeout: 5000,
};

export const API_URL = {
  AUTH: {
    LOGIN: 'auth/login',
    LOGIN_GOOGLE: 'auth/google/callback',
    LOGIN_FACEBOOK: 'auth/facebook/callback',
    LOGIN_APPLE: 'auth/apple/callback',
    UPLOAD_PROFILE: 'customer/upload-profile',
    FORGOT_PASSWORD: 'auth/password/email',
    RESET_PASSWORD: 'auth/password/reset',
    CHECK_TOKEN_RESET_PASSWORD: 'auth/password/check',
    LOGOUT: 'auth/logout',
  },
};

export const API_CODE = {
  SUCCESS: {
    CODE: 200,
    MESSAGE: 'Oke',
  },
};
export const API_ERROR_CODE = {
  UPLOAD_EXCEED: {
    CODE: 413,
    MESSAGE: 'The file is too big !',
  },
  REQUEST_ERROR: {
    CODE: 400,
    MESSAGE: 'api_request_error',
  },
  INTERNET_SERVER_ERROR: {
    CODE: 500,
    MESSAGE: 'Cannot connect to server. Try Again later!',
  },
  AUTHENTICATE: {
    CODE: 401,
    MESSAGE: 'Your session has expired please login again',
  },
  VALIDATE: {
    CODE: 422,
    MESSAGE: 'Something went wrong. Try Again later!', //"api_request_validate"
  },
  VALIDATE_LOGIN: {
    CODE: 409,
    MESSAGE: 'Something went wrong. Try Again later!', // "api_request_validate"
  },
  SERVER_DATA_ERROR: {
    CODE: 404,
    MESSAGE: 'Something went wrong. Try Again later!',
  },
};
