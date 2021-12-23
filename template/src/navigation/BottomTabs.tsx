import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Spacing, Colors, Device, Shadow, FontWithBold } from '@assets';

export function BottomTabs(props: any) {
  const { state, descriptors, navigation, activeTintColor, inactiveTintColor } =
    props;

  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={{
              selected: isFocused,
            }}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            {options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? activeTintColor : inactiveTintColor,
            })}
            {label !== undefined && label !== '' && (
              <Text
                style={[
                  styles.label,
                  { color: isFocused ? activeTintColor : inactiveTintColor },
                ]}
              >
                {label}
              </Text>
            )}
            {/* { isFocused && <View style={styles.activeIndicator} />} */}
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

export default BottomTabs;

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: Spacing.height1,
    borderTopColor: Colors.gray,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
    paddingTop: Spacing.height5,

    ...Shadow.normal,
  },
  tab: {
    minWidth: Spacing.width60,
    alignItems: 'center',
    position: 'relative',
    paddingTop: Spacing.height16,
    paddingBottom: Device.isIos ? Spacing.height15 : Spacing.height10,
  },
  activeIndicator: {
    position: 'absolute',
    backgroundColor: '#48d2ff',
    height: Spacing.height2,
    width: '100%',
    bottom: 0,
  },
  iconTabBottom: {
    width: Spacing.height24,
    height: Spacing.height24,
    resizeMode: 'contain',
  },
  label: {
    paddingTop: Spacing.height5,
    fontSize: Spacing.height12,
    backgroundColor: 'red',
  },

  notificationBox: {
    position: 'relative',
  },

  badge: {
    position: 'absolute',
    top: Spacing.heightMinus5,
    left: Spacing.height12,
    backgroundColor: Colors.purple,
    paddingHorizontal: Spacing.height5,
    height: Spacing.height16,
    borderRadius: Spacing.height8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeCount: {
    ...FontWithBold.Bold_400,
    color: Colors.white,
    fontSize: Spacing.height11,
    lineHeight: Spacing.height16,
  },
});
