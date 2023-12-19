import MenuNavItem from "./MenuNavItem";
import { useState } from "react";

function MenuNav() {
  const [currentItems, setCurrentItems] = useState("all");
  const categories = [
    "all",
    "breakfast",
    "lunch",
    "shakes",
    "dinner",
    "desserts",
    "snacks",
    "drinks",
  ];
  return (
    <nav className="  bg-orange-500 mt-8 px-6">
      <ul className="flex  overflow-x-auto py-4 scroll no-scrollbar lg:justify-center  cursor-pointer">
        {categories.map((category, i) => (
          <MenuNavItem
            active={category === currentItems}
            key={i}
            setCurrentItems={setCurrentItems}
          >
            {category}
          </MenuNavItem>
        ))}
      </ul>
    </nav>
  );
}

export default MenuNav;
