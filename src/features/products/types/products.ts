export type Product = {
  name: string;
  price: number;
  rating: number;
  color: "orange" | "blue" | "green";
  image: string;
};

export type Products = Product[];
