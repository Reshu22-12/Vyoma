import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <div className="space-y-5">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Register
          </Button>
        </div>

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
