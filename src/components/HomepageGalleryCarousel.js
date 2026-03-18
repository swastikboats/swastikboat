"use client";

import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { id: 1, src: "/boats/single scull kudrat ali.jpg", alt: "Single Scull" },
  { id: 2, src: "/boats/double scull.jpg", alt: "Double Scull" },
  { id: 3, src: "/boats/four heavy.jpg", alt: "Four Heavyweight" },
  { id: 4, src: "/boats/group photo for start.jpg", alt: "Group Training" },
  { id: 5, src: "/boats/heavyweight double scull.jpg", alt: "Heavyweight Double Scull" },
  { id: 6, src: "/boats/double scull 3.jpg", alt: "Double Scull Close Up" },
  { id: 7, src: "/boats/single scull heavyweight .jpg", alt: "Single Scull Heavyweight" },
  { id: 8, src: "/boats/group.jpg", alt: "Group Photo" },
];

export default function HomepageGalleryCarousel() {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 2000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <div className="homepageGalleryCarouselWrapper">
      {/* Image Display */}
      <div className="homepageGalleryCarousel">
        {galleryImages.map((img, i) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            style={{
              opacity: i === index ? 1 : 0,
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.8s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carouselArrow carouselArrowLeft" onClick={goPrev} aria-label="Previous image">
        &#8249;
      </button>
      <button className="carouselArrow carouselArrowRight" onClick={goNext} aria-label="Next image">
        &#8250;
      </button>

      {/* Indicators */}
      <div className="galleryCarouselIndicators">
        {galleryImages.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
