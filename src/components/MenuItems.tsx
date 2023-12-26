import { useItems } from "../lib/hooks";
import MenuItem from "./MenuItem";

type MenuItemsProps = {
  currentItems: string;
};

function MenuItems({ currentItems }: MenuItemsProps) {
  const category = currentItems === "all" ? "" : currentItems;
  const items = useItems(category);

  return (
    <section className="mt-8 flex flex-wrap gap-4 justify-between">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default MenuItems;
