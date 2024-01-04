import { useEffect, useState } from "react";
import { TAddon, TFoodItem } from "./types";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

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

export function useItem(id: string) {
  const [item, setItem] = useState<TFoodItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "food", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem(docSnap.data() as TFoodItem);
        } else {
          setError("Item not found");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setItem(null);
        setIsLoading(false);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [id]);

  return { item, isLoading, error };
}

export function useAddons(input: number[]) {
  const [addonsList, setAddonsList] = useState<TAddon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (input.length === 0) return;
      const q = query(collection(db, "addons"), where("id", "in", [...input]));

      try {
        const snapshot = await getDocs(q);
        setAddonsList(snapshot.docs.map((doc) => doc.data()) as TAddon[]);
      } catch (error) {
        // Handle error, log, or set an error state
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [input]);
  return addonsList;
}
