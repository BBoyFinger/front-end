"use client";
import ProductPage from "@/components/LandingPage/ProductPage/page";
import { productType } from "@/lib/interface";
import React, { useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<productType>();
  const [loading, isLoading] = useState(true);
  return <div className="container">
    <ProductPage product={product} productId={params.id}/>
  </div>;
};

export default page;
