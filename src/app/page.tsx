import Products from "@/features/products/components/products";
import Cart from "@/features/shopping-cart/components/cart";

export default function Home() {
  return (
    <>
      <Cart />
      <Products />
    </>
  );
}
