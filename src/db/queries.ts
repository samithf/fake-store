export async function getProducts(category?: string) {
  const url =
    !category || category === "all"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${category}`;
  const response = await fetch(url);
  const products = await response.json();
  return products;
}

export async function getProduct(id: number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product;
}

export async function getCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();
  return categories;
}
