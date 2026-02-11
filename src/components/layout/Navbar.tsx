import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, Search, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP ROW */}
        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-extrabold text-blue-700">
            VYOMA
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex items-center w-[420px] relative">
            <Search className="absolute left-4 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search shops or products..."
              className="
                pl-11 pr-4 rounded-full
                bg-gray-100
                border border-transparent
                focus:ring-2 focus:ring-blue-200
                focus:outline-none
              "
            />
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/wishlist">
              <Button variant="ghost" className="p-2 rounded-full hover:bg-blue-50">
                <Heart className="w-5 h-5 text-gray-700" />
              </Button>
            </Link>

            <Link to="/login">
              <Button variant="ghost" className="p-2 rounded-full hover:bg-blue-50">
                <User className="w-5 h-5 text-gray-700" />
              </Button>
            </Link>

            <Link to="/cart">
              <Button
                variant="ghost"
                className="p-2 rounded-full hover:bg-blue-50 relative"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="
                    absolute -top-1 -right-1
                    bg-blue-600 text-white
                    text-[10px]
                    w-4 h-4
                    rounded-full
                    flex items-center justify-center
                  ">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* ✅ MOBILE SEARCH (FULL WIDTH) */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search shops or products..."
              className="
                pl-11 pr-4 rounded-full
                bg-gray-100
                border border-transparent
                focus:ring-2 focus:ring-blue-200
                focus:outline-none
              "
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
