import { useWishlist } from "@/context/WishlistContext";
import type { WishlistItem } from "@/context/WishlistContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Your Wishlist is empty ❤️
        </h2>
        <p className="text-gray-500 mb-6">
          Save items you like for later
        </p>

        <Button onClick={() => navigate("/")}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          My Wishlist
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {wishlist.map((item: WishlistItem) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-4 cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 mx-auto object-contain"
              />

              <p className="mt-2 font-medium truncate">
                {item.name}
              </p>

              <p className="text-blue-600 font-bold">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
