import { ProductDTO } from "../types/products";

type PriceTagProps = {
  price: ProductDTO["price"];
};

export default function PriceTag({ price }: PriceTagProps) {
  return (
    <div className="absolute bottom-1 right-1 font-semibold text-xs bg-white px-[10px] py-[7px] rounded-full ">
      {new Intl.NumberFormat("sv-SE", {
        style: "currency",
        currency: "SEK",
        maximumFractionDigits: 0,
        currencyDisplay: "code",
      }).format(price)}
    </div>
  );
}
