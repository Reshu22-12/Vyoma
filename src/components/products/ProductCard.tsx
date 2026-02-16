import { Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    rating?: number;
    reviews?: number;
    originalPrice?: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
if (!product) return null;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 relative group">

      {/* Badge */}
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
        NEW
      </span>

      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img src={product?.image || "/placeholder.png"} 

          alt={product?.name || "Product"}
          className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 font-semibold text-gray-800">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < (product.rating || 4)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-500">
          ({product.reviews || 120})
        </span>
      </div>

      {/* Price */}
      <div className="mt-2">
  {product.originalPrice && (
    <p className="text-sm text-gray-400 line-through">
      ₹ {product.originalPrice}
    </p>
  )}

  <p className="text-blue-600 font-bold text-lg">
    ₹ {product.price}
  </p>

  {product.originalPrice && (
    <p className="text-green-600 text-sm font-medium">
      {Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )}
      % OFF
    </p>
  )}
</div>


      {/* Button */}
      <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
