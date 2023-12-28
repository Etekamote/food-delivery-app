import { useCartStore } from "../../stores/cartStore";
import CartItem from "./CartItem";

function CartItemsList() {
  const cartItems = useCartStore((state) => state.cart);
  const price = useCartStore((state) => state.cartValue);

  return (
    <>
      {cartItems.length === 0 && <p>No items in cart</p>}
      <section className="w-[30%] flex flex-col gap-8">
        {cartItems.map((item) => (
          <CartItem key={item.cartId} item={item} />
        ))}
      </section>
      <p>${price.toFixed(2)}</p>
    </>
  );
}

export default CartItemsList;
