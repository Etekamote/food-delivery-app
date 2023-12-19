import MenuItem from "./MenuItem";

type MenuItemsProps = {
  currentItems: string;
};

function MenuItems({ currentItems }: MenuItemsProps) {
  return (
    <section className="mt-8 flex flex-wrap gap-4 justify-between">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </section>
  );
}

export default MenuItems;
