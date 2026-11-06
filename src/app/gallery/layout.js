import { createBreadcrumbData, createPageMetadata, serializeJsonLd } from "../seo";

const breadcrumbData = createBreadcrumbData([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);

export const metadata = {
  ...createPageMetadata({
    title: "Rowing Boat Gallery | Swastik Boats",
    description:
      "View rowing boats, training sessions, and boat details from Swastik Boats.",
    path: "/gallery",
    image: "/boats/group start.jpg",
  }),
};

export default function GalleryLayout({ children }) {
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
