import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CartShowBtn } from "./cart-show-btn";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 mb-4">
      <div className="flex items-center grow">
        <Link href="/">
          <h1 className="text-2xl font-semibold">Fake Store</h1>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <CartShowBtn />
      </div>
    </nav>
  );
}
