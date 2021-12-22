import { useState } from 'react';
import { Props } from './types';
import { validateForm, validateTrim } from '@instances';
import { SCREEN_ROUTER } from '@assets';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from '@services';

export function useModel(props: Props) {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    email: '',
  });
  const [disable, setDisable] = useState(false);

  const _validate = () => {
    let val = [
      {
        key: 'email',
        value: user.email ? user.email : '',
        rules: 'required|email',
        label: 'email',
      },
    ];
    let tempErrors = validateForm(val);
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const _onChange = (key: string, value: any) => {
    let userTemp = { ...user };
    switch (key) {
      case 'email':
        userTemp = Object.assign(userTemp, { email: value });
        break;
    }
    setUser(userTemp);
  };

  const _onSubmit = async () => {
    setDisable(true);
    let tempUser = validateTrim(user);
    setUser(tempUser);
    if (_validate()) {
      let result: any = await AuthService.forgot(user);
      setDisable(false);
      if (result.code === 200) {
        navigation.navigate(SCREEN_ROUTER.OTP_PASSWORD, {
          currentEmail: user.email,
        });
      } else {
        const { data } = result.data;
        if (Object.keys(data.errors).length > 0) {
          setErrors({
            email: !!data?.errors?.email ? data?.errors?.email[0] : '',
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
    _onChange,
    _onSubmit,
  };
}
