
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import CategoryProducts from "@/pages/CategoryProducts";
import Wishlist from "@/pages/Wishlist";
import ProductDetails from "@/pages/ProductDetails";
import CreateShop from "@/pages/vendor/CreateShop";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/vendor/create-shop" element={<CreateShop />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
};

export default AppRoutes;
