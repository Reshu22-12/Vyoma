import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <div className="space-y-5">
          <Input placeholder="Email or Mobile number" />
          <Input type="password" placeholder="Password" />

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Login
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our Terms & Privacy Policy
        </p>

        <p className="text-sm text-center mt-6">
          New to VYOMA?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
