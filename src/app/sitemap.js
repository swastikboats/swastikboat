import products from "../data/products";
import { SITE_URL } from "./seo";

const publicPaths = [
  "/",
  "/products",
  "/about",
  "/contact",
  "/gallery",
  "/site-notice",
  "/privacy-policy",
];

export default function sitemap() {
  const productPaths = products
    .filter((product) => !product.isSparePart)
    .map((product) => `/products/${product.slug}`);
  const uniquePaths = new Set([...publicPaths, ...productPaths]);

  return [...uniquePaths].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
