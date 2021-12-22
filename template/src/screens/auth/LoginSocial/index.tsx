import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useModel} from './LoginSocial.hook';
import {Images} from '@assets';
import {Props} from './types';
import {styles} from './styles';
import {I18n} from '@instances';
import {appleAuth} from '@invertase/react-native-apple-authentication';

export const LoginSocial: React.FC<Props> = props => {
  const {type} = props;
  const {_appleAuthentication, _onSubmitFacebook, _onSubmitGoogle} =
    useModel(props);

  return (
    <View style={styles.containerSocial}>
      <View style={styles.wrapTtl}>
        <Text style={styles.ttl}>{I18n.trans('loginSocial.connect')}</Text>
      </View>
      <View style={styles.listSocial}>
        <TouchableOpacity
          onPress={_onSubmitFacebook}
          style={styles.itemSocial}
          activeOpacity={1}>
          <Image style={styles.itemIcon} source={Images.ic_facebook} />
        </TouchableOpacity>
        {appleAuth.isSupported && (
          <TouchableOpacity
            onPress={_appleAuthentication}
            style={styles.itemSocial}
            activeOpacity={1}>
            <Image style={styles.itemIcon} source={Images.ic_apple} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={_onSubmitGoogle}
          style={styles.itemSocial}
          activeOpacity={1}>
          <Image style={styles.itemIcon} source={Images.ic_google} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
