import { useEffect, useState } from "react";
import { menu } from "./constans";

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

export function useItem(id: number) {
  const item = menu.find((item) => item.id === id);
  return item;
}
