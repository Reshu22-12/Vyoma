import { useEffect, useState } from "react";
import axios from "axios";

const VendorProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/v1/products/my-products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts(res.data.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Products</h2>

      {products.map((p: any) => (
        <div key={p._id} className="bg-white p-4 rounded shadow mb-4">
          <h3 className="font-semibold">{p.name}</h3>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default VendorProducts;
