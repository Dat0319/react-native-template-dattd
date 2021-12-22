import React from 'react';
import { View } from 'react-native';
import { CommonButton, CommonText, CommonInput, Header } from '@components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { I18n } from '@instances';
import { useModel } from './Login.hook';
import { Props } from './types';
import { styles } from './styles';
import { Colors } from '@assets';

export const Login: React.FC<Props> = (props) => {
  const { user, errors, disable, _onChange, _onSubmit, _onForgot } =
    useModel(props);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: Colors.white }}>
      <Header center="logo" />
      <View style={styles.container}>
        <View style={styles.info}>
          <CommonText style={styles.ttl}>
            {I18n.trans('login.title')}
          </CommonText>
          <CommonText style={styles.desc}>
            {I18n.trans('login.description')}
          </CommonText>
        </View>

        <CommonInput
          placeholder={I18n.trans('login.email')}
          label={I18n.trans('login.email')}
          value={user.email}
          onChangeText={(value) => _onChange('email', value)}
          Error={errors.email}
        />
        <CommonInput
          placeholder={I18n.trans('login.password')}
          label={I18n.trans('login.password')}
          value={user.password}
          onChangeText={(value) => _onChange('password', value)}
          secureTextEntry
          Error={errors.password}
        />
        {!errors.password && !disable && (
          <CommonText style={styles.suggest}>
            {I18n.trans('login.suggestPassword')}
          </CommonText>
        )}
        <CommonButton
          title={I18n.trans('login.nextButton')}
          style={styles.button}
          onPress={_onSubmit}
          disabled={disable}
        />
        <CommonText onPress={_onForgot} style={styles.forgot}>
          {I18n.trans('login.forgotPassword')}
        </CommonText>
      </View>
    </KeyboardAwareScrollView>
  );
};
