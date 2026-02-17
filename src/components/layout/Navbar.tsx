import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, Search, Heart, LogOut } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const [user, setUser] = useState<{
    name: string;
    role: string;
  } | null>(null);

  // ✅ Load user from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({
        name: localStorage.getItem("name") || "",
        role: localStorage.getItem("role") || "",
      });
    }
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP ROW */}
        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-extrabold text-blue-700">
            VYOMA
          </Link>

          {/* SEARCH */}
          <div className="hidden md:flex items-center w-[420px] relative">
            <Search className="absolute left-4 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search shops or products..."
              className="pl-11 pr-4 rounded-full bg-gray-100"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">

            {/* Wishlist */}
            <Link to="/wishlist">
              <Button variant="ghost" className="p-2 rounded-full">
                <Heart className="w-5 h-5 text-gray-700" />
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" className="p-2 rounded-full relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* 👇 If NOT logged in */}
            {!user && (
              <Link to="/login">
                <Button variant="ghost" className="p-2 rounded-full">
                  <User className="w-5 h-5 text-gray-700" />
                </Button>
              </Link>
            )}

            {/* 👇 If Logged in */}
            {user && (
              <div className="flex items-center gap-3">

                <div className="text-right">
                  <p className="text-sm font-semibold">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">
                    {user.role}
                  </p>
                </div>

                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="p-2 rounded-full"
                >
                  <LogOut className="w-5 h-5 text-red-500" />
                </Button>
              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
