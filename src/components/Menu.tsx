import { useState } from "react";
import MenuItems from "./MenuItems";
import MenuNav from "./MenuNav";

function Menu() {
  const [currentItems, setCurrentItems] = useState("all");
  return (
    <section className="pt-12">
      <h2 className="font-['Pacifico'] text-orange-600 text-center text-5xl">
        Menu
      </h2>
      <MenuNav currentItems={currentItems} setCurrentItems={setCurrentItems} />
      <MenuItems />
    </section>
  );
}

export default Menu;
