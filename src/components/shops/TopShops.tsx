import ShopCard from "./ShopCard";

import shop1 from "@/assets/images/cafe.jpg";
import shop2 from "@/assets/images/coffee.jpg";
import shop3 from "@/assets/images/general.jpg";
import shop4 from "@/assets/images/hotel.jpg";

const shops = [
  { name: "Cafe", image: shop1 },
  { name: "Coffee shop", image: shop2 },
  { name: "Street Food", image: shop3 },
  { name: "Restaurant", image: shop4 },
  { name: "Cafe", image: shop1 },
  { name: "Coffee shop", image: shop2 },
];

const TopShops = () => {
  return (
    <section className="pt-5 pb-0py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-2xl font-bold text-royal">
            Top Shops
          </h2>

  
        </div>

        {/* Shops */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {shops.map((shop, index) => (
            <ShopCard
              key={index}
              name={shop.name}
              image={shop.image}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-6 md:hidden flex justify-center">
          <button className="px-6 py-2 rounded-full border border-gray-300 
                             text-sm font-medium text-gray-700 
                             hover:bg-gray-100 transition">
            View All Shops
          </button>
        </div>

      </div>
    </section>
  );
};

export default TopShops;
