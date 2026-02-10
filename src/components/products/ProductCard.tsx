import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import WishlistButton from "@/components/common/WishlistButton";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, name, price, image }: Props) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        hover:shadow-lg
        transition
        cursor-pointer
        w-[220px]
      "
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* IMAGE */}
      <div className="relative h-[180px] bg-gray-50 flex items-center justify-center p-4">
  <img src={image} alt={name} className="h-full object-contain" />

  <WishlistButton
    product={{ id, name, price, image }}
  />
</div>


      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <p className="text-sm font-medium truncate">
          {name}
        </p>

        <p className="text-lg font-bold text-blue-600">
          ₹ {price}
        </p>

        {/* ADD TO CART */}
        <Button
          className="w-full rounded-xl bg-blue-500 text-white"
          onClick={(e) => {
            e.stopPropagation(); // 🚫 stop card navigation
            addToCart({ id, name, price, image });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
