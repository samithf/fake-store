"use client";

import { useCart } from "@/hooks/useCart";
import { Button, Popover } from "flowbite-react";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CartItemsContent } from "./cart-item-content";

export function CartShowBtn() {
  const { cartItems, deleteFromCart } = useCart();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Popover
      aria-labelledby="profile-popover"
      arrow={true}
      placement="bottom-end"
      open={isOpened && cartItems.length > 0}
      content={
        <CartItemsContent
          cartItems={cartItems}
          deleteFromCart={deleteFromCart}
        />
      }
    >
      <Button
        color="light"
        className="border-0"
        onClick={() => setIsOpened(!isOpened)}
      >
        <ShoppingCart className="mr-2 h-5 w-5" /> {cartItems.length}
      </Button>
    </Popover>
  );
}
