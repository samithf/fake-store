import { CartItem } from "@/components/add-to-cart-btn";
import { cartAtom } from "@/store/atoms/cart";
import { useAtom } from "jotai";

export function useCart() {
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const addToCart = (newItem: CartItem) => {
    setCartItems((draftCartItems) => {
      const item = draftCartItems.find((item) => item.id === newItem.id);
      if (item) {
        item.quantity = item.quantity + 1;
        return;
      }
      draftCartItems.push(newItem);
    });
  };

  const deleteFromCart = (id: number) => {
    setCartItems((draftCartItems) => {
      const index = draftCartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        draftCartItems.splice(index, 1);
      }
    });
  };

  return { cartItems, addToCart, deleteFromCart };
}
