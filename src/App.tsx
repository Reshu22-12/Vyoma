import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { CartProvider } from "@/context/CartContext";

import Home from "./pages/Home";
import ShopDetail from "./pages/ShopDetail";
import CategoryProducts from "@/pages/CategoryProducts";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          
          {/* Pages WITH navbar */}
          <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
           <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
<Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/shop/:id" element={<ShopDetail />} />
           <Route path="/category/:slug" element={<CategoryProducts />} />
           <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
