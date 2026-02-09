import ProductCard from "@/components/products/ProductCard";

/* ✅ reuse existing images */
import p1 from "@/assets/images/image.jpg";
import p2 from "@/assets/images/image2.jpg";
import p3 from "@/assets/images/image3.jpg";
import p4 from "@/assets/images/image4.jpg";

/* ✅ products data */
const products = [
  { id: 1, name: "Organic Vegetables", price: 120, image: p1 },
  { id: 2, name: "Fresh Milk Pack", price: 50, image: p2 },
  { id: 3, name: "Daily Snacks Combo", price: 99, image: p3 },
  { id: 4, name: "Premium Rice 5kg", price: 450, image: p4 },
  { id: 5, name: "Bread Pack", price: 35, image: p1 },
  
];

const Recommended = () => {
  return (
    /* ✅ SAME spacing as other sections */
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Recommended For You
          </h2>

          <p className="text-gray-600">
            Personalized picks just for you 🚀
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">

          {products.map((item) => (
            <ProductCard
  id={item.id}
  name={item.name}
  price={item.price}
  image={item.image}
/>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Recommended;
