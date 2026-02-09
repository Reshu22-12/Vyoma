import shop1 from "@/assets/images/shops/shop1.jpg";
import shop2 from "@/assets/images/shops/shop2.jpg";

import p1 from "@/assets/images/image.jpg";
import p2 from "@/assets/images/image2.jpg";
import p3 from "@/assets/images/image3.jpg";

export const shops = [
  {
    id: "sri-lakshmi",
    name: "Sri Lakshmi Stores",
    location: "Hampankatta, Mangalore",
    rating: 4.6,
    image: shop1,
    products: [
      { id: 1, name: "Rice (5kg)", price: 549, image: p1 },
      { id: 2, name: "Cooking Oil", price: 299, image: p2 },
    ],
  },
  {
    id: "apollo",
    name: "Apollo Pharmacy",
    location: "Bejai, Mangalore",
    rating: 4.7,
    image: shop2,
    products: [
      { id: 3, name: "Vitamin Tablets", price: 199, image: p3 },
      { id: 4, name: "Pain Relief Gel", price: 149, image: p2 },
    ],
  },
];
