import { useEffect, useState } from "react";
import { useAddons, useItem } from "../lib/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { TAddon, TFoodItem } from "../lib/types";
import { useCartStore } from "../stores/cartStore";

function Food() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { item, isLoading, error } = useItem(id as string);
  const addonsList = useAddons(item?.addons || []);

  const addToCart = useCartStore((state) => state.addToCart);

  const [orderItem, setOrderItem] = useState<TFoodItem>({
    id: 0,
    name: "",
    price: 0,
    description: "",
    image: "",
    addons: [],
    category: "",
  });

  useEffect(() => {
    if (item) {
      const newItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
        addons: [],
        category: item.category,
      };
      setOrderItem(newItem);
    }
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setOrderItem({
        ...orderItem,
        addons: [...(orderItem.addons ?? []), +e.target.name],
      });
    } else {
      setOrderItem({
        ...orderItem,
        addons: (orderItem.addons ?? []).filter(
          (addon: number) => addon !== +e.target.name
        ),
      });
    }
  };

  const handleClick = () => {
    addToCart(orderItem);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) navigate("/");

  return (
    <section className="mt-8 flex flex-col items-center">
      <img
        src={item?.image || `https://via.placeholder.com/150`}
        alt={item?.name}
        className="h-[300px] w-[300px] mx-auto"
      />
      <h2 className="text-4xl text-center mt-8 uppercase font-bold text-orange-500">
        {item?.name}
      </h2>
      <p className="text-xl mt-8 text-center">{item?.description}</p>
      <div className="mt-8 text-center text-3xl text-orange-500 font-bold">
        ${item?.price.toFixed(2)}
      </div>

      {addonsList && (
        <div className="mt-8 flex flex-col items-center">
          <p>Addons</p>
          {addonsList.map((addon?: TAddon) => (
            <label
              key={addon?.id}
              className="block mt-2 bg-orange-500 w-[300px] text-center text-white p-2 rounded-lg hover:scale-110 cursor-pointer"
            >
              <input
                type="checkbox"
                name={`${addon?.id}`}
                onChange={(e) => handleChange(e)}
              />
              <span className="ml-2">
                {addon?.name} - ${addon?.price}
              </span>
            </label>
          ))}
        </div>
      )}

      <button
        className="mt-8 bg-white text-orange-500 p-2 rounded-lg w-[400px] border border-solid border-orange-500 hover:scale-110"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </section>
  );
}

export default Food;
