import hero from "../hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className=" h-80 lg:h-96 lg:mx-24 mt-8 relative">
      <img src={hero} alt="hero" className="w-full h-full  object-cover " />
      <div className="absolute top-20 left-10 lg:left-32">
        <h2 className="  text-white text-4xl uppercase font-bold bg-orange-500 p-2 lg:text-6xl">
          Check our new burger
        </h2>
        <button className="mt-8 border-solid border-2  border-orange-500 text-white text-2xl lg:text-4xl uppercase font-bold px-4 py-2 hover:border-white hover:text-orange-500 hover:scale-110">
          <Link to="/order">Order now</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
