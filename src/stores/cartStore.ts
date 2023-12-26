import { create } from "zustand";
import { TFoodItem, TFoodCartItem } from "../lib/types";

type TCartStore = {
  cart: TFoodCartItem[];
  isCartOpen: boolean;
  cartValue: number;
  addToCart: (item: TFoodItem) => void;
  removeFromCart: (item: TFoodCartItem) => void;
  toggleCart: () => void;
  setCartValue: (value: number) => void;
};

export const useCartStore = create<TCartStore>((set) => ({
  cart: [],
  isCartOpen: false,
  cartValue: 0,
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, { ...item, cartId: new Date().getTime() }],
    })),
  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.cartId !== item.cartId),
    })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  setCartValue: (value) =>
    set((state) => ({ cartValue: state.cartValue + value })),
}));
