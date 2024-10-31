import { CartProvider } from "@/context/cart-context";
import { getProducts } from "@/features/products/api/get-products";
import Products from "@/features/products/components/products";
import Cart from "@/features/shopping-cart/components/cart";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <CartProvider>
        <Cart />
        <Products products={products} />
      </CartProvider>
    </>
  );
}
