import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  size?: "small" | "medium";
};

const ProductCard = ({
  id,
  name,
  price,
  image,
  size = "medium",
}: Props) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const cardSize =
    size === "small"
      ? "w-[200px]"
      : "w-full";

  const imageHeight =
    size === "small"
      ? "h-[130px]"
      : "h-[160px]";

  return (
    <div
      className={`
        bg-white
        rounded-xl
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        ${cardSize}
      `}
      onClick={() => {
  console.log("Navigating with id:", id);
  navigate(`/product/${id}`);
}}

    >
      {/* IMAGE */}
      <div className={`${imageHeight} flex items-center justify-center p-3`}>
        <img
          src={image}
          alt={name}
          className="h-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-1">
        <p className="text-sm font-medium truncate">
          {name}
        </p>

        <p className="text-base font-semibold text-blue-600">
          ₹ {price}
        </p>

        <Button
          className="
            w-full
            mt-2
            py-2
            text-sm
            rounded-lg
            bg-blue-600
            hover:bg-blue-700
            text-white
          "
          onClick={(e) => {
            e.stopPropagation();
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
