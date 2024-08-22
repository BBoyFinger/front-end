"use client"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BreadcrumbType } from "@/lib/interface";
import { RiMenu5Line } from "react-icons/ri";
import products from "@/lib/mock/Products";
import { mockFilters } from "@/lib/mock/Fillter";

import React, { useState } from "react";
import Filters from "@/components/Filters/Filters";
import Product from "@/components/Product/Product";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [isFillter, setIsFillter] = useState(false);
  const [filters, setFilter] = useState("Show Filter");
  const breadcrumbs: BreadcrumbType[] = [
    { id: "1", name: "Category", href: "/category" },
    { id: "2", name: "Product", href: "/category/product" },
  ];

  const handleShowFilter = () => {
    if(is)
    
  };

  return (
    <div className="container">
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div>
        <h1 className="text-[20px] md:text-[24px] font-normal leading-[1.75rem]">
          Backpacks, Bags & Totes
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-[16px] text-gray-500 font-normal">98 Items</p>
          <div className="flex items-center gap-4">
            <Button
              className="flex justify-center items-center gap-1 cursor-pointer"
              variant={"ghost"}
              onClick={() => handleShowFilter()}
            >
              {filters}
              <RiMenu5Line />
            </Button>
            <div className="flex items-center gap-2">
              Sort:
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3">
        {/* Side bar */}
        <div>
          <Filters filters={mockFilters}/>
        </div>
        {/* Product */}
        <div className="grid grid-cols-2 md:grid-cols-3 col-span-3 gap-2">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
