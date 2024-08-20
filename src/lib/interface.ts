import { Component } from "react";
import { IconType } from "react-icons";

export interface MenuItemType {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export type productType = {
  id: string;
  name: string;
  description: string;
  price: string;
  quality: number;
  currency: string;
  images: string[];
}
