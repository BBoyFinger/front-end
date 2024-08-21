import React from "react";
import Product from "../Product/Product";
import products from "@/lib/mock/Products";

const Products = () => {
  return (
    <>
      <div className="my-3  flex justify-between items-center">
        <h1 className="uppercase text-xl font-bold">All Collections</h1>
        <p className="font-semibold text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
