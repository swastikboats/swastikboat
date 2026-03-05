import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import ProductCard from "../../../components/ProductCard";
import products from "../../../data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} — Swastik Boats`,
    description: product.subtitle,
  };
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header variant="dark" />

      {/* ── Hero ──────────────────────────── */}
      <section className="productDetailHero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Boats</Link>
          <span>/</span>
          <span className="current">{product.title}</span>
        </div>

        <div className="detailHeroInner">
          <div className="detailHeroImage">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="detailHeroInfo">
            <span className="hero-label">{product.category}</span>
            <h1>{product.title}</h1>
            <p className="detailSubtitle">{product.subtitle}</p>
            <p className="detailDesc">{product.description}</p>

            <div className="detailCta">
              <Link href="/contact" className="cta">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs & Features ──────────────── */}
      <section className="detailContent">
        <div className="detailContentInner">
          <div className="specsBlock">
            <h2>Specifications</h2>
            <table className="specsTable">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="featuresBlock">
            <h2>Features</h2>
            <ul className="featuresList">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related Boats ─────────────────── */}
      <section className="relatedSection">
        <div className="sectionHeader">
          <p className="label">More From Our Fleet</p>
          <h2>Related Boats</h2>
        </div>

        <div className="relatedGrid">
          {related.map((p) => (
            <ProductCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              subtitle={p.subtitle}
              image={p.image}
            />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────── */}
      <section className="ctaBanner\">
        <h2>Ready to Get on the Water?</h2>
        <p>Contact us to discuss your custom boat requirements.</p>
        <Link href="/contact" className="cta">Get in Touch</Link>
      </section>

      <footer className="footer">© 2026 Swastik Boats. All rights reserved.</footer>
    </>
  );
}
