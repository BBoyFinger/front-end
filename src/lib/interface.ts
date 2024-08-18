import { Component } from "react";
import { IconType } from "react-icons";

export interface MenuItemType {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
}
