"use client";

import { useCart } from "@/hooks/useCart";
import { Button } from "flowbite-react";
import { ShoppingCart } from "lucide-react";

export function CartShowBtn() {
  const { cartItems } = useCart();
  return (
    <Button color="light" onClick={() => null}>
      <ShoppingCart className="mr-2 h-5 w-5" /> {cartItems.length}
    </Button>
  );
}
