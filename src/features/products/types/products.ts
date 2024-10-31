export interface ProductEntity {
  image: string;
  name: string;
  price: number;
  rating: number;
  color: "orange" | "blue" | "green";
}

export interface ProductDTO extends ProductEntity {
  id: string;
}
