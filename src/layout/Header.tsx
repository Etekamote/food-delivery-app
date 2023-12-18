import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className="text-center py-8 relative">
      <Link to="/">
        <h1 className="font-['Pacifico'] text-orange-600  relative text-5xl hover:rotate-2 hover:scale-110 inline-block ">
          <span className="absolute text-2xl text-green-600 -top-3 left-6 -rotate-6">
            best
          </span>
          foodinthecity
        </h1>
      </Link>
      <span className="absolute right-40">
        <FontAwesomeIcon
          icon={faCartShopping}
          className=" text-4xl top-8 bg-orange-600 text-white rounded-full p-4 hover:scale-110 hover:cursor-pointer"
        />
        <span className="absolute flex -right-6 top-0 justify-center items-center bg-white rounded-full p-2 w-10 h-10 font-bold">
          0
        </span>
      </span>
    </header>
  );
}

export default Header;
