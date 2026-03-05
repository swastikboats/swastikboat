"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({ variant = "transparent" }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark";

  return (
    <header
      className={`header ${isDark ? "headerDark" : ""} ${
        isScrolled && !isDark ? "headerScrolled" : ""
      }`}
    >
      <Link href="/" className="logo">
        Sagar Boats
      </Link>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="socials">
        <a href="#" title="Instagram">
          IG
        </a>
        <a href="#" title="Facebook">
          FB
        </a>
        <a href="#" title="Twitter">
          TW
        </a>
      </div>
    </header>
  );
}