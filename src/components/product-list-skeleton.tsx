import { ProductCardSkeleton } from "./product-card-skeleton";

export function ProductListSkeleton() {
  // create a skeleden for product list using product list component
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
