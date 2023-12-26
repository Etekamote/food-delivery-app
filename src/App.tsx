import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import Food from "./pages/Food";
import Order from "./pages/Order";
import Helper from "./pages/Helper";
import { useCartStore } from "./stores/cartStore";
import Cart from "./components/Cart/Cart";

export function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />}>
          <Route path=":id" element={<Food />} />
        </Route>
        <Route path="/order" element={<Order />} />
        <Route path="/helper" element={<Helper />} />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Route>
    )
  );

  return (
    <div className="font-['Inter']">
      <RouterProvider router={route} />
    </div>
  );
}

export const Root = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  return (
    <>
      {isCartOpen && <Cart />}
      <Header />
      <Hero />
      <main className="lg:mx-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
