import { StyleSheet } from 'react-native';
import { Device, FontWithBold, FontSize, Spacing, Colors } from '@assets';

export const styles = StyleSheet.create({
  // intro
  container: {
    flex: 1,
    width: Device.width,
    height: Device.height,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  triangle: {
    position: 'absolute',
    right: 24,
    transform: [{ scale: 5 }],
  },
  logo_s: {
    position: 'absolute',
    width: Device.width,
  },
  logo_triangle: {
    position: 'absolute',
    width: Spacing.width150,
    height: Spacing.height150,
    resizeMode: 'contain',
    opacity: 0,
  },
  logo_text: {
    position: 'absolute',
    width: Spacing.width140,
    height: Spacing.height40,
    resizeMode: 'contain',
    top: Device.height / 2 + Spacing.height35,
  },
  // landing
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.67)',
    padding: Spacing.height22,
  },

  bg: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    padding: Spacing.height30,
  },
  logo: {
    position: 'absolute',
    top: Spacing.height10,
    left: Spacing.width1,
  },
  ttl: {
    ...FontWithBold.Bold_900,
    fontSize: FontSize.Font45,
    lineHeight: Spacing.height60,
    textTransform: 'uppercase',
    color: Colors.dark,
    maxWidth: Spacing.height302,
  },
  button: {
    marginVertical: Spacing.height20,
  },
  desc: {
    ...FontWithBold.Bold_300,
    fontSize: FontSize.Font13,
    lineHeight: Spacing.height15,
    color: '#BCBCBC',
    textAlign: 'center',
    marginBottom: Spacing.height30,
    paddingHorizontal: Spacing.height15,
  },
});
