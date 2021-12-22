import React from 'react';
import { Text, View } from 'react-native';
import { CommonButton, CommonText, CommonInput, Header } from '@components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { I18n } from '@instances';
import { useModel } from './OtpPassword.hook';
import { Props } from './types';
import { styles } from './styles';
import { Colors } from '@assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const OtpPassword: React.FC<Props> = (props) => {
  const {
    user,
    currentEmail,
    errors,
    disable,
    _onChange,
    _onSubmit,
    _onResendCode,
  } = useModel(props);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: Colors.white }}>
      <Header left="back" center="logo" />
      <View style={styles.container}>
        <View style={styles.info}>
          <CommonText style={styles.ttl}>
            {I18n.trans('otpPassword.title')}
          </CommonText>
          <Text style={styles.desc}>
            {I18n.trans('otpPassword.description')}
          </Text>
          <Text style={{ color: Colors.blue }}>{currentEmail}</Text>
          <CommonText style={styles.desc}>
            {I18n.trans('otpPassword.subDescription')}
          </CommonText>
        </View>

        <CommonInput
          style={styles.input}
          keyboardType="numeric"
          textAlign="center"
          placeholder="Enter code"
          value={user.otp}
          onChangeText={(value) => _onChange('otp', value)}
          Error={errors.otp}
        />

        <View style={styles.resend}>
          <Text style={styles.resendTitle}>
            {I18n.trans('otpPassword.resendText')}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={_onResendCode}
            disabled={disable}
          >
            <Text style={styles.resendBtn}>
              {I18n.trans('otpPassword.resendButton')}
            </Text>
          </TouchableOpacity>
        </View>
        <CommonButton
          title={I18n.trans('otpPassword.nextButton')}
          style={styles.button}
          onPress={_onSubmit}
          disabled={disable}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
