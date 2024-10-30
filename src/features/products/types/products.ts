export interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  color: "orange" | "blue" | "green";
}

export type Products = Product[];
