import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import ProductCard from "../../../components/ProductCard";
import ProductImageCarousel from "../../../components/ProductImageCarousel";
import RequestQuoteButton from "../../../components/RequestQuoteButton";
import products, { formatBoatClass } from "../../../data/products";

const boatProducts = products.filter((p) => !p.isSparePart);

export function generateStaticParams() {
  return boatProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = boatProducts.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} — Swastik Boats`,
    description: product.subtitle,
  };
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = boatProducts.find((p) => p.slug === slug);

  if (!product) notFound();

  const related = boatProducts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header variant="dark" />

      {/* ── Hero ──────────────────────────── */}
      <section className="productDetailHero">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span className="current">{product.title}</span>
        </div>

        <div className="detailHeroInner">
          {!product.noImage && (
            <div className="detailHeroImage">
              <ProductImageCarousel 
                images={product.images || [product.image]} 
                title={product.title}
                interval={5000}
              />
            </div>
          )}

          <div className="detailHeroInfo">
            <span className="hero-label">{product.category}</span>
            <h1>{product.title}</h1>
            <p className="detailSubtitle">{product.subtitle}</p>
            <p className="detailDesc">{product.description}</p>

            <div className="detailCta">
              <RequestQuoteButton productTitle={product.title} />
              <a href="/boats/specifications.pdf" download className="cta" style={{ background: "var(--color-secondary)", display: "inline-block" }}>Download All Boats Specification Sheet (PDF)</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs & Features ──────────────── */}
      <section className="detailContent">
        <div className="detailContentInner">
          <div className="specsBlock">
            <h2>Specifications</h2>
            {product.variants ? (
              // Display variant-based specs
              <div className="variantsSpecsLayout">
                {/* Main Specs */}
                <div className="mainSpecsBox">
                  <h3>Core Specifications</h3>
                  <div className="specsGrid">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="specItem">
                        <span className="specLabel">{key}:</span>
                        <span className="specValue">
                          {key === "class" ? formatBoatClass(value) : value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Variants with Tables */}
                <div className="variantsTablesSection">
                  <h3>Available Variants</h3>
                  <div className="variantsTableGrid">
                    {product.variants.map((variant, index) => (
                      <div key={index} className="variantTableWrapper">
                        <h4>{variant.name}</h4>
                        <table className="variantSpecsTable">
                          <tbody>
                            <tr>
                              <td className="specKey">Average Crew Weight</td>
                              <td>{variant.avgCrewWeight}</td>
                            </tr>
                            <tr>
                              <td className="specKey">Crew Weight Range</td>
                              <td>{variant.crewWeightRange}</td>
                            </tr>
                            <tr>
                              <td className="specKey">Boat Length</td>
                              <td>{variant.lengths.length}</td>
                            </tr>
                            {variant.specs && Object.entries(variant.specs).map(([key, value]) => (
                              <tr key={key}>
                                <td className="specKey">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                <td>{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Display regular specs for non-variant products
              <table className="specsTable">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{key === "class" ? formatBoatClass(value) : value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
              noImage={!!p.noImage}
            />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────── */}
      <section className="ctaBanner">
        <h2>Ready to Get on the Water?</h2>
        <p>Contact us to discuss your custom boat requirements.</p>
        <Link href="/contact" className="cta">Get in Touch</Link>
      </section>

      <footer className="footer">© 2026 Swastik Boats. All rights reserved.</footer>
    </>
  );
}
