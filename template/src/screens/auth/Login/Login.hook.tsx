import {useState} from 'react';
import {Props} from './types';
import {validateForm, validateTrim, api} from '@instances';
import {SCREEN_ROUTER} from '@assets';
import {navigate} from '@navigation';
import {useDispatch} from 'react-redux';
import {authenticate} from '@redux';
import {AuthService} from '@services';

export function useModel(props: Props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    // email: 'nguyet.nguyen@adamodigital.com',
    // password: '123456789',
    // email: 'daominhduc190999+1@gmail.com',
    // password: '12345678',
    email: 'donhat36@gmail.com',
    password: '12345678',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [disable, setDisable] = useState(false);

  const _validate = () => {
    let val = [
      {
        key: 'email',
        value: user.email ? user.email : '',
        rules: 'required|email|max_length[50]',
        label: 'email',
      },
      {
        key: 'password',
        value: user.password ? user.password : '',
        rules: 'required|min_length[6]|max_length[30]',
        label: 'password',
      },
    ];
    let tempErrors = validateForm(val);
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const _onChange = (key: string, value: any) => {
    let userTemp = {...user};
    switch (key) {
      case 'email':
        userTemp = Object.assign(userTemp, {email: value});
        break;
      case 'password':
        userTemp = Object.assign(userTemp, {password: value});
        break;
    }
    setUser(userTemp);
  };

  const _onSubmit = async () => {
    setDisable(true);
    let tempUser = validateTrim(user);
    setUser(tempUser);
    if (_validate()) {
      let result: any = await AuthService.login(user);
      setDisable(false);
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
        const {data} = result.data;
        if (Object.keys(data.errors).length > 0) {
          setErrors({
            email: !!data?.errors?.email ? data?.errors?.email[0] : '',
            password: !!data?.errors?.password ? data?.errors?.password[0] : '',
          });
        }
      }
    } else {
      setDisable(false);
    }
  };

  const _onForgot = () => {
    navigate(SCREEN_ROUTER.FORGOT_PASSWORD);
  };

  return {
    user,
    errors,
    disable,
    _onChange,
    _onSubmit,
    _onForgot,
  };
}
