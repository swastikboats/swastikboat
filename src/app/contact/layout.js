import { createBreadcrumbData, createPageMetadata, serializeJsonLd } from "../seo";

export const metadata = createPageMetadata({
  title: "Request a Rowing Boat Quote | Swastik Boats",
  description:
    "Contact Swastik Boats to discuss rowing shells, training boats, spare parts, and request a quote.",
  path: "/contact",
  image: "/boats/Homepage 1 .jpg",
});

const breadcrumbData = createBreadcrumbData([
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact" },
]);

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbData) }}
      />
      {children}
    </>
  );
}
