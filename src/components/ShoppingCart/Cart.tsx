"use client";
import { BsHandbag } from "react-icons/bs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { handleCartClick } = useShoppingCart();
  return (
    <BsHandbag
      onClick={handleCartClick}
      className="cursor-pointer w-[20px] h-[20px]"
    />
  );
};

export default Cart;

export const CartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    cartDetails,
    handleCartClick,
    removeItem,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Current items in your cart will be displayed here, click checkout to
            complete
          </SheetDescription>
        </SheetHeader>
        <div className="mt-12">
          {cartCount === 0 ? (
            <p className="text-center font-bold">Your Cart is Empty!</p>
          ) : (
            <>
              {Object.values(cartDetails ?? {}).map((item) => (
                <>
                  <div className="flex gap-4">
                    <Image
                      width={100}
                      height={100}
                      src="/product/1.jpg"
                      alt="product"
                      className="w-32 h-32 object-cover"
                    />
                    <div className="flex flex-col items-start gap-4">
                      <div className="font-semibold text-[1.25rem]">
                        {item.name}
                      </div>
                      <div className="font-bold text-[1.25rem]">
                        ${item.price}
                      </div>
                      <Button
                        className="p-1"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <Separator className="my-4" />
                </>
              ))}
              <Link href="/checkout">
                <Button>
                  Check out
                </Button>
              </Link>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
