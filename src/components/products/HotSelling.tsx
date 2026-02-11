import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const HotSelling = () => {
  const hotProducts = products.filter(
    (item) => item.category === "electronics"
  );

  return (
    <section className="pt-0 py-10 pb-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-royal pb-6">
          Hot Selling
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee">

            {[...hotProducts, ...hotProducts].map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                size="small"
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default HotSelling;
