export type TAddon = {
  id: number;
  name: string;
  price: number;
};

export type TFoodItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  addons: TAddon[];
};
