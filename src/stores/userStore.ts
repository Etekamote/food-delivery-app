import { create } from "zustand";
import { TUser } from "../lib/types";

type TUserStore = {
  user: TUser;
  setUser: (user: TUser) => void;
  logout: () => void;
};

export const useUserStore = create<TUserStore>((set, get) => ({
  user: {
    id: "",
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    zipCode: "",
  },
  setUser: (user) => set({ user }),
  logout: () =>
    set({
      user: {
        id: "",
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        zipCode: "",
      },
    }),
  isUserLoggedIn: () => get().user.id !== "",
}));
