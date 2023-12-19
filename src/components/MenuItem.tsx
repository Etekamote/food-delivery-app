import { Link } from "react-router-dom";
import { TFoodItem } from "../lib/types";

type MenuItemProps = {
  item: TFoodItem;
};

function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="mx-4 bg-white border-orange-500 border w-full flex  p-4 gap-2">
      <img
        src={item.image || `https://via.placeholder.com/150`}
        alt={item.name}
        className="h-[100px] "
      />
      <section>
        <h3 className="text-orange-500 uppercase">{item.name}</h3>
        <p className="text-lg">{item.description}</p>
        <div className="flex justify-between mt-4">
          <span>${item.price}</span>
          <button className="bg-orange-500 text-white px-4 py-2 text-lg ">
            <Link to={`/food/${item.id}`}>Order</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default MenuItem;