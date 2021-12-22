import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, MainNavigator } from './StackNavigator';
import { useSelector } from 'react-redux';
import { RootReducerProps } from '@redux';

const AppNavigator = (props: any, ref: any) => {
  const token = useSelector<RootReducerProps>(
    (state) => state.authReducers.token
  );

  return (
    <NavigationContainer ref={ref}>
      {token !== null ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default React.forwardRef(AppNavigator);
