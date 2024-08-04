import { ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 mb-4">
      <div className="flex items-center grow">
        <h1 className="text-2xl font-semibold">Fake Store</h1>
      </div>
      <div className="flex items-center gap-2">
        <ShoppingCart size={20} />
        <div>0</div>
      </div>
    </nav>
  );
}
