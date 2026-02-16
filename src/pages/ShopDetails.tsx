import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/product";

interface Shop {
  _id: string;
  name: string;
  description?: string;
  address: string;
}

const ShopDetail = () => {
  const { id } = useParams(); // shopId from URL

  const [shop, setShop] = useState<Shop | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        // 1️⃣ Get shop details
        const shopRes = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/shops/${id}`
        );

        setShop(shopRes.data.data);

        // 2️⃣ Get products of that shop
        const productRes = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/products/shop/${id}`
        );

        setProducts(productRes.data.data);
      } catch (err) {
        console.error("Shop fetch error:", err);
        setError("Failed to load shop data");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchShopData();
  }, [id]);

  if (loading) {
    return (
      <section className="py-10 text-center">
        <p>Loading shop...</p>
      </section>
    );
  }

  if (error || !shop) {
    return (
      <section className="py-10 text-center">
        <p className="text-red-500">{error || "Shop not found"}</p>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Shop Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">{shop.name}</h1>
          <p className="text-gray-500">{shop.address}</p>
        </div>

        {/* Products */}
        <h2 className="text-xl font-semibold mb-4">
          Products Available
        </h2>

        {products.length === 0 ? (
          <p className="text-gray-500">No products available</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopDetail;
