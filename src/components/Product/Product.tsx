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
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { Badge } from "../ui/badge";
import { ProductType } from "@/lib/interface";
import Link from "next/link";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <Link href={`product/${product?.id}`} >
        <Card key={product.id}>
          <CardHeader className="p-0 relative">
            <Image
              alt="product"
              width={300}
              height={300}
              src={product?.images[0]}
              className="w-full md:h-[300px] h-[200px] object-cover rounded-t-xl"
              quality={100}
              priority
            />
            <div className="absolute top-3 right-5 ">
              <Badge className="gap-1 w-18 justify-center p-[2px] items-center bg-slate-200 hover:bg-slate-50 hidden lg:flex">
                <IoBagAddOutline className="w-3 h-3 text-black" />
                <span className="text-black text-[10px] ">Add to cart</span>
              </Badge>
            </div>
            <div className="absolute top-3 right-5 lg:hidden">
              <Badge className="gap-1 justify-center p-[2px] items-center bg-slate-200 hover:bg-slate-50 ">
                <CiHeart className="w-4 h-4 text-black" />
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="p-2 flex justify-between">
            <h2 className="text-sm font-semibold truncate ...">{product?.name}</h2>
            <p className="text-sm">${product?.price}</p>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default Product;
