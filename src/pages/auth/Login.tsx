import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Send OTP
  const handleSendOtp = async () => {
    try {
      setLoading(true);
      setError("");

      await axios.post(`${API}/auth/send-otp`, { phone });

      alert("OTP sent! Check backend console 🔥");
      setStep("otp");

    } catch (err: any) {
      setError(err.response?.data?.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Verify OTP
  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(`${API}/auth/verify-otp`, {
        phone,
        otp,
      });

      // ✅ Store token
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);

    // ✅ Redirect based on role
    if (res.data.user.role === "vendor") {
      navigate("/vendor/dashboard");
    } else {
      navigate("/");
    }

  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {step === "phone" ? (
          <>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded mb-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-3 border rounded mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full bg-green-600 text-white p-3 rounded"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">
            {error}
          </p>
        )}

        {/* Navigation */}
        <p className="text-center mt-6 text-sm">
          New to VYOMA?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
