import { SCREEN_ROUTER } from '@assets';
import { HeaderProps } from './index';
import { navigate } from '@navigation';
import { useNavigation } from '@react-navigation/native';

export function useModel(props: HeaderProps) {
  let { left, right, onLeftPress, onRightPress } = props;
  const navigation = useNavigation();

  const _onLeftPress = () => {
    if (left === 'back' || left === 'close') {
      if (onLeftPress) {
        onLeftPress();
      } else {
        navigation.canGoBack() && navigation.goBack();
      }
    } else {
      typeof onLeftPress !== 'undefined' && onLeftPress();
    }
  };

  const _onRightPress = () => {
    if (right === 'notify') {
      navigate(SCREEN_ROUTER.NOTIFICATIONS);
    }
    typeof onRightPress !== 'undefined' && onRightPress();
  };

  const _gotoSearch = () => {
    navigate(SCREEN_ROUTER.SEARCH);
  };
  const _gotoCart = () => {
    navigate(SCREEN_ROUTER.CART);
  };
  const _gotoAccount = () => {
    navigate(SCREEN_ROUTER.SETTINGS);
  };
  return {
    _onLeftPress,
    _onRightPress,
    _gotoSearch,
    _gotoCart,
    _gotoAccount,
  };
}
