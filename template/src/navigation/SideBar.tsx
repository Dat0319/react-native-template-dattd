// import React from 'react';
// import {
//   Alert,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   TouchableHighlight,
//   View,
// } from 'react-native';
// import {I18n} from '@instances';
// import {CommonText} from '@components';
// import LinearGradient from 'react-native-linear-gradient';
// import {getStatusBarHeight} from 'react-native-status-bar-height';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {
//   DrawerContentComponentProps,
//   DrawerContentOptions,
// } from '@react-navigation/drawer';
// import {
//   Colors,
//   Images,
//   Device,
//   FontSize,
//   FontWithBold,
//   Spacing,
//   SCREEN_ROUTER,
// } from '@assets';
// import {Home, EventDetails, Following} from '@screens';

// const Drawer = createDrawerNavigator();

// function DrawerStack() {
//   <Drawer.Navigator
//     drawerPosition="right"
//     drawerStyle={{}}
//     drawerContent={props => {
//       return <MyDrawer {...props} />;
//     }}>
//     <Drawer.Screen
//       name={SCREEN_ROUTER.EVENT_DETAILS}
//       component={EventDetails}
//     />
//     <Drawer.Screen name={SCREEN_ROUTER.FOLLOWING} component={Following} />
//     <Drawer.Screen name={SCREEN_ROUTER.HOME} component={Home} />
//   </Drawer.Navigator>;
// }

// interface MyDrawerProps
//   extends DrawerContentComponentProps<DrawerContentOptions> {
//   logout: () => void;
//   userInfo: any;
// }

// export const MyDrawer = (props: MyDrawerProps) => {
//   let activeIndex = props.state.index;
//   return (
//     <LinearGradient
//       colors={['#fff4f4', '#ffd6d6']}
//       locations={[0, 1]}
//       style={{flex: 1}}>
//       <SafeAreaView style={{flex: 1, overflow: 'hidden'}}>
//         <Image
//           source={Images.NoImage}
//           style={styles.badge}
//           resizeMode="contain"
//         />
//         <View style={styles.contentContainer}>
//           <TouchableHighlight
//             underlayColor={Colors.gray}
//             style={[styles.buttonContainer]}
//             onPress={() => {
//               props.navigation.navigate(SCREEN_ROUTER.ABOUT_US);
//             }}>
//             <CommonText
//               style={styles.buttonText}
//               text="sidebar.profile"
//               multiLanguage
//             />
//           </TouchableHighlight>
//           <TouchableHighlight
//             underlayColor={Colors.gray}
//             style={[styles.buttonContainer]}
//             onPress={() => {
//               props.navigation.navigate(SCREEN_ROUTER.ADDRESS_ADD, {
//                 user_id: props.userInfo.id,
//               });
//             }}>
//             <CommonText
//               style={styles.buttonText}
//               text="sidebar.myPage"
//               multiLanguage
//             />
//           </TouchableHighlight>
//           <TouchableHighlight
//             underlayColor={Colors.gray}
//             style={[styles.buttonContainer]}
//             onPress={() => {
//               Alert.alert(I18n.trans(`setting.logoutAlert`), '', [
//                 {text: I18n.trans(`setting.Cancel`)},
//                 {
//                   text: I18n.trans(`setting.Confirm`),
//                   onPress: () => {},
//                 },
//               ]);
//             }}>
//             <CommonText
//               style={styles.buttonText}
//               text="sidebar.logout"
//               multiLanguage
//             />
//           </TouchableHighlight>
//           <TouchableHighlight
//             underlayColor={Colors.gray}
//             style={[styles.buttonContainer]}
//             onPress={() => {
//               props.navigation.navigate(SCREEN_ROUTER.CART);
//             }}>
//             <CommonText
//               style={styles.buttonText}
//               text="sidebar.upgrade"
//               multiLanguage
//             />
//           </TouchableHighlight>
//         </View>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     width: '100%',
//     marginHorizontal: Spacing.width20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: Device.isIos
//       ? Spacing.height7
//       : Spacing.height7 + getStatusBarHeight(),
//   },
//   contentContainer: {
//     marginTop: Spacing.height30,
//   },
//   buttonContainer: {
//     paddingLeft: Spacing.width20,
//     paddingVertical: Spacing.height3,
//   },
//   buttonText: {
//     ...FontWithBold.Bold_600,
//     fontSize: FontSize.Font18,
//     lineHeight: 45,
//   },
//   badge: {
//     position: 'absolute',
//     width: 318,
//     height: 318,
//     bottom: 30,
//     left: -30,
//   },
// });
