"use client";

import { useState, useEffect } from "react";

const galleryImages = [
  { id: 1, src: "/boats/single kudrat ali.jpg", alt: "Single Scull" },
  { id: 2, src: "/boats/double scull.jpg", alt: "Double Scull" },
  { id: 3, src: "/boats/four coxless heavy.jpg", alt: "Four Coxless" },
  { id: 4, src: "/boats/group photo for start.jpg", alt: "Group Training" },
  { id: 5, src: "/boats/heavyweight double scull.jpg", alt: "Heavyweight Double Scull" },
  { id: 6, src: "/boats/double scull close.jpg", alt: "Double Scull Close Up" },
  { id: 7, src: "/boats/single scull heavyweight .jpg", alt: "Single Scull Heavyweight" },
  { id: 8, src: "/boats/group.jpg", alt: "Group Photo" },
];

export default function HomepageGalleryCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
