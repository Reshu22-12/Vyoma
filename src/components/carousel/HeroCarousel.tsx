import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import banner1 from "@/assets/images/banner1.jpg"
import banner2 from "@/assets/images/banner2.jpg"

const banners = [banner1, banner2]

const HeroCarousel = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  )

  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">
      
      {/* ⭐ Outer wrapper controls radius */}
      <div className="rounded-2xl overflow-hidden shadow-lg">

        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[autoplay.current]}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.reset()}
          className="w-full"
        >
          <CarouselContent className="transition-opacity duration-700 ease-in-out">
            {banners.map((img, index) => (
              <CarouselItem key={index}>
                <div className="h-[320px] sm:h-[380px] md:h-[420px]">
                  <img
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  )
}

export default HeroCarousel
