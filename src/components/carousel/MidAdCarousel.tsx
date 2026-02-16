import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import ad1 from "@/assets/images/ad1.jpg"
import ad2 from "@/assets/images/ad6.jpg"
import ad3 from "@/assets/images/ad12.jpg"
import ad4 from "@/assets/images/ad13.jpg"

const carouselAds = [ad3, ad4]

const MidAdCarousel = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
    })
  )

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-6">

        {/* 🔹 TOP 2 STATIC BANNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={ad1}
              alt="Advertisement"
              className="w-full h-[220px] md:h-[260px] object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={ad2}
              alt="Advertisement"
              className="w-full h-[220px] md:h-[260px] object-cover"
            />
          </div>

        </div>

        {/* 🔹 FULL WIDTH CAROUSEL */}
        <div className="rounded-2xl overflow-hidden shadow-md">
         <div className="w-screen -mx-4 md:mx-0"></div>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent>
              {carouselAds.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="h-[260px] md:h-[380px]">
                    <img
                      src={img}
                      alt="Advertisement"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

        </div>

      </div>
    </section>
  )
}

export default MidAdCarousel
