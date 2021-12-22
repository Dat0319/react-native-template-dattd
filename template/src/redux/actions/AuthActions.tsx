import {AUTHENTICATE, LOGOUT} from './type';

export const authenticate = payload => {
  return {type: AUTHENTICATE, payload};
};
export const logout = () => {
  return {type: LOGOUT};
};
