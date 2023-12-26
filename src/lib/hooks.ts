import { useEffect, useState } from "react";
import { menu } from "./constans";
import { addons } from "./constans";
import { TAddon, TFoodItem } from "./types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export function useActiveItem() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = Number(window.location.hash.replace("#", ""));
      setActiveItem(id);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeItem;
}

export function useItems(category?: string) {
  const [items, setItems] = useState<TFoodItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let q = query(collection(db, "food"));
      if (category) {
        q = query(collection(db, "food"), where("category", "==", category));
      }

      try {
        const snapshot = await getDocs(q);
        setItems(snapshot.docs.map((doc) => doc.data()) as TFoodItem[]);
      } catch (error) {
        // Handle error, log, or set an error state
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return items ?? null;
}

export function useItem(id: string | undefined) {
  if (!id) return undefined;
  const item = menu.find((item) => item.id === +id);
  return item;
}

export function useAddons(input: number[] | undefined) {
  if (!input) return undefined;

  const addonsList = addons.map((addon: TAddon) => {
    if (input.includes(addon.id)) {
      return addon;
    }
  });

  return addonsList;
}
