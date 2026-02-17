import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Shop {
  _id: string;
  name: string;
  description: string;
  location?: string;
  coordinates?: {
    type: string;
    coordinates: number[];
  };
  isApproved: boolean;
}

const VendorDashboard = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyShops = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:8000/api/v1/shops/my-shops",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = res.data?.data;

        if (Array.isArray(data)) {
          setShops(data);
        } else {
          console.log("Unexpected response:", res.data);
          setShops([]);
        }

      } catch (error) {
        console.error("Error fetching shops:", error);
        setShops([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMyShops();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>

      <button
        onClick={() => navigate("/vendor/create-shop")}
        className="mb-8 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        + Create New Shop
      </button>

      <h2 className="text-2xl font-semibold mb-4">My Shops</h2>

      {loading ? (
        <p>Loading shops...</p>
      ) : shops.length === 0 ? (
        <p>No shops created yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div
              key={shop._id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-bold">{shop.name}</h3>

              <p>{shop.description}</p>

              {typeof shop.location === "string" && (
                <p>📍 {shop.location}</p>
              )}

              {shop.coordinates &&
                Array.isArray(shop.coordinates.coordinates) &&
                shop.coordinates.coordinates.length === 2 && (
                  <p className="text-sm text-gray-500">
                    Lat: {shop.coordinates.coordinates[1]} | 
                    Lng: {shop.coordinates.coordinates[0]}
                  </p>
                )}

              <div className="mt-2">
                {shop.isApproved ? (
                  <span className="text-green-600">Approved</span>
                ) : (
                  <span className="text-yellow-600">Pending</span>
                )}
              </div>

              <button
                onClick={() =>
                  navigate(`/vendor/add-product/${shop._id}`)
                }
                className="mt-3 bg-green-600 text-white px-3 py-1 rounded"
              >
                Add Product
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorDashboard;
