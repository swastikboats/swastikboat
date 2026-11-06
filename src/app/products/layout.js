import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Rowing Shells & Parts | Swastik Boats India",
  description:
    "Explore racing and training rowing shells, crew boats, and rowing spare parts from Swastik Boats.",
  path: "/products",
  image: "/boats/single scull heavyweight .jpg",
});

export default function ProductsLayout({ children }) {
  return children;
}
