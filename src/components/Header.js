import Link from "next/link";

export default function Header({ variant = "transparent" }) {
  return (
    <header className={variant === "dark" ? "header headerDark" : "header"}>
      <Link href="/" className="logo">Swastik Boats</Link>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="socials">
        <a href="#" title="Instagram">IG</a>
        <a href="#" title="Facebook">FB</a>
        <a href="#" title="Twitter">TW</a>
      </div>
    </header>
  );
}