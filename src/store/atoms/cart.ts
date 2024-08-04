import { CartItem } from "@/components/add-to-cart-btn";
import { atomWithImmer } from "jotai-immer";
import { useAtomsDebugValue } from "jotai-devtools/utils";

export const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export const cartAtom = atomWithImmer<CartItem[]>([]);
cartAtom.debugLabel = "cart";
