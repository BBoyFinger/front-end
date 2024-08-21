"use client";
import Loading from "@/components/Button/Loading";
import ProductPage from "@/components/LandingPage/ProductPage/page";
import { ProductType } from "@/lib/interface";
import products from "@/lib/mock/Products";

import { useEffect, useState } from "react";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<ProductType>();
  const [loading, isLoading] = useState<boolean>(true);

  const getProductById = (id: string) => {
    return products.find((product) => product.id === id);
  };

  useEffect(() => {
    const productDetail = getProductById(params.id);
    setProduct(productDetail);
    isLoading(false);
  }, [params.id]);

  return (
    <div className="container mb-[200px]">
      {product ? (
        <ProductPage product={product} productId={params.id} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductDetail;
