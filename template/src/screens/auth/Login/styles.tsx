import { StyleSheet } from 'react-native';
import { FontSize, Spacing, Colors, FontWithBold } from '@assets';

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
    marginTop: Spacing.height5,
  },
  button: {
    marginTop: Spacing.height40,
  },
  forgot: {
    ...FontWithBold.Bold_700,
    fontSize: FontSize.Font14,
    lineHeight: Spacing.height16,
    marginTop: Spacing.height15,
    color: Colors.dark_blue,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  suggest: {
    marginTop: Spacing.height6,
    ...FontWithBold.Bold_400,
    fontSize: FontSize.Font11,
    lineHeight: Spacing.height14,
    color: Colors.dark_gray,
    fontStyle: 'italic',
  },
});
