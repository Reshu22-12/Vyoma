import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, name, price, image }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md w-[220px]">
      <div className="h-[180px] flex items-center justify-center bg-gray-50 p-4">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>

      <div className="p-4 space-y-2">
        <p className="text-sm font-medium truncate">{name}</p>
        <p className="text-lg font-bold text-blue-600">₹ {price}</p>

        <Button
          className="w-full rounded-xl
    bg-blue-400 text-white
    flex items-center justify-center gap-2
    transition-all duration-300
    hover:bg-blue-700 hover:shadow-lg
    active:scale-95
  "
          onClick={() =>
            addToCart({ id, name, price, image })
          }
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
