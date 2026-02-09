import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 117;
  const total = subtotal + deliveryFee;

  const placeOrder = () => {
    // later → save order to backend
    clearCart();
    navigate("/order-success");
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <p className="text-sm text-gray-600">
            Reshu Kunder, Udupi, Karnataka
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Payment Method
          </h2>

          <label className="flex items-center gap-2">
            <input type="radio" checked readOnly />
            Cash on Delivery
          </label>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-lg p-6 h-fit">
          <p>Items: ₹{subtotal}</p>
          <p>Delivery: ₹{deliveryFee}</p>

          <hr className="my-3" />

          <p className="font-semibold text-lg">
            Order Total: ₹{total}
          </p>

          <Button
            className="w-full mt-6 rounded-full bg-yellow-300 hover:bg-yellow-400"
            onClick={placeOrder}
          >
            Place your order
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Checkout;
