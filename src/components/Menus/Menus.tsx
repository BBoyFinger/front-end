import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import HeaderIcons from "../HeaderIcons/HeaderIcons";

import Link from "next/link";
import { MenuItemType } from "@/lib/interface";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

interface MenuProps {
  links: MenuItemType[];
}

export const DesktopMenu: React.FC<MenuProps> = ({ links }) => {
  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <RiMenu3Fill className="w-[30px] h-[30px]" />
          </SheetTrigger>
          <SheetContent side={"left"} className="">
            <Link href="/" className="flex flex-col items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={960}
                height={960}
                className="w-[120px] h-[120px] rounded-full "
              />
              <span className="text-cyan-400 font-bold text-xl">Venn Sneaker</span>
            </Link>
            <ul className="flex mt-20 flex-col justify-center gap-4">
              {links.map((link) => (
                <Link href={link.href} key={link.id}>
                  <li className="font-semibold text-xl">{link.title}</li>
                </Link>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      <Link href="/">
        <Image
          src="/logo.png"
          alt=""
          width={960}
          height={960}
          className="w-[120px] h-[120px] rounded-full"
        />
      </Link>

      <HeaderIcons />
    </>
  );
};

export const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  const pathName = usePathname();

  return (
    <>
      <div className="mx-auto">
        <div className="w-full max-w-[480px] mx-auto px-5 bg-black/20 dark:bg-white/20 h-[70px] backdrop-blur-2xl rounded-full  flex justify-between text-2xl text-white/50 items-center">
          {links.map((link) => (
            <TooltipProvider key={link.id}>
              <Link
                href={link.href}
                className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
                  pathName === link.href
                    ? "bg-white  text-black rounded-full"
                    : ""
                }`}
              >
                <Tooltip>
                  <TooltipTrigger> {link.icon}</TooltipTrigger>
                  <TooltipContent>{link.title}</TooltipContent>
                </Tooltip>
              </Link>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </>
  );
};
