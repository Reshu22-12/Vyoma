import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";

const banners = [banner1, banner2]; // ✅ ONLY 2 IMAGES

const HeroCarousel = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        className="relative"
      >
        <CarouselContent>
          {banners.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* White arrow only (no circle) */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
