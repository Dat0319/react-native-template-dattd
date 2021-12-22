import {Colors, FontWithBold, FontSize, Spacing} from '@assets';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CommonText} from '../CommonText';

export interface CommonButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  textStyle?: any;
  type?: string;
  icon?: string;
}

export const CommonButton: React.FC<CommonButtonProps> = React.memo(props => {
  let {title, disabled, icon, onPress, style, type, textStyle, ...rest} = props;
  let styleButton: any = [],
    styleText: any = [],
    startColor = Colors.purple,
    endColor = Colors.dark_blue;
  switch (type) {
    case 'outline':
      styleButton = [styles.button, styles.buttonOutline];
      styleText = [styles.buttonText, styles.buttonTextOutline, textStyle];
      startColor = Colors.white;
      endColor = Colors.white;
      break;
    case 'small':
      styleButton = [styles.button, styles.buttonSmall];
      styleText = [styles.buttonText, textStyle];
      break;
    case 'success':
      styleButton = [styles.button];
      styleText = [styles.buttonText, textStyle];
      startColor = Colors.green;
      endColor = Colors.green;
      break;
    case 'shop':
      styleButton = [styles.button];
      styleText = [styles.buttonText, textStyle];
      startColor = Colors.blue;
      endColor = Colors.blue;
      break;
    default:
      styleButton = [styles.button];
      styleText = [styles.buttonText, textStyle];
      break;
  }
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styleButton, style]}>
      <LinearGradient
        style={styleButton}
        start={{x: 0, y: 0.3}}
        end={{x: 0.8, y: 1.0}}
        colors={[startColor, endColor]}
        locations={[0, 1]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon && <Image style={styles.icon} source={icon} />}
          <CommonText style={styleText} numberOfLines={1}>
            {title}
          </CommonText>
        </View>
      </LinearGradient>
      {disabled && <View style={styles.overlay} />}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    borderRadius: Spacing.height30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Spacing.height10,
    paddingVertical: Spacing.width5,
    width: '100%',
    height: Spacing.height44,
    // maxWidth: Spacing.width335,
    position: 'relative',
    overflow: 'hidden',
  },
  buttonText: {
    ...FontWithBold.Bold_700,
    color: Colors.white,
    fontSize: FontSize.Font14,
    lineHeight: Spacing.height18,
    textTransform: 'capitalize',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
    zIndex: 10,
  },
  buttonOutline: {
    borderColor: Colors.dark_blue,
    borderWidth: Spacing.height1,
  },
  buttonTextOutline: {
    color: Colors.dark_blue,
  },
  buttonSmall: {
    height: Spacing.height30,
    maxWidth: Spacing.width190,
  },

  icon: {
    marginRight: Spacing.height8,
    width: Spacing.height22,
    height: Spacing.height22,
  },
});
