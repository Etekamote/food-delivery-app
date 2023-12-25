import { Link } from "react-router-dom";
import { TFoodItem } from "../lib/types";

type MenuItemProps = {
  item: TFoodItem;
};

function MenuItem({ item }: MenuItemProps) {
  return (
    <Link
      to={`/food/${item.id}`}
      className="mx-4 bg-white border-orange-500 border w-full lg:w-[48%] flex justify-between  p-4 "
    >
      <img
        src={item.image || `https://via.placeholder.com/150`}
        alt={item.name}
        className="h-[100px] w-[35%] "
      />
      <section className="w-[60%]">
        <h3 className="text-orange-500 uppercase">{item.name}</h3>
        <p className="text-lg">{item.description}</p>
        <div className="flex justify-between mt-4 w-full">${item.price}</div>
      </section>
    </Link>
  );
}

export default MenuItem;
