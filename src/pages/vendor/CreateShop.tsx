import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateShop = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8000/api/v1/shops",
        {
          name: form.name,
          description: form.description,
          address: form.location,
          location: {
            type: "Point",
            coordinates: [
              Number(form.longitude),
              Number(form.latitude),
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Shop created successfully ✅");
      navigate("/vendor/dashboard");

    } catch (error: any) {
      console.error("STATUS:", error.response?.status);
      console.error("DATA:", error.response?.data);
      alert("Error creating shop ❌");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create Shop</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Shop Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="location"
          placeholder="Area (Ex: Balmatta)"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="latitude"
          placeholder="Latitude"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="longitude"
          placeholder="Longitude"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Create Shop
        </button>
      </form>
    </div>
  );
};

export default CreateShop;
