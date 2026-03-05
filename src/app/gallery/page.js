import Header from "../../components/Header";

export const metadata = {
  title: "Gallery — Swastik Boats",
  description: "View our collection of precision-crafted rowing boats",
};

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      image: "/placeholder.jpg",
      title: "Elite Scull in Action",
      description: "Our signature Elite Scull Boat cutting through pristine waters during a championship race.",
    },
    {
      id: 2,
      image: "/placeholder.jpg",
      title: "Carbon Construction",
      description: "Close-up view of our advanced aerospace-grade carbon fiber construction.",
    },
    {
      id: 3,
      image: "/placeholder.jpg",
      title: "Training Session",
      description: "Teams practicing synchronized rowing in our professional-grade boats.",
    },
    {
      id: 4,
      image: "/placeholder.jpg",
      title: "Waterside Workshop",
      description: "Our craftsmen performing meticulous quality checks before boat delivery.",
    },
    {
      id: 5,
      image: "/placeholder.jpg",
      title: "Coastal Expedition",
      description: "Our Coastal Double Scull navigating challenging open-water conditions.",
    },
    {
      id: 6,
      image: "/placeholder.jpg",
      title: "Junior Program",
      description: "Young athletes building confidence and skill with our junior training boats.",
    },
  ];

  return (
    <>
      <Header variant="dark" />

      {/* ── Page Hero ─────────────────────── */}
      <section className="pageHero">
        <span className="hero-label">Visual Journey</span>
        <h1>Our Gallery</h1>
        <p>
          Explore the craft, precision, and dedication behind every Sagar Boat.
        </p>
      </section>

      {/* ── Gallery Grid ──────────────────── */}
      <section className="galleryPage">
        <div className="galleryGridLarge">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`galleryCard ${idx === 0 ? "featured" : ""}`}
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
