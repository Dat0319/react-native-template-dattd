import {Route} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export type Props = {
  navigation: DrawerNavigationProp<any>;
  route: Route<any>;
};
