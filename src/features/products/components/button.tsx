import { ProductDTO } from "@/features/products/types/products";

type ButtonProps = {
  children: React.ReactNode;
  bgColor: ProductDTO["color"];
  onClick: () => void;
};

export default function Button({ children, bgColor, onClick }: ButtonProps) {
  const colorClasses = {
    orange: "bg-orange",
    blue: "bg-blue",
    green: "bg-green",
  };

  return (
    <button
      onClick={onClick}
      className={`py-3 rounded-[6px] font-bold text-xs text-white ${colorClasses[bgColor]} w-full
        shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg active:shadow-sm active:scale-95 `}
    >
      {children}
    </button>
  );
}
