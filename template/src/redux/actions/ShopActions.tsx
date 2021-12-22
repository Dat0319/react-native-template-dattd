import { SHOP_INFO, SHOP_LOGOUT } from './type';

export const updateShopInfo = (payload) => {
  return { type: SHOP_INFO, payload };
};
export const shopLogout = () => {
  return { type: SHOP_LOGOUT };
};
