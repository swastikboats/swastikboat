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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;
    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    const previousHtmlOverflow = html.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.width = previousBodyStyles.width;
      html.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    const desktopMedia = window.matchMedia("(min-width: 769px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopMedia.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktopMedia.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  const isDark = variant === "dark";
  const headerClass = `${isDark
    ? "header headerDark"
    : isScrolled
      ? "header headerScrolled"
      : "header"}${mobileMenuOpen ? " headerMenuOpen" : ""}`;

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
          <Link href="/about">About Us</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

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
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}