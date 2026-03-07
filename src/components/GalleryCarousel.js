"use client";

import { useState, useEffect } from "react";

const galleries = [
  { id: 1, image: "/placeholder.jpg", alt: "Gallery 1" },
  { id: 2, image: "/placeholder.jpg", alt: "Gallery 2" },
  { id: 3, image: "/placeholder.jpg", alt: "Gallery 3" },
  { id: 4, image: "/placeholder.jpg", alt: "Gallery 4" },
  { id: 5, image: "/placeholder.jpg", alt: "Gallery 5" },
];

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="galleryGrid">
      {galleries.map((item, i) => (
        <div 
          key={item.id} 
          className="galleryItem"
          style={{
            opacity: i === activeIndex ? 1 : 0.6,
            transition: "opacity 0.6s ease-in-out",
          }}
        >
          <img src={item.image} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
