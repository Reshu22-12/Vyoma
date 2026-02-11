import { useParams } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";

import p1 from "@/assets/images/product/redchilli.jpg";
import p2 from "@/assets/images/product/turmeric.jpg";
import p3 from "@/assets/images/product/mobile.jpg";
import p4 from "@/assets/images/product/laptop.jpg";
import p5 from "@/assets/images/product/tablet.jpg";
import p6 from "@/assets/images/product/vitamin.jpg";
import p7 from "@/assets/images/product/books.jpg";
import p8 from "@/assets/images/product/pen.jpg";
import p9 from "@/assets/images/product/rice.jpg";
import p10 from "@/assets/images/product/dal.jpg";
import p11 from "@/assets/images/product/food1.jpg";
import p12 from "@/assets/images/product/biriyani.jpg";


/* TEMP DATA (API later) */
const products = [
  { id: 1, name: "Red Chilli Powder", price: 120, image: p1, category: "spices" },
  { id: 2, name: "Turmeric Powder", price: 90, image: p2, category: "spices" },

  { id: 3, name: "Mobile Phone", price: 15000, image: p3, category: "electronics" },
  { id: 4, name: "Laptop", price: 45000, image: p4, category: "electronics" },

  { id: 5, name: "Paracetamol", price: 30, image: p5, category: "pharmacy" },
  { id: 6, name: "Vitamin Tablets", price: 120, image: p6, category: "pharmacy" },

  { id: 7, name: "Notebook", price: 50, image: p7, category: "stationary" },
  { id: 8, name: "Pen Pack", price: 40, image: p8, category: "stationary" },

  { id: 9, name: "India Gate Basmathi Rice", price: 450, image: p9, category: "general" },
  { id: 10, name: "Tata Dal", price: 140, image: p10, category: "general" },

  { id: 11, name: "Chicken Lolipop", price: 250, image: p11, category: "food" },
  { id: 12, name: "Chicken Biriyani", price: 150, image: p12, category: "food" },
];

const CategoryProducts = () => {
  const { slug } = useParams();

  const filtered = products.filter(
    (item) => item.category === slug
  );

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold capitalize mb-6">
          {slug} Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <ProductCard
  key={item.id}
  id={item.id}          // ✅ ADD THIS
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

export default CategoryProducts;
