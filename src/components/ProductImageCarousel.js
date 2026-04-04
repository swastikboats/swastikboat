"use client";

import { useState, useEffect } from "react";

export default function ProductImageCarousel({ images, title, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const imageList = images && images.length > 0 ? images : ["/placeholder.jpg"];

  useEffect(() => {
    if (imageList.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageList.length);
    }, interval);

    return () => clearInterval(timer);
  }, [imageList.length, interval, index]); // reset timer on manual change by including index

  const handleNext = () => setIndex((prev) => (prev + 1) % imageList.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

  // Swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div 
      className="productImageCarouselWrapper"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="productImageCarousel">
        {imageList.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} - View ${i + i}`}
            className="productCarouselImage"
            style={{
              opacity: i === index ? 1 : 0,
              position: "absolute",
              inset: 0,
              margin: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              transition: "opacity 0.6s ease-in-out",
              zIndex: i === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {imageList.length > 1 && (
        <>
          <button 
            className="carouselArrow prevArrow" 
            onClick={(e) => {
                e.preventDefault();
                handlePrev();
            }}
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button 
            className="carouselArrow nextArrow" 
            onClick={(e) => {
                e.preventDefault();
                handleNext();
            }}
            aria-label="Next image"
          >
            &#10095;
          </button>

          <div className="productImageIndicators">
            {imageList.map((_, i) => (
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
        </>
      )}
    </div>
  );
}
