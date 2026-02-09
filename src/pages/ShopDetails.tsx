// import { useParams } from "react-router-dom";
// import { shops } from "@/data/shops";
// import ProductCard from "@/components/products/ProductCard";

// const ShopDetail = () => {
//   const { id } = useParams();

//   const shop = shops.find((s) => s.id === id);

//   if (!shop) {
//     return <p className="p-6">Shop not found</p>;
//   }

//   return (
//     <section className="py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Shop Header */}
//         <div className="flex gap-6 mb-10">
//           <img
//             src={shop.image}
//             alt={shop.name}
//             className="h-48 w-48 object-cover rounded-xl"
//           />

//           <div>
//             <h1 className="text-3xl font-bold">{shop.name}</h1>
//             <p className="text-gray-500">{shop.location}</p>
//             <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded">
//               ⭐ {shop.rating}
//             </span>
//           </div>
//         </div>

//         {/* Products */}
//         <h2 className="text-xl font-semibold mb-4">
//           Products Available
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {shop.products.map((product) => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopDetail;
