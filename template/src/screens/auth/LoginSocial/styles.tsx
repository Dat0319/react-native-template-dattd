import {StyleSheet} from 'react-native';
import {Shadow, FontSize, Spacing, Colors, FontWithBold} from '@assets';

export const styles = StyleSheet.create({
  containerSocial: {
    alignItems: 'center',
    marginTop: Spacing.height30,
  },
  wrapTtl: {
    width: Spacing.width243,
    height: Spacing.height1,
    backgroundColor: Colors.gray,
    position: 'relative',
    alignItems: 'center',
  },
  ttl: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height12,
    color: Colors.gray,

    position: 'absolute',
    top: -Spacing.height5,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.width10,
  },
  listSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.height32,
  },
  itemSocial: {
    width: Spacing.height36,
    height: Spacing.height36,
    borderRadius: Spacing.height20,
    backgroundColor: Colors.white,
    ...Shadow.normal,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Spacing.width10,
  },
  itemIcon: {
    width: Spacing.height18,
    height: Spacing.height18,
    resizeMode: 'contain',
  },
  message: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font13,
    lineHeight: Spacing.height15,
    color: Colors.dark,
    fontStyle: 'italic',
  },
  direction: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font14,
    lineHeight: Spacing.height16,
    color: Colors.dark_blue,
    textDecorationLine: 'underline',
    fontStyle: 'normal',
  },
});
