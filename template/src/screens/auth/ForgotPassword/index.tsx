import React from 'react';
import { View } from 'react-native';
import { CommonButton, CommonText, CommonInput, Header } from '@components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { I18n } from '@instances';
import { useModel } from './ForgotPassword.hook';
import { Props } from './types';
import { styles } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const ForgotPassword: React.FC<Props> = (props) => {
  const { user, errors, disable, _onChange, _onSubmit } = useModel(props);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: Colors.white }}>
      <Header left="back" center="logo" />
      <View style={styles.container}>
        <View style={styles.info}>
          <CommonText style={styles.ttl}>
            {I18n.trans('forgotPassword.title')}
          </CommonText>
          <CommonText style={styles.desc} numberOfLines={2}>
            {I18n.trans('forgotPassword.description')}
          </CommonText>
        </View>

        <CommonInput
          placeholder={I18n.trans('forgotPassword.email')}
          label={I18n.trans('forgotPassword.email')}
          value={user.email}
          onChangeText={(value) => _onChange('email', value)}
          Error={errors.email}
        />
        <CommonButton
          title={I18n.trans('forgotPassword.nextButton')}
          style={styles.button}
          onPress={_onSubmit}
          disabled={disable}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
