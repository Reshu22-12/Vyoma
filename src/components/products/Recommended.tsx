import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const Recommended = () => {
  const recommendedProducts = products.filter(
    (item) => item.category === "grocery"
  );

  return (
    <section className="pt-0 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Recommended For You
          </h2>

          <p className="text-gray-600">
            Personalized picks just for you 🚀
          </p>
        </div>

        <div className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
        ">

          {recommendedProducts.map((item) => (
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
    </section>
  );
};

export default Recommended;
