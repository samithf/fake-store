import Image from "next/image";
import { Product } from "../types/product";
import { Rating } from "./ui/rating";

export interface ProductShowProps {
  fetchProduct: () => Promise<Product>;
}

export async function ProductShow({ fetchProduct }: ProductShowProps) {
  const product = await fetchProduct();
  return (
    <div className="max-w-[600px] mx-auto p-4">
      <div className="flex justify-center items-center w-full h-[400px] relative my-10">
        <Image src={product.image} alt="" layout="fill" objectFit="contain" />
      </div>
      <span className="uppercase p-1 tracking-widest text-sm  my-1 inline-block text-white bg-sky-700">
        {product.category}
      </span>
      <h1 className="text-2xl font-bold text-sky-700 my-1">{product.title}</h1>
      <p className="text-sky-700 text-xl my-1">${product.price}</p>
      <p className="py-6 leading-relaxed">{product.description}</p>
      <Rating rate={product.rating.rate} count={product.rating.count} />
    </div>
  );
}
