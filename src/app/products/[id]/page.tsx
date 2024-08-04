import { ProductShow } from "@/components/product-show";
import { ProductShowSkeleton } from "@/components/product-show-skeleton";
import Link from "next/link";
import { Suspense } from "react";
import { getProduct } from "@/db/queries";
import GoBackButton from "@/components/go-back-button";

export interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  return (
    <>
      <div>
        <GoBackButton />
      </div>
      <Suspense fallback={<ProductShowSkeleton />}>
        <ProductShow fetchProduct={() => getProduct(parseInt(params.id))} />
      </Suspense>
    </>
  );
}
