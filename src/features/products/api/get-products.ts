import { ProductDTO, ProductEntity } from "../types/products";
import clientPromise from "../../../lib/mongodb";

export async function getProducts() {
  const client = await clientPromise;
  const db = client.db("digibase");

  const entity = await db
    .collection<ProductEntity>("products")
    .find({})
    .toArray();
  const dto: ProductDTO[] = entity.map((product) => {
    return {
      id: product._id.toString(),
      image: product.image,
      name: product.name,
      price: product.price,
      rating: product.rating,
      color: product.color,
    };
  });
  return dto;
}
