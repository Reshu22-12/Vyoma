import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const { shopId } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8000/api/v1/products",
        {
          name,
          price,
          shopId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product created successfully");
      console.log(res.data);
    } catch (error: any) {
      console.log(error.response?.data);
      alert("Error creating product");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
