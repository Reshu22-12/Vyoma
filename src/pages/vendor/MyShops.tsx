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
    fetchMyShops();
  }, []);

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

      setShops(res.data.data || []);
    } catch (error) {
      console.error("Error fetching shops:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>

      {/* Create Shop Button */}
      <button
        onClick={() => navigate("/vendor/create-shop")}
        className="mb-8 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        + Create New Shop
      </button>

      <h2 className="text-2xl font-semibold mb-4">My Shops</h2>

      {loading ? (
        <p className="text-gray-500">Loading shops...</p>
      ) : shops.length === 0 ? (
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-600">
            You haven't created any shops yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div
              key={shop._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {shop.name}
              </h3>

              <p className="text-gray-600 text-sm mb-2">
                {shop.description}
              </p>

              {/* Safe Location Display */}
              {shop.location && (
                <p className="text-sm">
                  📍 {shop.location}
                </p>
              )}

              {/* Safe Coordinates Display */}
              {shop.coordinates?.coordinates && (
                <p className="text-xs text-gray-500 mt-1">
                  Lat: {shop.coordinates.coordinates[1]} | 
                  Lng: {shop.coordinates.coordinates[0]}
                </p>
              )}

              {/* Approval Status */}
              <div className="mt-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    shop.isApproved
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {shop.isApproved ? "Approved" : "Pending Approval"}
                </span>
              </div>

              {/* Add Product Button */}
              <button
                onClick={() =>
                  navigate(`/vendor/add-product/${shop._id}`)
                }
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
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
