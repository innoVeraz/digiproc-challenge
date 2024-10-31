import { ProductDTO } from "../types/products";

type HeaderProps = {
  name: string;
  color: ProductDTO["color"];
};

export default function Header({ name, color }: HeaderProps) {
  const colorClasses = {
    orange: "text-orange",
    blue: "text-blue",
    green: "text-green",
  };

  return (
    <h1 className={`text-xs mb-2 font-semibold ${colorClasses[color]}`}>
      {name}
    </h1>
  );
}
