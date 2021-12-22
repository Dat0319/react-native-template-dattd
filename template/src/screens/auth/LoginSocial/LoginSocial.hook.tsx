import {Props} from './types';
import {
  loginGoogle,
  loginFacebook,
  loginApple,
  logOutSocial,
  Config,
  setStorage,
  StorageConstant,
  showMessageWarning,
  api,
} from '@instances';
import {authenticate, useDispatch} from '@redux';
import {AuthService} from '@services';

export function useModel(props: Props) {
  const dispatch = useDispatch();

  const _loginSocial = async (type, dataSocial) => {
    if (dataSocial?.email || type === 'Apple') {
      let result: any = await AuthService.login_social(type, dataSocial);
      if (result.code === 200) {
        api.setToken(result?.data?.access_token);
        dispatch(
          authenticate({
            token: result?.data?.access_token,
            user: result?.data?.user,
            locale: result?.locale,
          }),
        );
      } else {
        logOutSocial();
      }
    } else {
      showMessageWarning(
        `Sign in was unsuccessful. Please sign in with your ${type} account containing email!`,
      );
      logOutSocial();
    }
  };

  const _onSubmitFacebook = () => {
    loginFacebook(async (error, result) => {
      let dataSocial = {
        email: result.email,
        name: result.name,
        avatar: result.picture.data.url,
        id: result.id,
        token: result.id,
      };
      Config.oauth_provider = 'Facebook';
      await setStorage(StorageConstant.OAUTH_PROVIDER, Config.oauth_provider);
      _loginSocial('Facebook', dataSocial);
    });
  };

  const _onSubmitGoogle = () => {
    loginGoogle(async result => {
      let dataSocial = {
        email: result.user.email,
        name: result.user.name,
        avatar: result.user.photo,
        id: result.user.id,
        token: result.idToken,
      };
      Config.oauth_provider = 'Google';
      await setStorage(StorageConstant.OAUTH_PROVIDER, Config.oauth_provider);
      _loginSocial('Google', dataSocial);
    });
  };

  const _appleAuthentication = async callback => {
    loginApple(async result => {
      let dataSocial = {
        email: result.email,
        name: result.fullName.familyName + ' ' + result.fullName.givenName,
        avatar: '',
        id: result.user,
        token: result.identityToken,
      };
      _loginSocial('Apple', dataSocial);
    });
  };

  return {
    _appleAuthentication,
    _onSubmitFacebook,
    _onSubmitGoogle,
  };
}
