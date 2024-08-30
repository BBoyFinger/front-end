import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Footer = () => {
  const links = [
    { linkId: "1", title: "Home", href: "/" },
    { linkId: "2", title: "Projects", href: "/projects" },
    { linkId: "3", title: "Blog", href: "/blog" },
    { linkId: "4", title: "Category", href: "/category" },
  ];
  const features = [
    {
      id: "1",
      title: "About Us",
      href: "/about",
    },
    {
      id: "2",
      title: "Introductions",
      href: "/introduction",
    },
    {
      id: "3",
      title: "Catelog",
      href: "/Catelog",
    },
    {
      id: "4",
      title: "Contact US",
      href: "/contact",
    },
  ];
  const socials = [
    {
      id: "1",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      id: "2",
      icon: <FaFacebook className="w-5 h-5" />,
    },
    {
      id: "3",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      id: "4",
      icon: <FaInstagram className="w-5 h-5" />,
    },
  ];

  const stores = [
    {
      id: "1",
      storeName: "Venn Sneaker",
    },
    {
      id: "2",
      storeName: "Northwest Underground",
    },
  ];

  const terms = [
    {
      id: "1",
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      id: "2",
      title: "Terms and Conditions",
      href: "/terms",
    },
    {
      id: "3",
      title: "Security",
      href: "/security",
    },
  ];
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 my-3">
        <div className="flex flex-col gap-2 col-span-2 justify-center items-center lg:items-start">
          <div className="flex gap-1 justify-start items-center">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <span className="text-cyan-400 font-bold">Venn Sneaker</span>
          </div>
          <div className="flex gap-2">
            {socials.map((social) => (
              <span key={social.id}> {social.icon}</span>
            ))}
          </div>
          <div className="mt-1">
            <p className="font-bold text-sm my-3">
              Sign up for personalized offers
            </p>
            <div className="flex gap-2 items-center">
              <Input
                placeholder="Enter your email"
                className="rounded-3xl w-[200px] h-[20px] bg-gray-100 text-[10px]"
              />
              <div className="rounded-[100%] dark:bg-white bg-black text-white p-1 hover:bg-black/90">
                <IoIosSend className="dark:text-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-normal col-span-1">
          <h2 className="font-bold">Links</h2>
          {links.map((link) => (
            <Link href={link.href} key={link.linkId} className="text-sm">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 font-normal col-span-1">
          <h2 className="font-bold">Features</h2>
          {features.map((feature) => (
            <Link key={feature.id} href={feature.href} className="text-sm">
              {feature.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 font-normal col-span-1">
          <h2 className="font-bold">Our Store</h2>
          {stores.map((store) => (
            <span key={store.id} className="text-sm">
              {store.storeName}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 font-normal col-span-1">
          <h2 className="font-bold">Legal & Terms</h2>
          {terms.map((terms) => (
            <Link href={terms.href} key={terms.id} className="text-sm">
              {terms.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="container border border-b-gray-300"></div>
      <p className="container text-center text-[10px] mt-3">
        @Copyright <span className="text-cyan-400 font-bold">Venn Sneaker</span> {new Date().getFullYear()}
      </p>
    </>
  );
};

export default Footer;
