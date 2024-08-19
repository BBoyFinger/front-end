"use client"
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
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  )
};
