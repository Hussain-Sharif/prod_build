import db  from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getFeaturedProducts() {
  "use cache";
  return db.select().from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));
}

export async function getAllApprovedProducts() {
  // no cache — used internally by getRecentlyLaunchedProducts
  return db.select().from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));
}

export async function getProductBySlug(slug: string) {
  // no cache — called from cached page directly
  const data = await db.select().from(products)
    .where(eq(products.slug, slug)).limit(1);
  return data?.[0] ?? null;
}

export async function getRecentlyLaunchedProducts() {
  await connection();
  const productsData = await getAllApprovedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  return productsData.filter(p =>
    p.createdAt && new Date(p.createdAt.toISOString()) >= oneWeekAgo
  );
}