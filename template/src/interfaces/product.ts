export interface IProductImages {
  id: number;
  media_url: string;
}
export interface IProduct {
  id: number;
  shop_id: number;
  name: string;
  description: string;
  status: number;
  currency: string;
  price: number;
  images: IProductImages[];
  attributes: any[];
}
