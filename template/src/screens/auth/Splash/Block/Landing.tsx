import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {CommonButton, CommonText} from '@components';
import {useModel} from '../Splash.hook';
import {Images} from '@assets';
import {Props} from '../types';
import {styles} from '../styles';
import {I18n} from '@instances';

export const Landing: React.FC<Props> = props => {
  const {disable, _onSubmit} = useModel(props);

  return (
    <ImageBackground style={styles.bg} source={Images.bg_landing}>
      <View style={styles.overlay}>
        <Image style={styles.logo} source={Images.ic_logo_triangle} />
        <Text style={styles.ttl}>{I18n.trans('welcome.title')}</Text>
        <CommonButton
          title={I18n.trans('welcome.startButton')}
          style={styles.button}
          onPress={_onSubmit}
          disabled={disable}
        />
        <CommonText style={styles.desc} numberOfLines={3}>
          {I18n.trans('welcome.description')}
        </CommonText>
      </View>
    </ImageBackground>
  );
};
