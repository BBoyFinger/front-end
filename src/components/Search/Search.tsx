import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiSearch2Line } from "react-icons/ri";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="rounded-full">
      <Sheet>
        <SheetTrigger className="flex">
          <SheetTitle>
            <RiSearch2Line className="w-[20px] h-[20px]" />
          </SheetTitle>
        </SheetTrigger>
        <SheetContent side={"top"} className="w-full h-[200px] flex items-center ">
          <div className="container ">
            <SheetHeader>   
              <h1 className="text-center font-bold text-4xl">Search Product: </h1>
              <Input placeholder="Search ..." />
              <SheetDescription className="text-center text-xl">
                Popular searches:
              </SheetDescription>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Search;
