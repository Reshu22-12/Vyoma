import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import WishlistButton from "@/components/common/WishlistButton";
import { products } from "@/data/products";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = products.find(
  (p) => p.id === Number(id)
);


  if (!product) {
    return (
      <div className="p-10 text-center text-lg font-semibold">
        Product not found
      </div>
    );
  }

  /* DELIVERY DATE */
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

  /* ADD TO CART */
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
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
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
          <h1 className="text-3xl font-bold mb-2">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-3">
            {product.description}
          </p>

          <p className="text-sm mb-2">
            Weight: {product.weight}
          </p>

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

          {/* BUTTONS */}
          <div className="flex gap-4">
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            <Button
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3"
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
              <p className="mt-2 font-medium">
                {item.name}
              </p>
              <p className="text-blue-600 font-semibold">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">
          Reviews
        </h2>
        <p className="text-gray-500">
          No reviews yet.
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
