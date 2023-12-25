import { useEffect, useState } from "react";

export function useActiveItem() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = Number(window.location.hash.replace("#", ""));
      setActiveItem(id);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeItem;
}
