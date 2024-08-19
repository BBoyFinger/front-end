import React from "react";
import { Button } from "../ui/button";
import { ProductType } from "@/lib/interface";
import { useShoppingCart } from "use-shopping-cart";

interface CartProps {
  product: ProductType;
}

const AddToCartBtn: React.FC<CartProps> = ({ product }) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const newProduct = {
    id: product?.id,
    name: product?.name ?? "",
    description: product?.description ?? "",
    price: parseFloat(product?.price),
    currency: "USD",
  };
  return (
    <Button
      onClick={() => {
        addItem(newProduct), handleCartClick();
      }}
      className="font-normal mt-4 md:text-[1.25rem]"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
