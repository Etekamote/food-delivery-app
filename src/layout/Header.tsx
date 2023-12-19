import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../stores/cartStore";
function Header() {
  const cartLength = useCartStore((state) => state.cart.length);
  return (
    <header className="text-center py-8 sticky top-0 bg-white z-50">
      <Link to="/">
        <h1 className="font-['Pacifico'] text-orange-600  relative text-5xl hover:rotate-2 hover:scale-110 inline-block ">
          <span className="absolute text-2xl text-green-600 -top-3 left-6 -rotate-6">
            best
          </span>
          foodinthecity
        </h1>
      </Link>
      <span className="absolute right-10 lg:right-40 ">
        <FontAwesomeIcon
          icon={faCartShopping}
          className=" text-2xl lg:text-4xl top-8 bg-orange-600 text-white rounded-full p-4 hover:scale-110 hover:cursor-pointer"
        />
        <span className="absolute flex -right-3 lg:-right-6 top-0 justify-center items-center bg-white rounded-full p-2 w-6 lg:w-10 h-6 lg:h-10 font-bold text-lg lg:text-xl">
          {cartLength}
        </span>
      </span>
    </header>
  );
}

export default Header;
