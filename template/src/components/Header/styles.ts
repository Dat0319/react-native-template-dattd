import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Spacing, FontWithBold, Colors} from '@assets';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.height15,
    position: 'relative',
    backgroundColor: 'transparent',
    height: Spacing.height44 + getStatusBarHeight(),
  },

  header: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 0,
    right: 0,
    zIndex: 1,
    // width: '100%',
    height: Spacing.height45,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // left style
  left: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: Spacing.height15,
    zIndex: 3,
    justifyContent: 'center',
    paddingRight: Spacing.height10,
  },
  back: {
    width: Spacing.width10,
    height: Spacing.height17,
    resizeMode: 'contain',
  },
  // center style
  center: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: Spacing.height40,
  },
  title: {
    ...FontWithBold.Bold_700,
    textAlign: 'center',
    fontSize: Spacing.height21,
    lineHeight: Spacing.height21,
    color: Colors.dark,
    textAlignVertical: 'center',
  },
  // right style
  right: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: Spacing.height15,
    zIndex: 3,
    paddingLeft: Spacing.height10,
    justifyContent: 'center',
  },
  // CUSTOM LEFT STYLE
  ic_logo: {
    width: Spacing.height78,
    height: Spacing.height48,
    resizeMode: 'contain',
  },
  logo_triangle: {
    width: Spacing.height40,
    height: Spacing.height40,
    resizeMode: 'contain',
  },
  // CUSTOM CENTER STYLE
  wrap_full_logo: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  ic_full_logo: {
    width: Spacing.width160,
    height: Spacing.height45,
    resizeMode: 'contain',
  },
  productDesc: {
    ...FontWithBold.Bold_400,
    textAlign: 'center',
    fontSize: Spacing.height11,
    lineHeight: Spacing.height14,
    color: Colors.dark_gray,
    textAlignVertical: 'center',
    marginTop: Spacing.height10,
    marginBottom: Spacing.height4,
  },

  productTitle: {
    ...FontWithBold.Bold_700,
    textAlign: 'center',
    fontSize: Spacing.height17,
    lineHeight: Spacing.height20,
    color: Colors.dark,
    textAlignVertical: 'center',
    marginBottom: Spacing.height20,
  },

  // CUSTOM RIGHT STYLE
  ic_search: {
    width: Spacing.height32,
    height: Spacing.height32,
    resizeMode: 'contain',
  },

  shoppingCart: {
    position: 'relative',
    padding: Spacing.height10,
  },

  shoppingCartStatus: {
    width: Spacing.height6,
    height: Spacing.height6,
    borderRadius: Spacing.height3,
    backgroundColor: '#77B255',
    top: Spacing.height4,
    left: Spacing.height28,
  },

  ic_shoppingCart: {
    position: 'relative',
    // marginRight: 20,
    width: Spacing.height32,
    height: Spacing.height32,
    resizeMode: 'contain',
  },
  listHome: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemHome: {
    paddingHorizontal: Spacing.height10,
    paddingVertical: Spacing.height3,
  },
  ic_cart: {
    width: Spacing.height24,
    height: Spacing.height24,
    resizeMode: 'contain',
  },
  ic_avatar: {
    width: Spacing.height32,
    height: Spacing.height32,
    resizeMode: 'cover',
    borderRadius: Spacing.height20,
    overflow: 'hidden',
  },
  // CUSTOM  HEADER SEARCH
  search_box: {
    position: 'relative',
  },

  search_input: {
    position: 'absolute',
    width: '100%',
    bottom: -5,
  },
});

export default styles;
