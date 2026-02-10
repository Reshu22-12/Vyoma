import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import WishlistButton from "@/components/common/WishlistButton";

/* TEMP PRODUCT DATA */
const products = [
  {
    id: 1,
    name: "Red Chilli Powder",
    price: 120,
    image: "/src/assets/images/product/redchilli.jpg",
    category: "spices",
    description: "Premium quality red chilli powder.",
    weight: "500g",
    reviews: [
      { id: 1, user: "Ravi", rating: 5, comment: "Very spicy and fresh!" },
      { id: 2, user: "Anu", rating: 4, comment: "Good quality." },
    ],
  },
  {
    id: 2,
    name: "Turmeric Powder",
    price: 90,
    image: "/src/assets/images/product/turmeric.jpg",
    category: "spices",
    description: "Pure turmeric powder with rich color.",
    weight: "250g",
    reviews: [],
  },
  {
    id: 3,
    name: "Mobile Phone",
    price: 15000,
    image: "/src/assets/images/product/mobile.jpg",
    category: "electronics",
    description: "Latest smartphone with powerful performance.",
    weight: "1 unit",
    reviews: [],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-lg font-semibold">
        Product not found
      </div>
    );
  }

  /* DELIVERY DATE LOGIC */
  const deliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date.toDateString();
  };

  /* RELATED PRODUCTS */
  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  /* ADD TO CART WITH QTY */
  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  /* BUY NOW */
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* PRODUCT DETAILS */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE + WISHLIST */}
        <div className="relative bg-white rounded-lg shadow p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain"
          />

          <WishlistButton
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            }}
          />
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-3">{product.description}</p>
          <p className="text-sm mb-2">Weight: {product.weight}</p>

          <p className="text-2xl font-bold text-blue-600 mb-2">
            ₹{product.price}
          </p>

          <p className="text-sm text-green-600 mb-4">
            🚚 Delivery by {deliveryDate()}
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="border p-2 rounded hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>

            <span className="font-medium">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="border p-2 rounded hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
          </div>

         {/* ACTION BUTTONS */}
<div className="grid grid-cols-2 gap-4 mt-4">
  <Button
    className="w-full py-6 text-lg bg-blue-500 text-white"
    onClick={handleAddToCart}
  >
    Add to Cart
  </Button>

  <Button
    className="w-full py-6 text-lg bg-green-600 hover:bg-green-700 text-white"
    onClick={handleBuyNow}
  >
    Buy Now
  </Button>
</div>

          </div>
        </div>
     

      {/* RELATED PRODUCTS */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 text-center hover:shadow transition cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-32 mx-auto object-contain"
              />
              <p className="mt-2 font-medium">{item.name}</p>
              <p className="text-blue-600 font-semibold">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>

        {product.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          product.reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded p-4 mb-3 bg-white"
            >
              <p className="font-medium">{review.user}</p>
              <p className="text-yellow-500">
                ⭐ {review.rating}
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
