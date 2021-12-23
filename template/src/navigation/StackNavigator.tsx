import React from 'react';
import { Image, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_ROUTER, Images } from '@assets';
import {
  Splash,
  Login,
  ForgotPassword,
  OtpPassword,
  ResetPassword,
} from '@screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BottomTabs, styles } from './BottomTabs';
import { RootReducerProps, useSelector } from '@redux';
import { Config } from '@instances';

const defaultNavOptions = {
  headerShown: false,
};

const BottomStack = createMaterialTopTabNavigator();
export const BottomTabNavigator = () => {
  const notificationCount = useSelector<RootReducerProps>(
    (state) => state.authReducers.notificationCount
  );
  return (
    <BottomStack.Navigator
      tabBar={(props) => <BottomTabs {...props} />}
      initialRouteName={SCREEN_ROUTER.HOME}
      swipeEnabled={false}
      lazy={true}
      tabBarPosition={'bottom'}
      tabBarOptions={{
        activeTintColor: '#0023c4',
        inactiveTintColor: '#b2b1af',
      }}
    >
      <BottomStack.Screen
        name={SCREEN_ROUTER.HOME}
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => {
            return (
              <Image
                source={focused ? Images.ic_home_active : Images.ic_home}
                style={[styles.iconTabBottom]}
              />
            );
          },
        }}
      />
      <BottomStack.Screen
        name={SCREEN_ROUTER.SEARCH}
        component={Search}
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => {
            return (
              <Image
                source={focused ? Images.ic_search_active : Images.ic_search}
                style={[styles.iconTabBottom]}
              />
            );
          },
        }}
      />
      <BottomStack.Screen
        name={SCREEN_ROUTER.TIMELINE}
        component={TimeLine}
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => {
            return (
              <Image
                source={
                  focused ? Images.ic_calendar_active : Images.ic_calendar
                }
                style={[styles.iconTabBottom]}
              />
            );
          },
        }}
      />
      <BottomStack.Screen
        name={SCREEN_ROUTER.NOTIFICATIONS}
        component={Notifications}
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => {
            return (
              <View style={styles.notificationBox}>
                <Image
                  source={focused ? Images.ic_bell_active : Images.ic_bell}
                  style={[styles.iconTabBottom]}
                />
                {notificationCount > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeCount}>
                      {notificationCount > 100 ? '99+' : notificationCount}
                    </Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
    </BottomStack.Navigator>
  );
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
        component={BottomTabNavigator}
      />
      <MainStackNavigator.Screen
        name={SCREEN_ROUTER.PROFILE}
        component={Profile}
      />
    </MainStackNavigator.Navigator>
  );
};
