import {SHOP_INFO, SHOP_LOGOUT} from '../actions/type';

export interface ShopReducersInterface {
  details: {
    active: number;
    avatar_url: string;
    cover_url: string;
    description: string;
    followers: number;
    id: number;
    is_follow: number;
    is_spotlight: number;
    name: string;
    ratting: string;
  };
}

const INITIAL_STATE = {
  details: null,
};

export default (state = INITIAL_STATE, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case SHOP_INFO:
      return Object.assign({}, state, payload);
    case SHOP_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
