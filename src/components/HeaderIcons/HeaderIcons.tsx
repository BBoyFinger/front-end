import React from "react";
import {
  RiSearch2Line,
  RiHeart3Line,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { ModeToggle } from "../mode-toggle";
import Search from "../Search/Search";
import Cart from "../ShoppingCart/Cart";

const HeaderIcons = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <ModeToggle />
        <span className="border-solid border-r border-gray-200 h-[30px]"></span>
        <Search />
        <span className="border-solid border-r border-gray-200 h-[30px]"></span>
        <RiHeart3Line className="w-[20px] h-[20px]" />
        <span className="border-solid border-r border-gray-200 h-[30px]"></span>
        <Cart />

      </div>
    </>
  );
};

export default HeaderIcons;
