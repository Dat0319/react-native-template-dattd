import {
  CommonActions,
  StackActions,
  TabActions,
} from '@react-navigation/native';

let _navigator: any; // eslint-disable-line

export function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

export function navigate(routeName: any, params?: any) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}
export function goBack() {
  // _navigator.goBack();
  _navigator.dispatch(CommonActions.goBack());
}
export function pop(value) {
  _navigator.dispatch(StackActions.pop(value));
}
export function push(name, params) {
  _navigator.current?.dispatch(StackActions.push(name, params));
}
export function replace(name, params) {
  _navigator.current?.dispatch(StackActions.replace(name, params));
}
export function jumpTo(name, params) {
  _navigator.current?.dispatch(TabActions.jumpTo(name, params));
}
export function removePrevious() {
  _navigator.dispatch(state => {
    const routes = state?.routes.filter(
      (item, index) => index < state?.routes?.length - 1,
    );
    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
}

export const NavigationUtils = {
  navigate,
  setTopLevelNavigator,
  goBack,
  pop,
};
