"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const [sparePartPopup, setSparePartPopup] = useState(null);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  const handleClosePopup = useCallback(() => {
    setSparePartPopup(null);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClosePopup();
    };
    if (sparePartPopup) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [sparePartPopup, handleClosePopup]);

  return (
    <>
      <Header variant="dark" />

      {/* ── Page Hero ─────────────────────── */}
      <section className="pageHero">
        <span className="hero-label">Our Fleet</span>
        <h1>All Products</h1>
        <p>
          From single sculls to team eights — find the perfect boat and
          parts for your goals.
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
              isSparePart={!!p.isSparePart}
              onSparePartClick={(item) => setSparePartPopup(item)}
            />
          ))}
        </div>
      </section>

      {/* ── Spare Part Lightbox ────────────── */}
      {sparePartPopup && (
        <div className="lightboxOverlay" onClick={handleClosePopup}>
          <button
            className="lightboxClose"
            onClick={(e) => {
              e.stopPropagation();
              handleClosePopup();
            }}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <div
            className="lightboxContent"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={sparePartPopup.image}
              alt={sparePartPopup.title}
              className="lightboxImage"
            />
            <div className="lightboxCaption">
              <h3>{sparePartPopup.title}</h3>
              <p>{sparePartPopup.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA Banner ────────────────────── */}
      <section className="ctaBanner">
        <h2>Need a Custom Build?</h2>
        <p>We build bespoke boats tailored to your exact specifications.</p>
        <Link href="/contact" className="cta">Get in Touch</Link>
      </section>

      <footer className="footer">© 2026 Swastik Boats. All rights reserved.</footer>
    </>
  );
}
