import Header from "../../components/Header";

export const metadata = {
  title: "Gallery — Swastik Boats",
  description: "View our collection of precision-crafted rowing boats",
};

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      image: "/boats/single kudrat ali.jpg",
      title: "Single Scull",
      description: "Elite single-rower boat designed for competitive racing.",
    },
    {
      id: 2,
      image: "/boats/double scull.jpg",
      title: "Double Scull",
      description: "Two-person boat with exceptional balance and speed.",
    },
    {
      id: 3,
      image: "/boats/double scull close.jpg",
      title: "Double Scull Close-Up",
      description: "Detailed view of our precision hull construction.",
    },
    {
      id: 4,
      image: "/boats/four coxless heavy.jpg",
      title: "Four Coxless Heavy",
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
      image: "/boats/single scull heavyweight .jpg",
      title: "Single Scull Heavyweight",
      description: "Single scull engineered for maximum performance.",
    },
    {
      id: 9,
      image: "/boats/single scull heavyweight 2.jpg",
      title: "Heavyweight Competition",
      description: "Race-ready single scull in action.",
    },
    {
      id: 10,
      image: "/boats/double scull 3.jpg",
      title: "Double Scull Standard",
      description: "Classic two-person boat design.",
    },
    {
      id: 11,
      image: "/boats/double scull heavy 3.jpg",
      title: "Heavy Double Scull Variant",
      description: "Specialized heavy-duty double scull model.",
    },
    {
      id: 12,
      image: "/boats/single kudrat 2.jpg",
      title: "Single Scull Training",
      description: "Training boat for developing rowers.",
    },
    {
      id: 13,
      image: "/boats/single kudrat 3.jpg",
      title: "Single Scull Variant",
      description: "Alternative single scull configuration.",
    },
    {
      id: 14,
      image: "/boats/single kudrat 4.jpg",
      title: "Competition Ready",
      description: "Single scull prepared for championship racing.",
    },
    {
      id: 15,
      image: "/boats/single scull kudrat ali.jpg",
      title: "Professional Single Scull",
      description: "Premium single scull for elite athletes.",
    },
    {
      id: 16,
      image: "/boats/coxless pair 1.jpg",
      title: "Coxless Pair",
      description: "Two-rower boat with synchronized rowing design.",
    },
    {
      id: 17,
      image: "/boats/coxless pair.jpg",
      title: "Coxless Pair Alternative View",
      description: "Different angle of our coxless pair design.",
    },
    {
      id: 18,
      image: "/boats/double scull kids.jpg",
      title: "Junior Double Scull",
      description: "Scaled boat for young, developing athletes.",
    },
    {
      id: 19,
      image: "/boats/heavy double scull close up.jpg",
      title: "Heavy Double Scull Detail",
      description: "Close-up of heavy construction quality.",
    },
    {
      id: 20,
      image: "/boats/start group best.jpg",
      title: "Race Start",
      description: "Teams at the starting line of a major regatta.",
    },
    {
      id: 21,
      image: "/boats/single double group.jpg",
      title: "Mixed Fleet",
      description: "Single and double sculls training together.",
    },
    {
      id: 22,
      image: "/boats/wing riger of this pic.jpg",
      title: "Wing Rigger Detail",
      description: "Close-up of wing rigger construction.",
    },
    {
      id: 23,
      image: "/boats/kudrat ali best .jpg",
      title: "Premium Build",
      description: "Our finest boat construction quality.",
    },
    {
      id: 24,
      image: "/boats/IMG_4030.jpg",
      title: "Workshop Scene",
      description: "Behind-the-scenes boat manufacturing.",
    },
    {
      id: 25,
      image: "/boats/IMG_4138.jpg",
      title: "Craftmanship",
      description: "Detailed manufacturing process.",
    },
    {
      id: 26,
      image: "/boats/IMG_4142.jpg",
      title: "Quality Control",
      description: "Rigorous testing procedures.",
    },
    {
      id: 27,
      image: "/boats/IMG_4150.jpg",
      title: "Team Building",
      description: "Expert craftsmen at work.",
    },
    {
      id: 28,
      image: "/boats/IMG_4151.jpg",
      title: "Production Line",
      description: "State-of-the-art manufacturing facility.",
    },
    {
      id: 29,
      image: "/boats/IMG_4152.jpg",
      title: "Final Assembly",
      description: "Complete boat assembly process.",
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
