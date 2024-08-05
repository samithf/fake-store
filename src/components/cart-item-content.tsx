import { Button } from "flowbite-react";
import { CartItem } from "./add-to-cart-btn";
import Image from "next/image";
import { X } from "lucide-react";

interface CartItemsContentProps {
  cartItems: CartItem[];
  deleteFromCart: (id: number) => void;
}

export function CartItemsContent({
  cartItems,
  deleteFromCart,
}: CartItemsContentProps) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-5">
      <div className="w-[350px] max-h-[300px] overflow-y-scroll">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain rounded"
                width={48}
                height={48}
              />
              <div className="ml-2">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.quantity} x ${item.price}
                </p>
              </div>
            </div>
            <Button
              color="light"
              size="xs"
              className="m-2"
              onClick={() => deleteFromCart(item.id)}
            >
              <X />
            </Button>
          </div>
        ))}
        <span className="text-sm font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </span>
      </div>
      <Button color="light" className="w-full mt-4">
        Go to checkout
      </Button>
    </div>
  );
}
