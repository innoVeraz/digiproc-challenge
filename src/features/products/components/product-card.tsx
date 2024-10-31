import Button from "@/components/ui/button";
import Image from "next/image";

import Header from "./header";
import PriceTag from "./price-tag";
import Rating from "./rating";
import { ProductDTO } from "../types/products";

type ProductCardProps = Omit<ProductDTO, "id"> & { addToCart: () => void };

export default function ProductCard({
  name,
  image,
  price,
  rating,
  color,
  addToCart,
}: ProductCardProps) {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-lg w-[200px]">
      <div className="relative">
        <Image src={image} alt={name} width={200} height={164} priority />
        <PriceTag price={price} />
      </div>
      <div className="flex flex-col items-center text-center p-2">
        <Header color={color} name={name} />
        <Rating rating={rating} />
        <Button bgColor={color} onClick={addToCart}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
