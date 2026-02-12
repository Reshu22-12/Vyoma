import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Clock } from "lucide-react";
import { useState } from "react";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  weight?: string;
};

const ProductCard = ({
  id,
  name,
  price,
  image,
  weight,
}: Props) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="
        w-[190px]
        bg-white
        rounded-xl
        border border-gray-200
        hover:shadow-lg
        transition-all duration-300
        cursor-pointer
        relative
        p-3
      "
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* RIGHT SIDE ACTION BUTTONS */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="
            bg-white
            border border-gray-200
            rounded-full
            p-1.5
            shadow-sm
            hover:bg-gray-50
            transition
          "
        >
          <Heart
            size={14}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }
          />
        </button>

        {/* Share */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const url = window.location.origin + `/product/${id}`;

            if (navigator.share) {
              navigator.share({
                title: name,
                text: name,
                url,
              });
            } else {
              navigator.clipboard.writeText(url);
              alert("Link copied!");
            }
          }}
          className="
            bg-white
            border border-gray-200
            rounded-full
            p-1.5
            shadow-sm
            hover:bg-gray-50
            transition
          "
        >
          <Share2 size={14} className="text-gray-600" />
        </button>
      </div>

      {/* IMAGE WRAPPER (IMPORTANT FIX) */}
      <div className="h-[130px] overflow-hidden flex items-center justify-center mb-3 rounded-lg">
        <img
          src={image}
          alt={name}
          className="
            h-full object-contain
            transition-transform duration-300
            hover:scale-105
          "
        />
      </div>

      {/* DELIVERY TIME */}
      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
        <Clock size={12} />
        <span>8 MINS</span>
      </div>

      {/* PRODUCT NAME */}
      <h3 className="text-sm font-medium leading-snug mb-1 line-clamp-2">
        {name}
      </h3>

      {/* WEIGHT */}
      {weight && (
        <p className="text-xs text-gray-500 mb-2">
          {weight}
        </p>
      )}

      {/* PRICE + ADD */}
      <div className="flex items-center justify-between mt-3">
        <p className="font-semibold text-sm">
          ₹{price}
        </p>

        <Button
          size="sm"
          className="
            bg-white
            text-green-600
            border border-green-600
            hover:bg-green-50
            px-4
            text-xs
            font-semibold
            rounded-md
          "
          onClick={(e) => {
            e.stopPropagation();
            addToCart({ id, name, price, image });
          }}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
