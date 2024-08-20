import { Badge } from "@/components/ui/badge";
import React from "react";
import Search from "../Search/Search";

const Slogan = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <Badge className="bg-slate-300 hover:text-white text-black">
          Modern
        </Badge>

        <div className="p-1 hover:bg-slate-500 lg:hidden border-solid border border-gray-300 rounded-full cursor-pointer">
          <Search />
        </div>
      </div>
      <div className="mt-3">
        <h1 className="uppercase text-4xl lg:text-[60px] leading-none">
          Release Style <br /> With{" "}
          <span className="text-gray-400">Confidence</span>
        </h1>
        <p className="text-sm text-gray-400 leading-1 mt-3">
          Perfect blend of fashion and ease in our comfortable Clothes.
        </p>
      </div>
    </>
  );
};

export default Slogan;
