"use client";

import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { id: 1, src: "/boats/single scull kudrat ali.jpg", alt: "Single scull rowing boat" },
  { id: 2, src: "/boats/double scull.jpg", alt: "Double scull rowing boat" },
  { id: 3, src: "/boats/four heavy.jpg", alt: "Heavyweight four-person rowing boat" },
  { id: 4, src: "/boats/group photo for start.jpg", alt: "Rowing teams preparing for a competitive event" },
  { id: 5, src: "/boats/heavyweight double scull.jpg", alt: "Heavyweight double scull" },
  { id: 6, src: "/boats/double scull 3.jpg", alt: "Double scull rowing boat" },
  { id: 7, src: "/boats/single scull heavyweight .jpg", alt: "Heavyweight single scull" },
  { id: 8, src: "/boats/group.jpg", alt: "Multiple boats during team practice on open water" },
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
