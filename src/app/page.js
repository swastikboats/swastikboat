import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Counter from "../components/Counter";
import products from "../data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Header />
      <Hero />

      {/* ── About Section ─────────────────────── */}
      <section className="aboutSection">
        <div className="aboutContainer">
          <div className="aboutImage">
            <img src="/placeholder.jpg" alt="Swastik Boats Craftsmanship" />
          </div>
          <div className="aboutContent">
            <span className="hero-label">Our Story</span>
            <h2>About Us</h2>
            <p>
              Swastik Boats has been at the forefront of precision boat manufacturing for over two decades. 
              Our commitment to excellence, innovation, and quality craftsmanship has made us the trusted choice 
              for competitive rowers, rowing clubs, and athletic organizations worldwide.
            </p>
            <p>
              From humble beginnings as a small workshop to becoming an industry leader, we've maintained 
              our core values: precision engineering, sustainable practices, and unwavering dedication to performance. 
              Every boat we build carries our legacy of expertise and passion for rowing.
            </p>
            
            <div className="aboutStats">
              <Counter finalNumber={25} label="Years of Excellence" />
              <Counter finalNumber={500} label="Boats Delivered" />
            </div>
            
            <div className="aboutCta">
              <Link href="/gallery" className="cta-outline">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

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
        <Link href="/contact" className="cta">Get in Touch</Link>
      </section>

      {/* ── Footer ────────────────────────── */}
      <footer className="footer">
        © 2026 Swastik Boats. All rights reserved.
      </footer>
    </>
  );
}