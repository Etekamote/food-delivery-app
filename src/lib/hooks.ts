import { useEffect, useState } from "react";
import { TAddon, TFoodItem, TUser } from "./types";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
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

export function useUser(email: string, password: string) {
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "usersDetails"),
          where("email", "==", email),
          where("password", "==", password)
        );

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return;
        } else {
          setUser({
            id: querySnapshot.docs[0].id,
            name: querySnapshot.docs[0].data().name,
            email: querySnapshot.docs[0].data().email,
            address1: querySnapshot.docs[0].data().address1,
            address2: querySnapshot.docs[0].data().address2,
            city: querySnapshot.docs[0].data().city,
            zipCode: querySnapshot.docs[0].data().zipCode,
            phone: querySnapshot.docs[0].data().phone,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser(null);
      }
    };

    fetchData();
  }, [email, password]);

  return { user };
}
