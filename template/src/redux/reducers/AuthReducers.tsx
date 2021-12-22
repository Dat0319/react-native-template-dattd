import { AUTHENTICATE, LOGOUT } from '../actions/type';

export interface AuthReducersInterface {
  token: string;
  user: {
    active: number;
    currency: string;
    description: string;
    email: string;
    full_name: string;
    id: number;
    new_register: number;
    notify: number;
    profile_img_url: string;
  };
  locale?: string;
  isRegister?: boolean;
}

const INITIAL_STATE = {
  token: null,
  user: null,
  locale: 'en',
  isRegister: false,
};

export default (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATE:
      return Object.assign({}, state, payload);
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
