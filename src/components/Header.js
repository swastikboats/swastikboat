"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({ variant = "transparent" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  const headerClass = isDark 
    ? "header headerDark" 
    : isScrolled 
      ? "header headerScrolled"
      : "header";

  return (
    <>
      <header className={headerClass}>
        <Link href="/" className="logo">
          <img src="/logo.png" alt="Swastik Boats" className="logoImg" />
          <span>Swastik Boats</span>
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

        {/* Hamburger Menu Button */}
        <button 
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobileMenuOverlay" onClick={() => setMobileMenuOpen(false)}>
          <nav className="mobileMenu">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}