import React, {useState} from 'react';
import {Props} from './types';
import {setStorage, StorageConstant} from '@instances';
import {SCREEN_ROUTER} from '@assets';
import {useNavigation} from '@react-navigation/native';

export function useModel(props: Props) {
  const [intro, setIntro] = useState(true);
  const [disable, setDisable] = useState(false);
  const navigation = useNavigation();

  const _onSubmit = async () => {
    navigation.navigate(SCREEN_ROUTER.LOGIN);
    await setStorage(StorageConstant.IS_INTRO, '0');
  };

  const _introSuccess = () => {
    setIntro(false);
  };

  return {
    intro,
    setIntro,
    disable,
    _onSubmit,
    _introSuccess,
  };
}
