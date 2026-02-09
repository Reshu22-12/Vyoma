import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import img2 from "@/assets/images/ad3.jpg";
import img3 from "@/assets/images/ad4.jpg";
import img4 from "@/assets/images/ad5.jpg";

const ads = [img2, img3, img4];

const AdCarousel = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <Carousel
          plugins={[autoplay.current]}
          className="relative"
        >
          <CarouselContent>
            {ads.map((img, index) => (
              <CarouselItem key={index}>
                
                {/* AD BANNER */}
                <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt={`Advertisement ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default AdCarousel;
