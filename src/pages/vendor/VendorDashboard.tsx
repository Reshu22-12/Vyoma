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

    const addDummyShops = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:8000/api/v1/shops/seed",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Dummy shops added ✅");
    window.location.reload();

  } catch (error) {
    console.error(error);
  }
};


    fetchMyShops();
  }, []);

  return (
     <div>
      <h1 className="text-3xl font-bold mb-8">Overview</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Shops</h2>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Products</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Orders</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-3xl font-bold mt-2">₹0</p>
        </div>

      </div>
    </div>
  );
};

export default VendorDashboard;
