// These are get actions that's why no need to mention "use server" they get trigger when server component renderd 
import db from "@/db"
import { products } from "@/db/schema"
import { desc, eq, sql } from "drizzle-orm";
import { connection } from "next/server";


export async function getFeaturedProducts (){
    const productData = await db.select().from(products).where(eq(products.status, "approved" )).orderBy(desc(products.voteCount));

    return productData
}

export async function getAllApprovedProducts() {
  const productsData = await db.select().from(products).where(eq(products.status, "approved" )).orderBy(desc(products.voteCount));

  return productsData;
}


export async function getRecentlyLaunchedProducts() {
  await connection();
  const productsData = await getAllApprovedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productsData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
}

export async function getProductBySlug(slug:string){
    const productData = await db.select().from(products).where(eq(products.slug,slug)).limit(1);
    return productData?.[0] ?? null 
}