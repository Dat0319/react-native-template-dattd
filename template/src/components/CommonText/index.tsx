import React from 'react';
import {
  Text as ReactNativeText,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';
import { Colors as valueColor, FontSize, FontWithBold, Spacing } from '@assets';
import { I18n } from '@instances';

export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[];

  color?: string;
  bold?: boolean;
  multiLanguage?: boolean;
  numberOfLines?: any;
}

export const CommonText = React.memo((props: TextProps) => {
  const {
    txOptions,
    text = '',
    children,
    style,
    bold,
    numberOfLines = 1,
    color,
    multiLanguage = false,
    ...rest
  } = props;
  const content = multiLanguage
    ? I18n.trans(`${text}`) || I18n.trans(`${children}`)
    : text || children;
  return (
    <ReactNativeText
      numberOfLines={numberOfLines}
      {...rest}
      allowFontScaling={false}
      style={[
        {
          color: color ? color : valueColor.black,
          // fontFamily: Device.isIos ? 'Noto Sans JP' : "NotoSansJP-Regular",
          fontSize: FontSize.Font13,
          lineHeight: Spacing.height25,
        },
        bold ? { ...FontWithBold.Bold_600 } : {},
        style,
      ]}
    >
      {content}
    </ReactNativeText>
  );
});
