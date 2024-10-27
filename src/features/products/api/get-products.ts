import { Products } from "../types/products";

export const getProducts = async () => {
  const response = await fetch("http://localhost:3001/api/products");
  const data: Products = await response.json();
  return data;
};
