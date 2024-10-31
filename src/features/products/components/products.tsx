"use client";

import { useCart } from "@/context/cart-context";
import { ProductDTO } from "../types/products";
import ProductCard from "./product-card";

type Props = { products: ProductDTO[] };

export default function Products({ products }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-wrap gap-6 mt-72 sm:mt-0 justify-center md:gap-16">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            color={product.color}
            addToCart={() => {
              addToCart(product);
            }}
          />
        );
      })}
    </div>
  );
}
