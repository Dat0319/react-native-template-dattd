import React, {useState, useEffect} from 'react';
import {Images, Spacing, Colors, FontWithBold, FontSize} from '@assets';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface AvatarProps {
  avatar?: string;
  size?: number;
  style?: any;
  disabled?: boolean;
  result?: (item: any) => void;
  type?: string;
  title?: string;
  item?: any;
}

export const Avatar: React.FC<AvatarProps> = React.memo(props => {
  let {
    avatar,
    size = Spacing.height60,
    style,
    disabled = true,
    type,
    title,
    result,
    item,
    ...rest
  } = props;
  const [startColor, setStartColor] = useState(Colors.purple);
  const [endColor, setEndColor] = useState(Colors.dark_blue);
  let styleButton: any = [styles.wrapAvatar, {width: size, height: size}];

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (type === 'info') {
      if (active) {
        setStartColor(Colors.dark_blue);
        setEndColor(Colors.dark_blue);
      } else {
        setStartColor(Colors.transparent);
        setEndColor(Colors.transparent);
      }
    }
  }, [active]);

  switch (type) {
    case 'info':
      disabled = false;
      break;
    case 'small':
      size = Spacing.height40;
      styleButton = [styles.wrapAvatar, {width: size, height: size}];
      break;
    default:
      break;
  }

  const _chooseItem = () => {
    setActive(!active);
    result !== undefined && result(item);
  };

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={1}
      disabled={disabled}
      onPress={_chooseItem}
      style={[styles.button, {maxWidth: size + Spacing.height20}]}>
      <LinearGradient
        style={styleButton}
        start={{x: 0, y: 0.3}}
        end={{x: 0.8, y: 1.0}}
        colors={[startColor, endColor]}
        locations={[0, 1]}>
        <View
          style={[
            styles.wrapAvatar,
            {
              width: size - Spacing.height3,
              height: size - Spacing.height3,
              backgroundColor: Colors.white,
            },
          ]}>
          <Image
            style={[
              styles.avatar,
              style,
              type === 'avatar' && {width: size, height: size},
            ]}
            // source={!!avatar ? { uri: avatar } : Images.NoImage}
            source={Images.uri(avatar)}
          />
        </View>
        {active && <View style={styles.overlay} />}
      </LinearGradient>
      {!!title && (
        <Text
          style={[styles.text, active && {color: Colors.dark_blue}]}
          numberOfLines={2}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  wrapAvatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.height50,
    position: 'relative',
    overflow: 'hidden',
  },
  avatar: {
    borderRadius: Spacing.height30,
    resizeMode: 'cover',
    width: Spacing.height60,
    height: Spacing.height60,
  },
  text: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height14,
    textAlign: 'center',
    marginTop: Spacing.width5,
    color: Colors.dark,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(77,73,255,0.3)',
    zIndex: 10,
  },
});
