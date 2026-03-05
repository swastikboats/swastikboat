import Link from "next/link";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
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

        <div className="galleryGrid">
          <div className="galleryItem"><img src="/placeholder.jpg" alt="Gallery 1" /></div>
          <div className="galleryItem"><img src="/placeholder.jpg" alt="Gallery 2" /></div>
          <div className="galleryItem"><img src="/placeholder.jpg" alt="Gallery 3" /></div>
          <div className="galleryItem"><img src="/placeholder.jpg" alt="Gallery 4" /></div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────── */}
      <section className="ctaBanner">
        <h2>Ready to Get on the Water?</h2>
        <p>Contact us to discuss your custom boat requirements.</p>
        <button className="cta">Get in Touch</button>
      </section>

      {/* ── Footer ────────────────────────── */}
      <footer className="footer">
        © 2026 Sagar Boats. All rights reserved.
      </footer>
    </>
  );
}