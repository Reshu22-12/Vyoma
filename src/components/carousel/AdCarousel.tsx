import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import img1 from "@/assets/images/ad3.jpg"
import img2 from "@/assets/images/ad4.jpg"
import img3 from "@/assets/images/ad5.jpg"

const ads = [img1, img2, img3]

const AdCarousel = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  )

  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ⭐ OUTER WRAPPER CONTROLS RADIUS */}
        <div className="rounded-2xl overflow-hidden shadow-md">

          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent>
              {ads.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="h-[220px] sm:h-[260px] md:h-[300px]">
                    <img
                      src={img}
                      alt={`Advertisement ${index + 1}`}
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

export default AdCarousel
