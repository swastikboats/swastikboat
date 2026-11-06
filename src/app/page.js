import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductImageCarousel from "../components/ProductImageCarousel";
import HomepageGalleryCarousel from "../components/HomepageGalleryCarousel";
import products from "../data/products";
import { createPageMetadata, SITE_URL, serializeJsonLd } from "./seo";

export const metadata = createPageMetadata({
  title: "Swastik Boats | Racing Rowing Shells Made in India",
  description:
    "Racing rowing shells, training boats, and spare parts for rowing clubs, academies, and competitive programs in India.",
  path: "/",
  image: "/boats/Homepage 1 .jpg",
});

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Swastik Fibchem Industry",
      alternateName: "Swastik Boats",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Swastik Boats",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  const featured = products.slice(0, 3);
  
  const awardsPhotos = [
    "/boats/award 1.jpeg",
    "/boats/award 2.jpeg",
    "/boats/award 3.jpeg",
    "/boats/award 4.jpeg",
    "/boats/award 5.jpeg",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeStructuredData) }}
      />
      <Header />
      <Hero />

      {/* ── Products ──────────────────────── */}
      <section className="highlightProducts">
        <div className="sectionHeader">
          <p className="label">Our Fleet</p>
          <h2>Explore Our Boats</h2>
          <p>Crafted for athletes who demand the best on the water.</p>
        </div>

        <div className="productRow">
          {featured.map((p) => (
            <ProductCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              subtitle={p.subtitle}
              image={p.image}
            />
          ))}
        </div>

        <div className="sectionCta">
          <Link href="/products" className="cta">View All Boats</Link>
        </div>
      </section>

      {/* ── Gallery ───────────────────────── */}
      <section className="gallery">
        <div className="sectionHeader">
          <p className="label">Craftsmanship</p>
          <h2>Gallery</h2>
          <p>A glimpse into our world of precision boat building.</p>
        </div>

        <HomepageGalleryCarousel />
      </section>

      {/* ── Awards ────────────────────────── */}
      <section className="highlightProducts" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="sectionHeader">
          <p className="label">Recognition</p>
          <h2>Awards & Recognition</h2>
          <p>Celebrating excellence in manufacturing and design.</p>
        </div>
        
        <div className="awardsCarouselContainer" style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
            <ProductImageCarousel images={awardsPhotos} title="Awards" interval={4000} />
        </div>
      </section>

      {/* ── CTA Banner ────────────────────── */}
      <section className="ctaBanner">
        <h2>Ready to Get on the Water?</h2>
        <p>Contact us to discuss your custom boat requirements.</p>
        <Link href="/contact" className="cta">Get in Touch</Link>
      </section>

      {/* ── Footer ────────────────────────── */}
      <footer className="footer">
        © 2026 Swastik Boats. All rights reserved.
        <span style={{ margin: "0 10px" }}>|</span>
        <Link href="/site-notice">Site Notice</Link>
        <span style={{ margin: "0 10px" }}>|</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </footer>
    </>
  );
}