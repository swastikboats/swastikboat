import Link from "next/link";
import Header from "../../components/Header";
import Counter from "../../components/Counter";

export default function AboutPage() {
  return (
    <>
      <Header variant="dark" />

      {/* ── Page Hero ── */}
      <section className="pageHero aboutPageHero">
        <span className="hero-label">Our Legacy</span>
        <h1>About Us</h1>
        <p>
          Three decades of pioneering high-performance rowing boat manufacturing in India.
        </p>
      </section>

      {/* ── Founder Section ── */}
      <section className="aboutFullSection">
        <div className="aboutFullContainer">
          <div className="aboutFullImageCol">
            <div className="aboutFullImage">
              <img
                src="/boats/Rajesh Lunawat Founder and Creator of the Legacy.jpg"
                alt="Rajesh Lunawat – Founder of Swastik Fibchem Industry"
              />
            </div>
            <div className="founderNameplate">
              <h3>Rajesh Lunawat</h3>
              <p>Founder &amp; Visionary</p>
            </div>
          </div>

          <div className="aboutFullContent">
            {/* ── Introduction ── */}
            <div className="aboutBlock">
              <h2>The Visionary Behind the Legacy</h2>
              <p>
                Entrepreneurship is often defined by vision — the ability to recognize opportunities,
                innovate within specialized industries, and build organizations that endure over decades.
                <strong> Rajesh Lunawat</strong>, the founder of Swastik Fibchem Industry, exemplifies this
                spirit through his pioneering work in the manufacturing of high-performance rowing boats
                and composite marine products in India.
              </p>
            </div>

            {/* ── Stats ── */}
            <div className="aboutStats">
              <Counter finalNumber={30} label="Years of Excellence" />
              <Counter finalNumber={500} label="Boats Delivered and Exported" />
            </div>

            {/* ── Early Vision ── */}
            <div className="aboutBlock">
              <h3>Early Vision &amp; Entrepreneurial Journey</h3>
              <p>
                In the mid-1990s, when specialized sports equipment manufacturing in India was still
                developing, Rajesh Lunawat recognized a unique opportunity within the world of competitive
                rowing. With a deep interest in engineering, materials, and sports technology, he envisioned
                building a company capable of producing international-quality racing rowing shells in India.
              </p>
              <p>
                This vision led to the founding of <strong>Swastik Fibchem Industry in 1995</strong>,
                marking the beginning of a long journey dedicated to innovation, craftsmanship, and the
                development of professional rowing equipment.
              </p>
            </div>

            {/* ── Germany Invitation ── */}
            <div className="aboutBlock aboutBlockHighlight">
              <h3>International Recognition &amp; the Germany Invitation (1997)</h3>
              <p>
                A significant milestone in Rajesh Lunawat&apos;s journey came in 1997, when he was invited to
                Germany by <strong>Mr. Klaus Filter</strong>, the technical director of FISA.
              </p>
              <p>
                This invitation provided Lunawat with a valuable opportunity to gain deeper insight into
                European boat-building techniques, precision engineering, and international standards of
                racing shells. The experience in Germany helped shape the technical direction and
                manufacturing philosophy of Swastik Fibchem Industry.
              </p>
              <p>
                Exposure to advanced boat design principles and production methods strengthened Lunawat&apos;s
                determination to establish a world-class rowing boat manufacturing facility in India,
                capable of producing equipment that could compete with established international brands.
              </p>
            </div>

            {/* ── Establishing the Company ── */}
            <div className="aboutBlock">
              <h3>Establishing Swastik Fibchem Industry</h3>
              <p>
                Following this formative period, Swastik Fibchem Industry began developing and manufacturing
                high-performance racing rowing boats designed for athletes, rowing clubs, universities, and
                sports federations.
              </p>
              <p>The company produces a full range of competitive rowing shells, including:</p>
              <ul className="aboutList">
                <li>Single Sculls (1X)</li>
                <li>Double Sculls / Pair Boats (2X / 2-)</li>
                <li>Fours and Quads (4X / 4-)</li>
                <li>Coxed Fours (4+)</li>
                <li>Eight-person racing shells (8+)</li>
              </ul>
              <p>
                Each boat is designed with a strong focus on hydrodynamic efficiency, balance, durability,
                and lightweight construction — all critical factors in competitive rowing.
              </p>
            </div>

            {/* ── Innovation in Composite ── */}
            <div className="aboutBlock">
              <h3>Innovation in Composite Manufacturing</h3>
              <p>
                Under Rajesh Lunawat&apos;s leadership, Swastik Fibchem Industry adopted advanced composite
                manufacturing technologies that significantly improved boat performance.
              </p>
              <div className="materialsGrid">
                <div className="materialCard">
                  <h4>Carbon Fiber</h4>
                  <p>Ultra-lightweight, exceptional strength-to-weight ratio</p>
                </div>
                <div className="materialCard">
                  <h4>Kevlar Reinforcement</h4>
                  <p>Superior impact resistance and structural integrity</p>
                </div>
                <div className="materialCard">
                  <h4>Nomex Honeycomb Core</h4>
                  <p>Optimal stiffness with minimal weight penalty</p>
                </div>
                <div className="materialCard">
                  <h4>Vacuum-Sealed Epoxy</h4>
                  <p>Precision curing for flawless composite layup</p>
                </div>
              </div>
              <p>
                These materials enable the production of boats that are both extremely lightweight and
                structurally strong, providing athletes with superior speed and responsiveness on the water.
              </p>
            </div>

            {/* ── Global Brand ── */}
            <div className="aboutBlock">
              <h3>Building an Indian Brand for the Global Rowing Community</h3>
              <p>
                Rajesh Lunawat&apos;s vision extended beyond domestic manufacturing. From the beginning, he
                aimed to position Swastik Fibchem Industry as a globally competitive brand within the
                international rowing industry.
              </p>
              <p>
                By combining advanced materials, precision craftsmanship, and practical rowing experience,
                the company has developed boats designed to meet the expectations of professional athletes,
                rowing federations, and training institutions worldwide.
              </p>
            </div>

            {/* ── Commitment to Quality ── */}
            <div className="aboutBlock">
              <h3>Commitment to Quality &amp; Performance</h3>
              <p>
                For Lunawat, manufacturing high-performance boats is not simply a business — it is a pursuit
                of engineering excellence. Each rowing shell produced by Swastik Fibchem Industry is designed
                with careful attention to structural integrity, hydrodynamic performance, and athlete comfort.
              </p>
              <p>
                This dedication to quality has helped the company maintain a strong reputation within the
                rowing community for nearly three decades.
              </p>
            </div>

            {/* ── Contribution to Sport ── */}
            <div className="aboutBlock">
              <h3>Contribution to the Sport of Rowing</h3>
              <p>
                Through the establishment of Swastik Fibchem Industry in 1995, Rajesh Lunawat contributed
                significantly to the growth of rowing equipment manufacturing in India. His work has helped
                make professional racing boats accessible to athletes and rowing institutions while promoting
                the development of the sport across the country.
              </p>
            </div>

            {/* ── Looking Forward ── */}
            <div className="aboutBlock aboutBlockFuture">
              <h3>Looking Toward the Future</h3>
              <p>
                As the global rowing community continues to evolve, Swastik Fibchem Industry remains focused
                on innovation and international expansion. Guided by Rajesh Lunawat&apos;s entrepreneurial
                leadership and technical expertise, the company aims to further strengthen its presence in
                international markets, competitive rowing programs, and sports federations.
              </p>
              <p>
                Through dedication, global exposure, and a commitment to engineering excellence, Rajesh
                Lunawat has established Swastik Fibchem Industry as a respected name in the field of
                high-performance rowing boat manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="ctaBanner">
        <h2>Explore Our Fleet</h2>
        <p>See the range of high-performance rowing boats built with precision and passion.</p>
        <Link href="/products" className="cta">View Our Boats</Link>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        © 2026 Swastik Boats. All rights reserved.
      </footer>
    </>
  );
}
