import HeroCarousel from "@/components/carousel/HeroCarousel";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import TopShops from "@/components/shops/TopShops";
import NearbyShops from "@/components/shops/NearbyShops";
import FeaturedCategories from "@/components/categories/FeaturedCategories";
import HotSelling from "@/components/products/HotSelling";
import Recommended from "@/components/products/Recommended";
import AdCarousel from "@/components/carousel/AdCarousel";


const Home = () => {
  return (
    <div className="space-y-16">
      <HeroCarousel />
      <ServiceHighlights />
      <TopShops />
      <NearbyShops />
      <AdCarousel />
      <FeaturedCategories />
      <HotSelling />
      <Recommended />
    </div>
  );
};

export default Home;
