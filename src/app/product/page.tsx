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
import React from "react";

const Products = () => {
  const breadcrumb = [
    {
      id: "1",
      name: "Product",
      href: "/product",
    },
  ];
  return (
    <div className="container">
      <Breadcrumb breadcrumbs={breadcrumb} />

      <div>
        <h1>Backpacks, Bags & Totes</h1>
        <div className="flex items-center justify-between">
          <p>98 Items</p>
          <div className="flex items-center gap-4">
            <div>Show Filters</div>
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
      <div></div>
    </div>
  );
};

export default Products;
