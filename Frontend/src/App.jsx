import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import WishList from "./pages/wishList/WishList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { MobileHandlerProvider } from "./utils/mobileHandler";
import NotFound from "./components/Notfound/NotFound";
import { Provider } from "react-redux";
import { store } from "./rtk/store";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // { path: "/", element: <Protector Component={Home} /> },
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/shop", element: <Shop /> },
        { path: "/shop/:slug", element: <ProductDetails /> },
        { path: "/contact", element: <Contact /> },
        { path: "/wishlist", element: <WishList /> },
        { path: "/cart", element: <Cart /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <MobileHandlerProvider>
        <Provider store={store}>
          <ToastContainer />
          <RouterProvider router={router} />
        </Provider>
      </MobileHandlerProvider>
    </>
  );
}

export default App;
