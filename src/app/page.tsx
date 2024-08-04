import { Suspense } from "react";
import { ProductList } from "../components/product-list";
import { getProducts } from "../db/queries";
import { CategoryFilter } from "@/components/category-filter";
import { ProductListSkeleton } from "@/components/product-list-skeleton";
export interface HomeProps {
  searchParams: {
    category: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const category = searchParams.category;
  return (
    <div>
      <div className="flex my-4">
        <CategoryFilter category={category} />
      </div>
      <Suspense key={category} fallback={<ProductListSkeleton />}>
        <ProductList fetchProducts={() => getProducts(category)} />
      </Suspense>
    </div>
  );
}
