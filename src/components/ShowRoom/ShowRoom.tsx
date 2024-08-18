import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

import { IoBagAddOutline } from "react-icons/io5";

import { Badge } from "../ui/badge";

const ShowRoom = () => {
  const stores = [
    {
      id: "1",
      imageUrl: "/shoesStore/fe.jpg",
      storeName: "Venn Sneaker",
      alt: "venn",
    },
    {
      id: "2",
      imageUrl: "/shoesStore/store2.webp",
      storeName: "Northwest Underground",
      alt: "vutu",
    },
  ];
  return (
    <>
      {stores.map((store) => (
        <Card key={store.id} >
          <CardHeader className="p-0 relative">
            <Image
              alt={store.alt}
              width={900}
              height={600}
              src={store.imageUrl}
              className="w-full object-contain"
            />
          <h2 className="text-lg font-bold absolute bottom-10 left-10 text-white/70">
            {store.storeName}
          </h2>
          </CardHeader>

        </Card>
      ))}
    </>
  );
};

export default ShowRoom;
