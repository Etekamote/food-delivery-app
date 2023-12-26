import Menu from "../components/Menu";
import { useItems } from "../lib/hooks";

function Home() {
  const items = useItems("");

  console.log("items", items);

  return <Menu />;
}

export default Home;
