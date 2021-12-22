import {StyleSheet} from 'react-native';
import {FontSize, Spacing, FontWithBold} from '@assets';

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
    maxWidth: Spacing.width243,
    textAlign: 'center',
  },
  button: {
    marginTop: Spacing.height40,
  },
});
