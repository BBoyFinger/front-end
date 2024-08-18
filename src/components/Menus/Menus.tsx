import Image from "next/image";
import {
  RiMenu3Fill,
  RiSearch2Line,
  RiHeart3Line,
  RiShoppingCart2Line,
} from "react-icons/ri";
import HeaderIcons from "../HeaderIcons/HeaderIcons";

import Link from "next/link";
import { MenuItemType } from "@/lib/interface";

interface MenuProps{
  links: MenuItemType[];
}

export const DesktopMenu: React.FC<MenuProps> = ({links}) => {
  return (
    <>
      <RiMenu3Fill className="w-[30px] h-[30px]" />

      <Image
        src="/logo.png"
        alt=""
        width={960}
        height={960}
        className="w-[120px] h-[120px] rounded-full"
      />

      <HeaderIcons />
    </>
  );
};

export const MobileMenu: React.FC<MenuProps> = ({links}) => {
  return (
    <>
      <div className="mx-auto">
        <div className="w-full max-w-[480px] mx-auto px-5 bg-black h-[70px] backdrop-blur-2xl rounded-full  flex justify-between text-2xl text-white/50 items-center">
        {links.map((link) => (
          <Link key={link.id} href={link.href} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center active:bg-white active:text-black active:rounded-full">
            {link.icon}
          </Link>
        ))}

        </div>
      </div>
    </>
  );
};
