import { useEffect, useState } from "react";
import { useAddons } from "../../lib/hooks";
import { TFoodCartItem } from "../../lib/types";
import { useCartStore } from "../../stores/cartStore";

type CartItemProps = {
  item: TFoodCartItem;
};

function CartItem({ item }: CartItemProps) {
  const addons = useAddons(item?.addons || []);
  // const price =
  //   addons.length > 0 &&
  //   addons.reduce((acc, addon) => acc + addon.price, item.price).toFixed(2);
  const [price, setPrice] = useState<number>(+item.price.toFixed(2));
  const setCartValue = useCartStore((state) => state.setCartValue);

  useEffect(() => {
    setPrice((prev) => {
      if (addons.length > 0) {
        return Number(addons.reduce((acc, addon) => acc + addon.price, prev));
      }
      return prev;
    });
  }, [addons]);

  useEffect(() => {
    setCartValue(+price);

    return () => {
      setCartValue(-price);
    };
  }, [price]);

  const removeItem = useCartStore((state) => state.removeFromCart);
  const handleClick = () => {
    removeItem(item);
  };
  return (
    <div className="flex w-[100%] gap-8 p-4  border border-solid border-orange-500 relative">
      <img src={item.image} alt="item.name" className="w-32 h-32" />
      <section>
        <h3 className="font-bold text-orange-500 text-2xl">{item.name}</h3>
        <p className="text-lg text-gray-400">
          {addons.length > 0 && "Addons:"}
          {addons.map((addon) => (
            <span>{`${addon.name} `}</span>
          ))}
        </p>
        <p>Price: {price}</p>
      </section>
      <span
        onClick={handleClick}
        className="absolute top-5 right-5 font-bold text-orange-500 cursor-pointer"
      >
        X
      </span>
    </div>
  );
}

export default CartItem;
