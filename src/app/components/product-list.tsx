import { Product } from "../types/product";
import { ProductCard } from "./product-card";

export interface ProductListProps {
  fetchProducts: () => Promise<Product[]>;
}

export async function ProductList({ fetchProducts }: ProductListProps) {
  const products = await fetchProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
