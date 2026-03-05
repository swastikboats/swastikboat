"use client";

import { useState } from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

export default function ProductsPage() {
  const [active, setActive] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Header variant="dark" />

      {/* ── Page Hero ─────────────────────── */}
      <section className="pageHero">
        <span className="hero-label">Our Fleet</span>
        <h1>All Boats</h1>
        <p>
          From single sculls to team quads — find the perfect boat for your
          goals.
        </p>
      </section>

      {/* ── Category Filter ───────────────── */}
      <div className="categoryFilter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filterBtn ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Products Grid ─────────────────── */}
      <section className="productsSection">
        <div className="productsGrid">
          {filtered.map((p) => (
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
      <section className="ctaBanner">
        <h2>Need a Custom Build?</h2>
        <p>We build bespoke boats tailored to your exact specifications.</p>
        <button className="cta">Get in Touch</button>
      </section>

      <footer className="footer">© 2026 Swastik Boats. All rights reserved.</footer>
    </>
  );
}
