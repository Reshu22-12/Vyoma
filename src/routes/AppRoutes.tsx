import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import VendorLayout from "@/layouts/VendorLayout";

import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import VendorDashboard from "@/pages/vendor/VendorDashboard";
import CreateShop from "@/pages/vendor/CreateShop";
import AddProduct from "@/pages/vendor/AddProduct";
import VendorProducts from "@/pages/vendor/VendorProducts";

import SearchResults from "@/pages/SearchResults";


const AppRoutes = () => {
  return (
   <Routes>

  {/* Public Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/search" element={<SearchResults />} />

  {/* Vendor Routes */}
  <Route path="/vendor" element={<VendorLayout />}>
    <Route path="dashboard" element={<VendorDashboard />} />
    <Route path="create-shop" element={<CreateShop />} />
    <Route path="add-product/:shopId" element={<AddProduct />} />
    <Route path="products" element={<VendorProducts />} />
  </Route>

</Routes>

  );
};

export default AppRoutes;
