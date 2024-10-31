"use client";

import { useCart } from "@/context/cart-context";
import { IoBagOutline } from "react-icons/io5";

export default function Cart() {
  const { cartCount } = useCart();
  return (
    <div className="absolute flex items-center top-10 right-10 text-4xl text-blue">
      <IoBagOutline />
      {cartCount > 0 && (
        <div
          className="absolute top-0 right-0 transform 
        translate-x-1/2 -translate-y-1/2 bg-red-500 text-white 
        rounded-full w-6 h-6 flex items-center justify-center text-sm"
        >
          {cartCount}
        </div>
      )}
    </div>
  );
}
