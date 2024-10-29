import { Product } from "@/features/products/types/products";

type ButtonProps = {
  children: React.ReactNode;
  bgColor: Product["color"];
};

export default function Button({ children, bgColor }: ButtonProps) {
  const colorClasses = {
    orange: "bg-orange",
    blue: "bg-blue",
    green: "bg-green",
  };

  return (
    <button
      className={`py-3 rounded-[6px] font-bold text-xs text-white ${colorClasses[bgColor]} w-full`}
    >
      {children}
    </button>
  );
}
