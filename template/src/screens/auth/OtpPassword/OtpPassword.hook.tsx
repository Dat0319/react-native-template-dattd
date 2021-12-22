import {useState} from 'react';
import {Props} from './types';
import {validateForm, validateTrim} from '@instances';
import {SCREEN_ROUTER} from '@assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AuthService} from '@services';

export function useModel(props: Props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {currentEmail} = route.params;
  const [user, setUser] = useState({
    otp: '',
  });
  const [errors, setErrors] = useState({
    otp: '',
  });
  const [disable, setDisable] = useState(false);

  const _validate = () => {
    let val = [
      {
        key: 'otp',
        value: user.otp ? user.otp : '',
        rules: 'required|mustNumber',
        label: 'code',
      },
    ];
    let tempErrors = validateForm(val);
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const _onChange = (key: string, value: any) => {
    let userTemp = {...user};
    switch (key) {
      case 'otp':
        userTemp = Object.assign(userTemp, {otp: value});
        break;
    }
    setUser(userTemp);
  };

  const _onResendCode = async () => {
    let result: any = await AuthService.forgot({email: currentEmail});
  };

  const _onSubmit = async () => {
    setDisable(true);
    let tempUser = validateTrim(user);
    setUser(tempUser);
    if (_validate()) {
      let result: any = await AuthService.check_token_reset_password({
        email: currentEmail,
        code: user.otp,
      });
      setDisable(false);
      if (result.code === 200) {
        navigation.navigate(SCREEN_ROUTER.RESET_PASSWORD, {
          currentEmail: currentEmail,
        });
      } else {
        const {data} = result.data;
        if (Object.keys(data.errors).length > 0) {
          setErrors({
            otp: !!data?.errors?.code ? data?.errors?.code[0] : '',
          });
        }
      }
    } else {
      setDisable(false);
    }
  };

  return {
    user,
    errors,
    disable,
    currentEmail,
    _onChange,
    _onSubmit,
    _onResendCode,
  };
}
