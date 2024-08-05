import Image from "next/image";
import { Product } from "../types/product";
import Link from "next/link";
import { AddToCartButton } from "./add-to-cart-btn";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-auto max-h-[400px] bg-white border border-gray-200 rounded-md">
      <div className="relative w-full h-[200px]">
        <Link href={`products/${product.id}`}>
          <Image
            src={product.image}
            alt=""
            layout="fill"
            objectFit="contain"
            className="p-8"
          />
        </Link>
      </div>
      <div className="p-4 h-[200px] flex flex-col">
        <div className="grow">
          <p className="truncate-3-lines">{product.title}</p>
          <p className="py-1 text-sky-600 font-semibold">${product.price}</p>
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
