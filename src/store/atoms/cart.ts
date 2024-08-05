import { CartItem } from "@/components/add-to-cart-btn";
import { withImmer } from "jotai-immer";
import { useAtomsDebugValue } from "jotai-devtools/utils";

import { atomWithStorage } from "jotai/utils";

export const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export const cartAtom = withImmer(atomWithStorage<CartItem[]>("cartItems", []));
cartAtom.debugLabel = "cartItems";
