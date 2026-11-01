"use client";

import Link from "next/link";

export default function ProductCard({
  title,
  subtitle,
  slug,
  image = "/placeholder.jpg",
  isSparePart = false,
  noImage = false,
  onSparePartClick,
}) {
  if (isSparePart) {
    return (
      <div
        className="productCardLink"
        onClick={() => onSparePartClick && onSparePartClick({ title, subtitle, image })}
        style={{ cursor: "pointer" }}
      >
        <div className="productCard">
          <img src={image} alt={title} />
          <div className="productOverlay">
            <h3>{title}</h3>
            <p>{subtitle || "Spare part"}</p>
            <span className="cardArrow">View Image →</span>
          </div>
        </div>
      </div>
    );
  }

  if (noImage) {
    return (
      <Link href={`/products/${slug}`} className="productCardLink">
        <div className="productCard productCardNoImage">
          <div className="productCardPlaceholder">
            <span className="placeholderLine" />
            <span className="placeholderLine short" />
          </div>
          <div className="productOverlay productOverlayNoImage">
            <h3>{title}</h3>
            <p>{subtitle || "High performance racing shell"}</p>
            <span className="cardArrow">View Details →</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${slug}`} className="productCardLink">
      <div className="productCard">
        <img src={image} alt={title} />
        <div className="productOverlay">
          <h3>{title}</h3>
          <p>{subtitle || "High performance racing shell"}</p>
          <span className="cardArrow">View Details →</span>
        </div>
      </div>
    </Link>
  );
}