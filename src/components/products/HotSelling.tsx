import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const HotSelling = () => {
  return (
    <section className="py-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          Hot Selling
        </h2>

        <div className="relative overflow-hidden">
          <div className="marquee flex">
            {[...products, ...products].map((item, index) => (
              <div key={index} className="mr-6 shrink-0">
                <ProductCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  weight={item.weight}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotSelling;
