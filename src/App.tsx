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

export function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
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
  return (
    <>
      <Header />
      <Hero />
      <main className="lg:mx-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
