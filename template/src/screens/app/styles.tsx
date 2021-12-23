import { StyleSheet } from 'react-native';
import { FontSize, Spacing, Colors, FontWithBold, Device } from '@assets';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E5E5E5',
    zIndex: -1,
  },
  // spot
  spot: {
    paddingTop: Spacing.height20,
    backgroundColor: Colors.dark,
  },
  spotTtl: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font17,
    lineHeight: Spacing.height21,
    color: Colors.white,
    marginBottom: Spacing.height16,
    paddingLeft: Spacing.height20,
  },
  spotList: {},
  spotItem: {
    width: (Device.width - Spacing.height20) * 0.85,
    marginRight: Spacing.height25,
  },
  // stream
  stream: {
    paddingLeft: Spacing.height20,
  },
  streamTtl: {
    marginTop: Spacing.height20,
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font17,
    lineHeight: Spacing.height21,
    color: Colors.dark,
    marginBottom: Spacing.height16,
  },
  streamList: {},
  streamItem: {
    width: (Device.width - Spacing.height20) * 0.62,
    marginRight: Spacing.height12,
  },
  // categories
  cate: {
    paddingBottom: Spacing.height24,
    paddingLeft: Spacing.height20,
  },
  wrapCateTtl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cateTtl: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font17,
    lineHeight: Spacing.height21,
    color: Colors.dark,
    marginBottom: Spacing.height16,
  },
  seeAll: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font14,
    lineHeight: Spacing.height19,
    color: Colors.dark_blue,
    marginBottom: Spacing.height15,
    marginHorizontal: Spacing.height20,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.dark_blue,
  },
  cateList: {},
  cateItem: {
    marginRight: Spacing.height15,
    width: Spacing.height130,
    height: Spacing.height130,
  },

  // list
  list: {},
  item: {
    marginHorizontal: Spacing.height20,
    marginBottom: Spacing.height40,
    borderRadius: Spacing.height10,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  Top: {
    width: '100%',
    height: Spacing.height200,
    position: 'relative',
  },

  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: Spacing.height20,
    left: Spacing.height20,
  },

  wrapAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: Spacing.height20,
    height: Spacing.height20,
    borderRadius: Spacing.height20,
    overflow: 'hidden',
  },
  name: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font10,
    lineHeight: Spacing.height12,
    color: Colors.white,
    marginLeft: Spacing.height7,
  },
  overlayTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '25%',
    zIndex: 1,
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '25%',
    zIndex: 1,
  },
  thumb: {
    width: '100%',
    height: Spacing.height200,
    resizeMode: 'cover',
  },
  live: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Spacing.width38,
    backgroundColor: '#686868',
    paddingVertical: Spacing.height3,
    borderRadius: Spacing.height4,
    marginLeft: Spacing.height8,
  },
  viewImage: {
    width: Spacing.height10,
    height: Spacing.height10,
    tintColor: 'white',
  },
  viewNum: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font10,
    lineHeight: Spacing.height12,
    color: Colors.white,
    marginLeft: Spacing.height4,
  },
  wrapActive: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Spacing.height10,
    backgroundColor: '#dd2e44',
    paddingHorizontal: Spacing.height12,
    paddingVertical: Spacing.height3,
    borderRadius: Spacing.height4,
  },
  text: {
    ...FontWithBold.Bold_500,
    fontSize: FontSize.Font9,
    lineHeight: Spacing.height11,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  wrapVol: {
    position: 'absolute',
    zIndex: 1,
    bottom: Spacing.height8,
    right: Spacing.height8,
  },
  vol: {
    padding: Spacing.height10,
  },
  volIcon: {
    width: Spacing.height24,
    height: Spacing.height24,
    resizeMode: 'contain',
    position: 'relative',
    zIndex: -1,
  },
  content: {
    paddingVertical: Spacing.height12,
    paddingHorizontal: Spacing.height16,
  },
  wrapTtl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ttl: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font14,
    lineHeight: Spacing.height18,
    color: Colors.black,
  },

  desc: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height15,
    color: Colors.black,
  },

  share: {
    paddingLeft: Spacing.height15,
    paddingVertical: Spacing.height3,
    marginLeft: 'auto',
  },
  shareIcon: {
    width: Spacing.height20,
    height: Spacing.height20,
    resizeMode: 'contain',
  },
  wrapReactions: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: Spacing.height10,
  },
  reaction: {
    width: Spacing.height15,
    height: Spacing.height15,
    paddingHorizontal: Spacing.height10,
    resizeMode: 'contain',
  },
  textReactions: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height14,
    color: '#7C7C7C',
    marginLeft: Spacing.height10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: Spacing.height10,
  },
  commentAvatar: {
    width: Spacing.height24,
    height: Spacing.height24,
    resizeMode: 'cover',
    marginRight: Spacing.height10,
  },
  commentInfo: {},
  commentName: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height14,
    color: Colors.dark_blue,
  },
  commentText: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height14,
    color: Colors.dark,
    marginTop: Spacing.height2,
  },
  Bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: Colors.gray,
    borderTopWidth: 0.5,
    position: 'relative',
    zIndex: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: Spacing.height15,
    borderRightColor: Colors.gray,
    borderRightWidth: 0.25,
    position: 'relative',
  },
  buttonAction: {
    backgroundColor: Colors.dark_blue,
  },
  Icon: {
    width: Spacing.height16,
    height: Spacing.height16,
  },
  Text: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height14,
    color: '#a5a5a5',
    marginLeft: Spacing.height5,
  },

  // motion
  motion: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Spacing.width113,
    backgroundColor: '#E7E8F0',
    borderTopLeftRadius: Spacing.height10,
    borderTopRightRadius: Spacing.height10,
    paddingHorizontal: Spacing.height10,
    paddingVertical: Spacing.height15,
    position: 'absolute',
    right: 0,
    bottom: Spacing.height47,
    alignItems: 'center',
    justifyContent: 'center',
  },
  motionButton: {
    width: '50%',
    padding: Spacing.height10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  motionText: {
    width: Spacing.height24,
    height: Spacing.height24,
    resizeMode: 'contain',
  },
});
