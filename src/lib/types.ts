export type TFoodItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  addons?: number[];
  category: string;
};
export type TFoodCartItem = TFoodItem & {
  cartId: number;
};
export type TAddon = {
  id: number;
  name: string;
  price: number;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  zipCode: string;
};
