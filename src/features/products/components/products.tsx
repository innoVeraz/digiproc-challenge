import { getProducts } from "../api/get-products";
import ProductCard from "./product-card";

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="flex gap-16">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            color={product.color}
          />
        );
      })}
    </div>
  );
}
