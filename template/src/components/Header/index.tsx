import { Colors, Images, Spacing, Shadow } from '@assets';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { useModel } from './Header.hook';
import { useSelector, RootReducerProps } from '@redux';
export interface HeaderProps {
  left?: string;
  right?: string;
  center?: string;
  onLeftPress?: () => void;
  onCenterPress?: () => void;
  onRightPress?: () => void;
  titleHeader?: string;
  backgroundColor?: string;
  barStyle?: any;
  styleLeft?: ViewStyle;
  styleCenter?: ViewStyle;
  styleRight?: ViewStyle;
  renderCenter?: React.ReactNode;
  renderCustom?: any;
  borderBottom?: boolean;
}

export const Header: React.FC<HeaderProps> = React.memo((props) => {
  let {
    left,
    center,
    right,
    renderCenter,
    titleHeader,
    backgroundColor,
    barStyle = 'dark-content',
    onCenterPress,
    styleLeft,
    styleCenter,
    styleRight,
    renderCustom,
    borderBottom = false,
  } = props;
  const { _onLeftPress, _onRightPress, _gotoSearch, _gotoCart, _gotoAccount } =
    useModel(props);
  const user = useSelector<RootReducerProps>(
    (state) => state.authReducers.user
  );

  const _renderLeft = () => {
    if (left === 'back') {
      return (
        <FastImage
          resizeMode="contain"
          style={styles.back}
          source={Images.ic_back}
        />
      );
    }

    if (left === 'back_white') {
      return (
        <FastImage
          resizeMode="contain"
          style={styles.back}
          source={Images.ic_back}
          tintColor="#fff"
        />
      );
    }

    if (left === 'logo') {
      return (
        <FastImage
          resizeMode="contain"
          style={styles.logo_triangle}
          source={Images.ic_logo_triangle}
        />
      );
    }
    if (left === 'close') {
      return (
        <FastImage
          resizeMode="contain"
          style={styles.back}
          source={Images.ic_close}
        />
      );
    }
  };

  const _renderCenter = () => {
    if (renderCenter !== undefined) {
      return renderCenter();
    }

    if (center === 'logo') {
      return (
        <View style={styles.wrap_full_logo}>
          <FastImage
            resizeMode="contain"
            style={styles.ic_full_logo}
            source={Images.ic_full_logo}
          />
        </View>
      );
    }

    return <Text style={styles.title}>{titleHeader}</Text>;
  };

  const _renderRight = () => {
    if (right === 'more') {
      return <Image style={styles.ic_search} source={Images.ic_dots} />;
    }
    if (right === 'shoppingCart') {
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.shoppingCart}
          onPress={() => {}}
        >
          <View style={styles.shoppingCartStatus} />
          <FastImage
            resizeMode="contain"
            style={styles.ic_shoppingCart}
            source={Images.ic_shopping_cart_black}
          />
        </TouchableOpacity>
      );
    }
    if (right === 'home') {
      return (
        <View style={styles.listHome}>
          <TouchableOpacity
            onPress={_gotoSearch}
            style={styles.itemHome}
            activeOpacity={1}
          >
            <FastImage
              resizeMode="contain"
              style={[styles.ic_cart, { tintColor: Colors.white }]}
              source={Images.ic_search}
              tintColor={Colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_gotoCart}
            style={styles.itemHome}
            activeOpacity={1}
          >
            <FastImage
              resizeMode="contain"
              style={styles.ic_cart}
              source={Images.ic_shoppingCart}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_gotoAccount}
            style={styles.itemHome}
            activeOpacity={1}
          >
            <FastImage
              resizeMode="cover"
              style={styles.ic_avatar}
              source={Images.uri(user?.profile_img_url)}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View
      style={[
        styles.container,
        borderBottom && {
          backgroundColor: '#fff',
          borderBottomColor: '#E2E2E2',
          borderBottomWidth: Spacing.height1,
          ...Shadow.normal,
        },
        backgroundColor !== undefined && {
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <StatusBar
        barStyle={barStyle}
        backgroundColor={'transparent'}
        translucent={true}
        animated={true}
      />
      <View style={styles.header}>
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.left, styleLeft]}
            onPress={() => _onLeftPress()}
          >
            {_renderLeft()}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={onCenterPress}
            style={[styles.center, styleCenter]}
          >
            {_renderCenter()}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.right, styleRight]}
            onPress={() => _onRightPress()}
          >
            {_renderRight()}
          </TouchableOpacity>
        </View>
        {typeof renderCustom !== 'undefined' && renderCustom()}
      </View>
    </View>
  );
});
