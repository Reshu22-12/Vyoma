import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="text-2xl font-extrabold text-blue-700">
          VYOMA
        </Link>

        <div className="hidden md:flex items-center w-[420px] relative">
          <Search className="absolute left-4 text-gray-400 w-4 h-4" />
          <Input
  placeholder="Search shops or products…"
  className="
    pl-11 pr-4 rounded-full
    bg-gray-100
    border border-transparent
    outline-none ring-0

    focus:outline-none
    focus:ring-2 focus:ring-blue-200/50
    focus:border-transparent

    hover:bg-gray-100
  "
/>

        </div>

        <div className="flex items-center gap-4">

          <Link to="/login">
            <Button variant="ghost" className="p-2 rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </Link>

          <Link to="/cart">
            <Button variant="ghost" className="p-2 rounded-full relative">
              <ShoppingCart className="w-5 h-5" />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
