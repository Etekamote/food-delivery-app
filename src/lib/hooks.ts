import { useEffect, useState } from "react";
import { menu } from "./constans";
import { addons } from "./constans";
import { TAddon } from "./types";

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
