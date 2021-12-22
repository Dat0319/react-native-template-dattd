import React, { useEffect, useState, useRef } from 'react';
import {
  Colors,
  Device,
  FontSize,
  FontWithBold,
  Spacing,
  Images,
} from '@assets';
import {
  ViewStyle,
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  Keyboard,
} from 'react-native';
import { CommonText } from '../CommonText';
import { Image } from 'react-native';

export interface InputProps extends TextInputProps {
  containerStyleWrapper?: ViewStyle;
  placeholder?: string;
  Error?: string;
  innerRef?: any;
  label?: string;
  required?: boolean;
  border?: boolean;
  iconLeft?: string;
  style?: ViewStyle;
}

export const CommonInput = React.memo((props: InputProps) => {
  const secureTextEntry = useRef();
  const {
    containerStyleWrapper,
    placeholder,
    Error,
    multiline,
    required,
    keyboardType,
    innerRef = secureTextEntry,
    label,
    style,
    border = false,
    iconLeft,
    ...rest
  } = props;
  const [text, setText] = useState('');
  let check = Error !== undefined && Error !== '';

  useEffect(() => {
    if (props?.secureTextEntry !== undefined) {
      innerRef.current.setNativeProps({
        style: {
          fontFamily: Device.isIos
            ? 'HelveticaNeue-Medium'
            : 'helvetica-neue-medium',
        },
      });
    }
  }, []);

  useEffect(() => {
    setText(props.value || '');
  }, [props.value]);

  return (
    <>
      <View style={[styles.container, containerStyleWrapper]}>
        {label !== undefined && (
          <CommonText
            style={[
              styles.labelText,
              border && { color: Colors.dark, paddingBottom: Spacing.height16 },
            ]}
          >
            {label}
            {/* {required && <CommonText text='*' color='red' style={{ fontSize: FontSize.Font15 }} />} */}
          </CommonText>
        )}
        <View
          style={[
            { flexDirection: 'row' },
            border && styles.wrapIcon,
            iconLeft !== undefined && { paddingHorizontal: Spacing.width10 },
          ]}
        >
          {iconLeft && (
            <Image
              source={iconLeft ? iconLeft : Images.ic_creditCard}
              style={styles.icon}
            />
          )}
          <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => {
              setText(value);
              props.onChangeText && props.onChangeText(value);
            }}
            placeholderTextColor={border ? Colors.dark_gray : Colors.gray}
            ref={innerRef}
            multiline={multiline}
            blurOnSubmit={false}
            onSubmitEditing={(value) => {
              Keyboard.dismiss();
              props.onSubmitEditing && props.onSubmitEditing(value);
            }}
            style={[
              styles.input,
              multiline && {
                height: Spacing.height100,
              },
              {
                borderBottomColor: check
                  ? 'red'
                  : text?.trim().length !== 0
                  ? Colors.purple
                  : '#828282',
              },
              border && {
                borderBottomWidth: 0,
                paddingHorizontal: Spacing.width10,
              },
              multiline && {
                textAlignVertical: 'top',
              },
              props?.editable !== undefined &&
                props?.editable === false && {
                  color: Colors.gray,
                },
              style,
            ]}
            {...rest}
          />
        </View>
        {check && (
          <CommonText style={styles.errorText} numberOfLines={2}>
            *{Error}
          </CommonText>
        )}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.height30,
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  labelText: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font16,
    color: Colors.gray,
  },
  wrapIcon: {
    alignItems: 'center',
    borderRadius: Spacing.height10,
    borderWidth: Spacing.height1,
    borderColor: Colors.gray,
  },
  icon: {
    width: Spacing.width17,
    height: Spacing.width17,
    resizeMode: 'contain',
    tintColor: Colors.gray,
  },
  input: {
    ...FontWithBold.Bold_400,
    fontWeight: '400',
    flex: 1,
    flexGrow: 1,
    fontSize: FontSize.Font14,
    lineHeight: Spacing.height17,
    borderBottomWidth: Spacing.height1,
    paddingVertical: Device.isIos ? Spacing.height15 : Spacing.height10,
  },
  errorText: {
    color: 'red',
    fontSize: FontSize.Font12,
    lineHeight: Spacing.height15,
    // position: 'absolute',
    top: Spacing.height6,
  },
});
