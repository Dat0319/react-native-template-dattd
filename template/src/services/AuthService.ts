import {RequestConfigProperties, api, API_URL} from '@instances';

export function login(
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.LOGIN;
  return api.postNormal(URL, body, config);
}

export function login_facebook(
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.LOGIN_FACEBOOK;
  return api.postNormal(URL, body, config);
}

export function login_google(
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.LOGIN_GOOGLE;
  return api.postNormal(URL, body, config);
}

export function upload_profile(
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.UPLOAD_PROFILE;
  return api.postForm(URL, body, config);
}

export function forgot(
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.FORGOT_PASSWORD;
  return api.postNormal(URL, body, config);
}

export function reset_password(
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.RESET_PASSWORD;
  return api.postNormal(URL, body, config);
}

export function check_token_reset_password(
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.CHECK_TOKEN_RESET_PASSWORD;
  return api.postNormal(URL, body, config);
}

export function logout(
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: false,
  },
) {
  const URL = API_URL.AUTH.LOGOUT;
  return api.get(URL, config);
}
export function login_social(
  type: string,
  body: any,
  config: RequestConfigProperties = {
    showMessage: false,
    showMessageError: true,
  },
) {
  let URL;
  switch (type) {
    case 'Apple':
      URL = API_URL.AUTH.LOGIN_APPLE;
      break;
    case 'Facebook':
      URL = API_URL.AUTH.LOGIN_FACEBOOK;
      break;
    case 'Google':
      URL = API_URL.AUTH.LOGIN_GOOGLE;
      break;
  }
  return api.postNormal(URL, body, config);
}
