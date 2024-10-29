import Button from "@/components/ui/button";
import Image from "next/image";
import { Product } from "../types/products";
import StarIcon from "./star-icon";
import Header from "./header";

type ProductCardProps = Product;

export default function ProductCard({
  name,
  image,
  price,
  rating,
  color,
}: ProductCardProps) {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-lg w-[200px]">
      <div className="relative">
        <Image src={image} alt={name} width={200} height={164} priority />
        <div className="absolute bottom-1 right-1 font-semibold text-xs bg-white px-[10px] py-[7px] rounded-full ">
          {new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "SEK",
            maximumFractionDigits: 0,
            currencyDisplay: "code",
          }).format(price)}
        </div>
      </div>

      <div className="flex flex-col items-center text-center p-2">
        <Header color={color} name={name} />
        <div className="">
          <div className="text-xs mb-1">Ratings</div>
          <div className="flex gap-[2px] mb-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} fill={index < rating} />
            ))}
          </div>
        </div>
        <Button bgColor={color}>ADD TO CART</Button>
      </div>
    </div>
  );
}
