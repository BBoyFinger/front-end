"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Brand = () => {
  const brandImage = [
    {
      id: "1",
      imageUrl: "/brand/1.png",
      altImage: "brand1",
    },
    {
      id: "2",
      imageUrl: "/brand/2.png",
      altImage: "brand2",
    },
    {
      id: "3",
      imageUrl: "/brand/3.png",
      altImage: "brand3",
    },
    {
      id: "4",
      imageUrl: "/brand/4.png",
      altImage: "brand4",
    },
    {
      id: "5",
      imageUrl: "/brand/5.png",
      altImage: "brand5",
    },
    {
      id: "6",
      imageUrl: "/brand/6.png",
      altImage: "brand6",
    },
    {
      id: "7",
      imageUrl: "/brand/7.png",
      altImage: "brand7",
    },
    {
      id: "5",
      imageUrl: "/brand/8.png",
      altImage: "brand8",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="mt-3">
          <span>Top related</span>
          <h1 className="uppercase text-xl font-bold">Brands</h1>
        </div>
        {/* Carousel */}
        <div className="w-[400px]">
          <div className="mt-3">
            <Carousel
              className="w-full max-w-sm"
              plugins={[
                Autoplay({
                  delay: 2000,
                  
                }),
              ]}
            >
              <CarouselContent className="ml-1 flex justify-center items-center">
                {brandImage.map((items) => (
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Image
                        key={items.id}
                        src={items.imageUrl}
                        alt={items.altImage}
                        width={200}
                        height={200}
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
