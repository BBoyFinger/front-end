import React from "react";
import Product from "../Product/Product";
import products from "@/lib/mock/Products";

const PopularProduct = () => {
  return (
    <>
      <div className="my-3 flex justify-between items-center">
        <h1 className="uppercase text-xl font-bold">Popular Collection</h1>
        <p className="uppercase font-bold text-sm">Discovery All Products</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default PopularProduct;
