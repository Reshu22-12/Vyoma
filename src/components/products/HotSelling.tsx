import { useRef } from "react";
import ProductCard from "@/components/products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Images
import p1 from "@/assets/images/image.jpg";
import p2 from "@/assets/images/image2.jpg";
import p3 from "@/assets/images/image3.jpg";
import p4 from "@/assets/images/image4.jpg";

const products = [
  { id: 1, name: "Fresh Apples", price: 120, image: p1 },
  { id: 2, name: "Rice 5kg", price: 450, image: p2 },
  { id: 3, name: "Milk Pack", price: 50, image: p3 },
  { id: 4, name: "Snacks Combo", price: 99, image: p4 },
  { id: 5, name: "Bread Pack", price: 35, image: p1 },
  { id: 6, name: "Juice Bottle", price: 80, image: p2 },
  { id: 7, name: "Tea Powder", price: 60, image: p3 },
  { id: 8, name: "Cooking Oil", price: 150, image: p4 },
  { id: 9, name: "Biscuits", price: 25, image: p1 },
];

const HotSelling = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Hot Selling</h2>
          
        </div>

        {/* Slider */}
        <Swiper
  modules={[EffectCoverflow, Autoplay]}
  effect="coverflow"
  centeredSlides
  slidesPerView="auto"
  loop
  slideToClickedSlide
  speed={2800}

  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}

  /* 🔑 THESE 3 LINES FIX ADD TO CART */
  preventClicks={false}
  preventClicksPropagation={false}
  touchStartPreventDefault={false}

  coverflowEffect={{
    rotate: 0,
    stretch: 40,
    depth: 140,
    modifier: 2,
    slideShadows: false,
  }}

  spaceBetween={24}
  className="!py-6"
>

          {products.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!w-[240px]"
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              <ProductCard
                id={item.id}          // ✅ REQUIRED
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default HotSelling;
