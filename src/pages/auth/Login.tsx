import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/auth/send-otp", {
        phone,
      });

      alert("OTP sent ✅ (check backend console)");
      setStep(2);

    } catch (error: any) {
      alert("Failed to send OTP ❌");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/verify-otp",
        { phone, otp }
      );

      // ✅ Save login data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
      localStorage.setItem("role", res.data.user.role);

      // 🔥 Redirect based on role
      if (res.data.user.role === "vendor") {
        navigate("/vendor/dashboard");
      } else {
        navigate("/");
      }

    } catch (error: any) {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      {step === 1 ? (
        <>
          <input
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            onClick={sendOtp}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            onClick={verifyOtp}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Verify OTP
          </button>
        </>
      )}

      <p className="mt-4 text-sm">
        New to VYOMA? <Link to="/register" className="text-blue-600">Create an account</Link>
      </p>
    </div>
  );
};

export default Login;
