export type TFoodItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  addons?: number[];
  category: string;
};

export type TAddon = {
  id: number;
  name: string;
  price: number;
};

export type TOrderItem = {
  id: number;
  name: string;
  price: number;
  addons?: number[];
};
