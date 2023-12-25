import { menu } from "../lib/constans";
import MenuItem from "./MenuItem";

type MenuItemsProps = {
  currentItems: string;
};

function MenuItems({ currentItems }: MenuItemsProps) {
  const items = menu.filter((item) => {
    if (currentItems === "all") return true;
    return item.category === currentItems;
  });

  //fetching data from the api!!!!
  return (
    <section className="mt-8 flex flex-wrap gap-4 justify-between">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default MenuItems;
