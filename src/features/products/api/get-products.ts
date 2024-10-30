import { Product, Products } from "../types/products";
import clientPromise from "../../../lib/mongodb";

export async function getProducts(): Promise<Products> {
  const client = await clientPromise;
  const db = client.db("digibase");

  const products = await db.collection<Product>("products").find({}).toArray();
  return products;
}
