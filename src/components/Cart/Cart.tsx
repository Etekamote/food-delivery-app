import { useLockBodyScroll } from "@uidotdev/usehooks";
import Blackout from "./Blackout";
import { Link } from "react-router-dom";
import { useCartStore } from "../../stores/cartStore";
import CartItemsList from "./CartItemsList";
import { useEffect, useRef } from "react";

function Cart() {
  useLockBodyScroll();
  const toggleCart = useCartStore((state) => state.toggleCart);
  const handleCloseCart = () => toggleCart();

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !sectionRef.current?.contains(e.target)
      ) {
        toggleCart();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [toggleCart]);

  return (
    <>
      <Blackout />
      <section
        className="absolute z-50 top-1/2 left-1/2 w-[70%] h-[90%] bg-white -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 overflow-y-auto cart"
        ref={sectionRef}
      >
        <span
          className="absolute top-0 right-4 text-4xl text-orange-500 cursor-pointer"
          onClick={handleCloseCart}
        >
          X
        </span>
        <h2 className="text-3xl font-bold text-center pt-8 text-orange-500">
          Your Cart
        </h2>
        <CartItemsList />
        <button
          onClick={handleCloseCart}
          className="w-[80%] bg-orange-500 rounded-lg text-white py-4 uppercase"
        >
          <Link to="/order">Order now</Link>
        </button>
      </section>
    </>
  );
}

export default Cart;
