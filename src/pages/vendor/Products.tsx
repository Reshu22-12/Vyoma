import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const Products = ({ shopId }: { shopId: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/products/${shopId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setProducts(res.data.data);
  };

  const handleCreate = async () => {
    await axios.post(
      "http://localhost:8000/api/v1/products",
      { ...form, shopId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(
      `http://localhost:8000/api/v1/products/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchProducts();
  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">Products</h2>

      {/* Add Product Form */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <input
          placeholder="Name"
          className="border p-2 w-full mb-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Description"
          className="border p-2 w-full mb-2"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          className="border p-2 w-full mb-2"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Stock"
          type="number"
          className="border p-2 w-full mb-2"
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p>₹ {product.price}</p>
            <p>Stock: {product.stock}</p>

            <button
              onClick={() => handleDelete(product._id)}
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
