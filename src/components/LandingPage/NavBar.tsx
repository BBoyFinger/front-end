import React from "react";
import { DesktopMenu, MobileMenu } from "../Menus/Menus";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="container">
      {/* Desktop  */}
      <div className="hidden md:flex flex-row  gap-4 items-center justify-between">
        <DesktopMenu />
      </div>
      {/* Mobile */}
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
