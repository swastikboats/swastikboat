"use client";

import { useState, useEffect } from "react";

const images = [
  "/boats/Homepage 1 .jpg",
  "/boats/homepage 2 .jpg",
  "/boats/homepage 3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Layered backgrounds for crossfade */}
      {images.map((src, i) => (
        <div
          key={i}
          className="heroBg"
          style={{
            backgroundImage: `url("${src}")`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}

      <div className="heroOverlay">
        <span className="hero-label">Premium Craftsmanship</span>
        <h1>Precision Boats Built&nbsp;for Performance</h1>
        <p>
          High-performance rowing boats engineered for speed,
          durability and precision craftsmanship since 1995.
        </p>
      </div>

      {/* Slide indicators */}
      <div className="heroIndicators">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}