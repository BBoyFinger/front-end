import { Badge } from "@/components/ui/badge";
import React from "react";

const Slogan = () => {
  return (
    <>
      <div>
        <Badge className="bg-slate-300 hover:text-white text-black">
          Modern
        </Badge>
      </div>
      <div>
        <h1 className="uppercase text-[60px] leading-none">Release Style <br /> With <span className="text-gray-400">Confidence</span></h1>
        <p className="text-sm text-gray-400">Perfect blend of fashion and ease in our comfortable Clothes.</p>
      </div>
    </>
  );
};

export default Slogan;
