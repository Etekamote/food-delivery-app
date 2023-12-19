import { create } from "zustand";
import { TFoodItem } from "../lib/types";

type TCartStore = {
  cart: TFoodItem[];
  addToCart: (item: TFoodItem) => void;
  removeFromCart: (item: TFoodItem) => void;
};

export const useCartStore = create<TCartStore>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    })),
}));
