import { ProductShow } from "@/app/components/product-show";
import { ProductShowSkeleton } from "@/app/components/product-show-skeleton";
import { getProduct } from "@/app/db/queries";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, Camera } from "lucide-react";

export interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  return (
    <>
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1 border px-2  py-1 m-2 shadow-sm hover:shadow-md"
        >
          <ArrowLeft size="20" />
          Back to products
        </Link>
      </div>
      <Suspense fallback={<ProductShowSkeleton />}>
        <ProductShow fetchProduct={() => getProduct(parseInt(params.id))} />
      </Suspense>
    </>
  );
}
