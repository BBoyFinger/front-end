"use client"
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const ßanner = () => {
  return (
    <div className="mt-3">
      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        })
      ]}>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/slider_1.webp"
              alt=" banner2"
              width={1920}
              height={600}
              className="w-full h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/slider_2.jpg"
              alt="banner3"
              width={1920}
              height={600}
              className="w-full h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/slider_3.jpg"
              alt="banner4"
              width={1920}
              height={600}
              className="w-full h-auto object-contain"
            />
          </CarouselItem>
        </CarouselContent>
    
      </Carousel>
    </div>
  );
};

export default ßanner;
