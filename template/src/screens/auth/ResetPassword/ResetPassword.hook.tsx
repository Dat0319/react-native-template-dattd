import {useState} from 'react';
import {Props} from './types';
import {validateForm, validateTrim} from '@instances';
import {SCREEN_ROUTER} from '@assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AuthService} from '@services';

export function useModel(props: Props) {
  const navigation = useNavigation();
  const route = useRoute();
  const {currentEmail} = route.params;
  const [user, setUser] = useState({
    email: currentEmail,
    password: '',
    confirm_password: '',
  });
  const [errors, setErrors] = useState({
    password: '',
    confirm_password: '',
  });
  const [disable, setDisable] = useState(false);

  const _validate = () => {
    let val = [
      {
        key: 'password',
        value: user.password ? user.password : '',
        rules: 'required|min_length[6]|max_length[30]',
        label: 'password',
      },
      {
        key: 'confirm_password',
        value: user.confirm_password ? user.confirm_password : '',
        rules: `required|min_length[6]|max_length[30]|match[${user.password}]`,
        label: 'password confirmation',
      },
    ];
    let tempErrors = validateForm(val);
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const _onChange = (key: string, value: any) => {
    let userTemp = {...user};
    switch (key) {
      case 'password':
        userTemp = Object.assign(userTemp, {password: value});
        break;
      case 'confirm_password':
        userTemp = Object.assign(userTemp, {confirm_password: value});
        break;
    }
    setUser(userTemp);
  };

  const _onSubmit = async () => {
    setDisable(true);
    let tempUser = validateTrim(user);
    setUser(tempUser);
    if (_validate()) {
      let result: any = await AuthService.reset_password({
        password: user.password,
        password_confirmation: user.confirm_password,
        email: currentEmail,
      });
      setDisable(false);
      if (result.code === 200) {
        navigation.navigate(SCREEN_ROUTER.LOGIN, {currentEmail: user.email});
      } else {
        const {data} = result.data;
        if (Object.keys(data.errors).length > 0) {
          setErrors({
            ...errors,
            confirm_password: !!data?.errors?.password_confirmation
              ? data?.errors?.password_confirmation[0]
              : '',
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
