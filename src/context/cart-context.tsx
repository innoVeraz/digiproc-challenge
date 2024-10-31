"use client";

import { ProductDTO } from "@/features/products/types/products";
import { createContext, useContext, useState, ReactNode } from "react";

type CartProduct = ProductDTO & { quantity?: number };

type CartContextType = {
  cartCount: number;
  cartItems: CartProduct[];
  addToCart: (product: CartProduct) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity! + 1 }
            : item
        )
      );
    } else {
      product.quantity = 1;
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartCount: cartItems.length,
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
