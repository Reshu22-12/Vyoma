import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import CategoryProducts from "@/pages/CategoryProducts";
import Wishlist from "@/pages/Wishlist";
import ProductDetails from "@/pages/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Route>

      <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
