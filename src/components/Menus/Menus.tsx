import Image from "next/image";
import {
  RiMenu3Fill,
  RiSearch2Line,
  RiHeart3Line,
  RiShoppingCart2Line,
} from "react-icons/ri";
import HeaderIcons from "../HeaderIcons/HeaderIcons";

export const DesktopMenu = () => {
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

export const MobileMenu = () => {
  return <></>;
};
