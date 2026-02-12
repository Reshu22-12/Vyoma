import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

import ad1 from "@/assets/images/ad12.jpg"
import ad2 from "@/assets/images/ad13.jpg"
import ad3 from "@/assets/images/ad14.jpg"

const MidAdCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {[ad1, ad2, ad3].map((img, index) => (
              <CarouselItem key={index}>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={img}
                    alt="Advertisement"
                    className="w-full h-[220px] md:h-[320px] object-cover"
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

export default MidAdCarousel
