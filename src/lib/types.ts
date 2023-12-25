export type TFoodItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  addons?: number[];
  category: string;
};
