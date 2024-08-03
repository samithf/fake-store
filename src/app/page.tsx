import { Alert } from "flowbite-react";
import { ProductCard } from "./components/product-card";
import { Product } from "./types/product";
import { ProductList } from "./components/product-list";
import { getProducts } from "./db/queries";

export default async function Home() {
  return <ProductList fetchProducts={getProducts} />;
}
