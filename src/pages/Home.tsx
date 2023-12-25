import Hero from "../components/Hero";
import Menu from "../components/Menu";
import { useActiveItem } from "../lib/hooks";

function Home() {
  const activeItem = useActiveItem();

  return (
    <main className="lg:mx-24">
      <Hero />
      <Menu />
    </main>
  );
}

export default Home;
