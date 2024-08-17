import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Product = () => {
  return (
    <>
      <div >
        <Card>
          <CardHeader className="p-0 relative">
            <Image
              alt="product"
              width={200}
              height={200}
              src="/product/1.jpg"
              className="w-full object-contain"
            />
          </CardHeader>
          <CardFooter className="p-0 absolute top-[50%] left-[50%]">
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Product;
