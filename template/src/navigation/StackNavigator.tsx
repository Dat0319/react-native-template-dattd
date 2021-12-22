import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_ROUTER} from '@assets';
import {
  Profile,
  ProductList,
  ProductDetail,
  ScheduleStream,
  SetupStream,
  CameraPreview,
  Splash,
  Login,
  ForgotPassword,
  OtpPassword,
  ResetPassword,
} from '@screens';
import {Config} from '@instances';

const defaultNavOptions = {
  headerShown: false,
};
const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={defaultNavOptions}
      // initialRouteName={SCREEN_ROUTER.SPLASH}
    >
      {Config.isIntro && (
        <AuthStackNavigator.Screen
          name={SCREEN_ROUTER.SPLASH}
          component={Splash}
        />
      )}
      <AuthStackNavigator.Screen name={SCREEN_ROUTER.LOGIN} component={Login} />
      <AuthStackNavigator.Screen
        name={SCREEN_ROUTER.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <AuthStackNavigator.Screen
        name={SCREEN_ROUTER.OTP_PASSWORD}
        component={OtpPassword}
      />
      <AuthStackNavigator.Screen
        name={SCREEN_ROUTER.RESET_PASSWORD}
        component={ResetPassword}
      />
    </AuthStackNavigator.Navigator>
  );
};
const MainStackNavigator = createStackNavigator();
export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={defaultNavOptions}
      // initialRouteName={SCREEN_ROUTER.SCHEDULE_STREAM}
    >
      <MainStackNavigator.Screen
        name={SCREEN_ROUTER.PROFILE}
        component={Profile}
      />
      <MainStackNavigator.Screen
        name={SCREEN_ROUTER.PRODUCT_LIST}
        component={ProductList}
      />
      <MainStackNavigator.Screen
        name={SCREEN_ROUTER.PRODUCT_DETAIL}
        component={ProductDetail}
      />
      <MainStackNavigator.Screen
        name={SCREEN_ROUTER.SCHEDULE_STREAM}
        component={ScheduleStream}
      />
      <MainStackNavigator.Screen
        name={SCREEN_ROUTER.SETUP_STREAM}
        component={SetupStream}
      />
      <MainStackNavigator.Screen
        name={SCREEN_ROUTER.CAMERA_PREVIEW}
        component={CameraPreview}
      />
    </MainStackNavigator.Navigator>
  );
};
