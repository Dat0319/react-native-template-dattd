import {StyleSheet} from 'react-native';
import {FontSize, Spacing, Colors, FontWithBold} from '@assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.width20,
  },
  info: {
    alignItems: 'center',
    marginTop: Spacing.height50,
  },
  ttl: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font17,
    lineHeight: Spacing.height21,
  },
  desc: {
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font14,
    lineHeight: Spacing.height17,
    marginTop: Spacing.height8,
    maxWidth: Spacing.width302,
    textAlign: 'center',
  },

  input: {
    fontSize: Spacing.height20,
    lineHeight: Spacing.height24,
    letterSpacing: 1,
  },

  resendTitle: {
    color: Colors.dark_gray,
  },

  resend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.height20,
  },

  resendBtn: {
    ...FontWithBold.Bold_700,
    paddingHorizontal: Spacing.height10,
    paddingVertical: Spacing.height10,
    color: Colors.blue,
  },

  button: {
    marginTop: Spacing.height40,
  },
});
