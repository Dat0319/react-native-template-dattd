import React from 'react';
import { View } from 'react-native';
import { CommonButton, CommonText, CommonInput, Header } from '@components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { I18n } from '@instances';
import { useModel } from './ResetPassword.hook';
import { Props } from './types';
import { styles } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const ResetPassword: React.FC<Props> = (props) => {
  const { user, errors, disable, _onChange, _onSubmit } = useModel(props);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: Colors.white }}>
      <Header left="back" center="logo" />
      <View style={styles.container}>
        <View style={styles.info}>
          <CommonText style={styles.ttl}>
            {I18n.trans('resetPassword.title')}
          </CommonText>
          <CommonText style={styles.desc}>
            {I18n.trans('resetPassword.description')}
          </CommonText>
        </View>

        <CommonInput
          placeholder="Enter your email"
          label="Email"
          value={user.email}
          // onChangeText={(value) => _onChange('email', value)}
          editable={false}
        />
        <CommonInput
          placeholder={I18n.trans('resetPassword.password')}
          label={I18n.trans('resetPassword.password')}
          value={user.password}
          onChangeText={(value) => _onChange('password', value)}
          secureTextEntry
          Error={errors.password}
        />
        {!errors.password && !disable && (
          <CommonText style={styles.suggest}>
            {I18n.trans('resetPassword.suggestPassword')}
          </CommonText>
        )}
        <CommonInput
          placeholder={I18n.trans('resetPassword.password')}
          label={I18n.trans('resetPassword.password')}
          value={user.confirm_password}
          onChangeText={(value) => _onChange('confirm_password', value)}
          secureTextEntry
          Error={errors.confirm_password}
        />
        <CommonButton
          title={I18n.trans('resetPassword.nextButton')}
          style={styles.button}
          onPress={_onSubmit}
          disabled={disable}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
