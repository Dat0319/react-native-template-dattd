import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import ShopReducers from './ShopReducers';
import ProfileReducers from './ProfileReducers';

const rootReducer = combineReducers({
  authReducers: AuthReducers,
  profileReducers: ProfileReducers,
  shopReducers: ShopReducers,
});

export type RootReducerProps = ReturnType<typeof rootReducer>;
export default rootReducer;
