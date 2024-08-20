import AddToCartBtn from "@/components/Button/AddToCartBtn";
import Product from "@/components/Product/Product";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productType } from "@/lib/interface";
import Image from "next/image";
import React, { useState } from "react";

interface ProductPageProps {
  productId: string;
  product: productType;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, productId }) => {
  const [selectedIdx, setIndex] = useState(0);
  return (
    <div className="container mt-12 grid md:grid-cols-6 grid-col-1 text-center items-center">
      <div className="md:col-start-2 md:col-span-3 flex flex-col items-center">
        <ProductCarousel
          product={product}
          setIndex={setIndex}
          selectedIdx={selectedIdx}
        />
        <ProductReview
          product={product}
          setIndex={setIndex}
          selectedIdx={selectedIdx}
        />
      </div>
      <div className="mt-12 text-[1.5rem] md:text-[2rem] md:col-start-5 self-start md:text-start">
        <p className="font-semibold">{product?.name} Nike air</p>
        <p className="text-[1.5rem]">{product?.price} $240</p>
        <p className="font-extralight my-4 text-[1.5rem]">
          {product?.description} Hello world
        </p>
        <p className="text-[1.25rem]">{product?.quality} 24</p>
        <AddToCartBtn />
      </div>
    </div>
  );
};

interface CarouseProps {
  product: productType;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedIdx: number;
}

export default ProductPage;

const ProductCarousel: React.FC<CarouseProps> = ({
  product,
  setIndex,
  selectedIdx,
}) => {
  const previousClick = () => {
    if (selectedIdx > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const nextClick = () => {
    if (selectedIdx < product.images.length - 1) {
      setIndex((next) => next + 1);
    }
  };
  return (
    <Carousel className="mt-6 w-[280px] md:w-[480px]">
      <CarouselContent>
        {product?.images.map((imageUrl: string) => (
          <div className="p-2">
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                <Image
                  width={200}
                  height={200}
                  src={imageUrl}
                  alt={"Product Detail"}
                  className={
                    "object-contain w-[120px] h-[120px] md:w-[200px] relative"
                  }
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </CarouselContent>
      <div className="" onClick={previousClick}>
        <CarouselPrevious />
      </div>
      <div className="" onClick={nextClick}>
        <CarouselNext />
      </div>
    </Carousel>
  );
};

const ProductReview: React.FC<CarouseProps> = ({
  product,
  setIndex,
  selectedIdx,
}) => {
  return (
    <div className="mt-8 flex">
      {product?.images.map((imageUrl: string, idx: number) => (
        <div className="" key={`preview-${imageUrl}`}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={"Product Preview"}
            className={`${
              idx == selectedIdx ? "blur-none" : "blur-sm"
            } object-contain w-[120px] h-[120px] md:w-[200px] relative`}
          />
        </div>
      ))}
    </div>
  );
};
