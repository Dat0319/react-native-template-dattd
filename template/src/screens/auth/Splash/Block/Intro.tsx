import React, {useState, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';
import {Colors, Images} from '@assets';
import {Props} from '../types';
import {styles} from '../styles';
import LinearGradient from 'react-native-linear-gradient';

export const Intro: React.FC<Props> = props => {
  const {result} = props;
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [opacityText, setOpacityText] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(false);
  let startColor = Colors.purple,
    endColor = Colors.dark_blue;
  const logoScale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.1],
    extrapolate: 'clamp',
  });
  const triangleScale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [5, 0.18],
    extrapolate: 'clamp',
  });
  const triangleRotate = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });
  const opacityReverse = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    _run();
  }, []);

  const _run = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setVisible(true);
    });

    Animated.timing(opacityText, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      result !== undefined && result();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.container, {opacity: opacityReverse}]}>
        <LinearGradient
          style={styles.container}
          start={{x: 0, y: 0.3}}
          end={{x: 0.8, y: 1.0}}
          colors={[startColor, endColor]}
          locations={[0, 1]}
        />
      </Animated.View>
      <Animated.Image
        style={[
          styles.triangle,
          {
            opacity: opacityReverse,
            transform: [{scale: triangleScale}, {rotate: triangleRotate}],
          },
        ]}
        source={Images.ic_triangle}
      />
      <Animated.Image
        style={[
          styles.logo_s,
          {
            opacity: opacityReverse,
            transform: [{scale: logoScale}],
          },
        ]}
        source={Images.ic_logo_s}
      />
      <Animated.Image
        style={[styles.logo_triangle, visible && {opacity: 1}]}
        source={Images.ic_logo_text}
      />
    </View>
  );
};
