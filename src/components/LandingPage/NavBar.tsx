"use client"
import React from "react";
import { DesktopMenu, MobileMenu } from "../Menus/Menus";
import { IoIosHome, IoIosNotificationsOutline } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import { MdCategory } from "react-icons/md";




const NavBar = () => {


  const links = [
    {
      id: "1",
      title: "Home",
      href: "/",
      icon: <IoIosHome />,
    },
    {
      id: "2",
      title: "Category",
      href: "/category",
      icon: <MdCategory />,
    },
    {
      id: "3",
      title: "Cart",
      href: "/cart",
      icon: <CiHeart />,
    },
    {
      id: "4",
      title: "Notification",
      href: "/notify",
      icon: <IoIosNotificationsOutline />,
    },
    {
      id: "5",
      title: "Login",
      href: "/login",
      icon: <CiUser />,
    },
  ];
  return (
    <div className="container">
      {/* Desktop  */}
      <nav className="hidden md:flex flex-row  gap-4 items-center justify-between">
        <DesktopMenu links={links} />
      </nav>
      {/* Mobile */}
      <nav className="lg:hidden container fixed bottom-2 left-0 lg:bottom-8 w-full z-50">
        <MobileMenu links={links} />
      </nav>
    </div>
  );
};

export default NavBar;
