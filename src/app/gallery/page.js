"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "../../components/Header";

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: "/boats/group start.jpg",
      title: "Group Start",
      description: "Boats lined up for a competitive start.",
    },
    {
      id: 2,
      image: "/boats/double scull.jpg",
      title: "Double Scull",
      description: "Two-person boat with exceptional balance and speed.",
    },
    {
      id: 3,
      image: "/boats/Double 1.jpg",
      title: "Double Scull Close-Up",
      description: "Detailed view of our precision hull construction.",
    },
    {
      id: 4,
      image: "/boats/four heavy.jpg",
      title: "Four Heavyweight",
      description: "Four-person boat built for powerful, synchronized rowing.",
    },
    {
      id: 5,
      image: "/boats/group photo for start.jpg",
      title: "Group Training Session",
      description: "Teams preparing for competitive rowing events.",
    },
    {
      id: 6,
      image: "/boats/group.jpg",
      title: "Team Practice",
      description: "Multi-boat training session on open water.",
    },
    {
      id: 7,
      image: "/boats/heavyweight double scull.jpg",
      title: "Heavyweight Double Scull",
      description: "Robust construction for heavier rowers and conditions.",
    },
    {
      id: 8,
      image: "/boats/single scull heavyweight 2.jpg",
      title: "Heavyweight Competition",
      description: "Race-ready single scull in action.",
    },
    {
      id: 9,
      image: "/boats/double scull heavy 3.jpg",
      title: "Heavy Double Scull Variant",
      description: "Specialized heavy-duty double scull model.",
    },
    {
      id: 10,
      image: "/boats/single.jpg",
      title: "Single Scull Training",
      description: "Training boat for developing rowers.",
    },
    {
      id: 11,
      image: "/boats/single 2.jpg",
      title: "Single Scull Variant",
      description: "Alternative single scull configuration.",
    },
    {
      id: 12,
      image: "/boats/single scull rowing boat light weight model 34.jpg",
      title: "Lightweight Model 34",
      description: "Premium lightweight single scull model.",
    },
    {
      id: 13,
      image: "/boats/double scull lightweight jpg.jpg",
      title: "Lightweight Double Scull",
      description: "Lightweight double scull for racing.",
    },
    {
      id: 14,
      image: "/boats/double 2.jpg",
      title: "Double Scull Alternative",
      description: "Double scull viewed from water level.",
    },
    {
      id: 15,
      image: "/boats/four heavyweight .jpeg",
      title: "Four Heavyweight",
      description: "Four-person heavyweight in the water.",
    },
    {
      id: 16,
      image: "/boats/single scull swastik traning balance boat 1.jpg",
      title: "Swastik Training Balance Boat",
      description: "Balance training boat for developing technique.",
    },
    {
      id: 17,
      image: "/boats/start group best.jpg",
      title: "Race Start",
      description: "Teams at the starting line of a major regatta.",
    },
    {
      id: 18,
      image: "/boats/single double group.jpg",
      title: "Mixed Fleet",
      description: "Single and double sculls training together.",
    },
    {
      id: 19,
      image: "/boats/Rajesh Lunawat Founder and Creator of the Legacy.jpg",
      title: "Rajesh Lunawat — Founder",
      description: "Founder and creator of the Swastik Boats legacy.",
    },
    {
      id: 20,
      image: "/boats/Single jaguar training_.jpg",
      title: "Jaguar Training Scull",
      description: "Training single scull – Jaguar model.",
    },

  ];

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (selectedItem) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedItem, handleClose]);

  return (
    <>
      <Header variant="dark" />

      {/* ── Page Hero ─────────────────────── */}
      <section className="pageHero">
        <span className="hero-label">Visual Journey</span>
        <h1>Our Gallery</h1>
        <p>
          Explore the craft, precision, and dedication behind every Swastik Boat.
        </p>
      </section>

      {/* ── Gallery Grid ──────────────────── */}
      <section className="galleryPage">
        <div className="galleryGridLarge">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`galleryCard ${idx === 0 ? "featured" : ""}`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="galleryImageWrapper">
                <img src={item.image} alt={item.title} />
                <div className="galleryOverlay">
                  <div className="overlayContent">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox Modal ────────────────── */}
      {selectedItem && (
        <div className="lightboxOverlay" onClick={handleClose}>
          <button
            className="lightboxClose"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
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
              src={selectedItem.image}
              alt={selectedItem.title}
              className="lightboxImage"
            />
            <div className="lightboxCaption">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA Banner ────────────────────── */}
      <section className="ctaBanner">
        <h2>Interested in Our Boats?</h2>
        <p>Get in touch with our team to book a demonstration or place an order.</p>
        <a href="/contact" className="cta">Contact Us</a>
      </section>

      <footer className="footer">© 2026 Swastik Boats. All rights reserved.</footer>
    </>
  );
}
