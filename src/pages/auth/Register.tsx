import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/v1/auth/register", {
        name: form.name,
        phone: form.phone,
      });

      alert("Registered successfully ✅");
      navigate("/login");

    } catch (error: any) {
      console.error(error.response?.data || error.message);
      alert("Registration failed ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
