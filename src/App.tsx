import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

import MainLayout from "@/layouts/MainLayout";
import VendorLayout from "@/layouts/VendorLayout";

/* PUBLIC PAGES */
import Home from "@/pages/Home";
import ShopDetail from "@/pages/ShopDetail";
import CategoryProducts from "@/pages/CategoryProducts";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ProductDetails from "@/pages/ProductDetails";

/* VENDOR PAGES */
import CreateShop from "@/pages/vendor/CreateShop";
import MyShops from "@/pages/vendor/MyShops";
import VendorDashboard from "@/pages/vendor/VendorDashboard";
import Products from "@/pages/vendor/Products";

/* Only import these IF files exist */
/*
import Profile from "@/pages/vendor/Profile";
import Category from "@/pages/vendor/Category";
import DisableProducts from "@/pages/vendor/DisableProducts";
import Orders from "@/pages/vendor/Orders";
import Customers from "@/pages/vendor/Customers";
import Analytics from "@/pages/vendor/Analytics";
import Settings from "@/pages/vendor/Settings";
*/

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>

            {/* ================= PUBLIC ================= */}

            <Route element={<MainLayout />}>

              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<ProductDetails />} />

            </Route>

            <Route path="/shop/:id" element={<ShopDetail />} />
            <Route path="/category/:slug" element={<CategoryProducts />} />
            <Route path="/cart" element={<Cart />} />

            {/* ================= VENDOR ================= */}

            <Route path="/vendor" element={<VendorLayout />}>

              {/* Default redirect */}
              <Route index element={<VendorDashboard />} />

              <Route path="create-shop" element={<CreateShop />} />
              <Route path="my-shops" element={<MyShops />} />
              <Route path="shop-dashboard" element={<VendorDashboard />} />
              <Route path="products" element={<Products />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
