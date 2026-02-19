import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Package } from "lucide-react";

const VendorLayout = () => {
  const [productOpen, setProductOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-blue-700 to-indigo-800 text-white p-6">

        <h2 className="text-2xl font-bold mb-8">
          Vyoma Vendor
        </h2>

        <nav className="space-y-2">

          <SidebarLink name="Create Shop" path="/vendor/create-shop" />
          <SidebarLink name="My Shops" path="/vendor/my-shops" />
          <SidebarLink name="Shop Dashboard" path="/vendor/shop-dashboard" />
          <SidebarLink name="Profile" path="/vendor/profile" />
          <SidebarLink name="Category" path="/vendor/category" />

          {/* PRODUCTS DROPDOWN */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setProductOpen(!productOpen)}
              className="w-full justify-between text-white hover:bg-black/30"
            >
              <span className="flex items-center gap-2">
                <Package size={18} />
                Products
              </span>
              {productOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </Button>

            {productOpen && (
              <div className="ml-6 mt-2 space-y-2">
                <SidebarLink
                  name="Add/Edit Products"
                  path="/vendor/products"
                />
                <SidebarLink
                  name="Disable Products"
                  path="/vendor/disable-products"
                />
              </div>
            )}
          </div>

          <SidebarLink name="Order Details" path="/vendor/orders" />
          <SidebarLink name="Customer Details" path="/vendor/customers" />
          <SidebarLink name="Analytics" path="/vendor/analytics" />
          <SidebarLink name="Settings" path="/vendor/settings" />
          <SidebarLink name="Logout" path="/logout" />

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>

    </div>
  );
};

export default VendorLayout;


/* REUSABLE LINK */
const SidebarLink = ({ name, path }: any) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <Button
          variant="ghost"
          className={`w-full justify-start text-white ${
            isActive ? "bg-black text-white" : "hover:bg-black/30"
          }`}
        >
          {name}
        </Button>
      )}
    </NavLink>
  );
};
