import { create } from "zustand";
import { TOrderItem } from "../lib/types";

type TCartStore = {
  cart: TOrderItem[];
  addToCart: (item: TOrderItem) => void;
  removeFromCart: (item: TOrderItem) => void;
};

export const useCartStore = create<TCartStore>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    })),
}));
