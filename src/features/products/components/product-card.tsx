import Button from "@/components/ui/button";
import Image from "next/image";

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  rating: number;
  color: string;
};

export default function ProductCard({
  name,
  image,
  price,
  rating,
  color,
}: ProductCardProps) {
  return (
    <div>
      <Image src={image} alt={name} width={200} height={164} priority />
      <div>{price}</div>
      <div>{name}</div>
      <div>{rating}</div>
      <div>{color}</div>
      <div>
        <Button>ADD TO CART</Button>
      </div>
    </div>
  );
}
