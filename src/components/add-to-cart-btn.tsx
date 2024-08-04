"use client";

import { Product } from "@/types/product";
import { Button } from "flowbite-react";
import { useCart } from "@/hooks/useCart";

export type CartItem = Pick<Product, "id" | "title" | "price" | "image"> & {
  quantity: number;
};

export interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <Button
      color="light"
      onClick={() =>
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
    >
      Add to cart
    </Button>
  );
}
