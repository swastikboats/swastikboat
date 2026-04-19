import Link from "next/link";
import Header from "../../components/Header";

export const metadata = {
  title: "Site Notice | Swastik Boats",
  description: "Site Notice / Impressum - Swastik Fibchem Industry",
};

export default function SiteNotice() {
  return (
    <>
      <Header dark />
      <div className="pageHero" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <p className="hero-label">Governance</p>
        <h1>Site Notice / Impressum</h1>
        <p>Legal and corporate information</p>
      </div>

      <div className="sectionWrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
        
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-primary)' }}>1. Company Information</h2>
          <p><strong>Company Name:</strong> Swastik Fibchem Industry<br/>
          <strong>Founder:</strong> Rajesh Lunawat<br/>
          <strong>Location:</strong> Pune, Maharashtra, India<br/>
          <strong>Business Type:</strong> Manufacture of rowing boats, kayaks, canoes, water sports equipment<br/>
          <strong>Year Established:</strong> 1995<br/>
          <strong>GST Number:</strong> 27AAFPL1368K1ZH</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-primary)' }}>2. Contact Details</h2>
          <p><strong>Email:</strong> swastikboats@gmail.com<br/>
          <strong>Phone:</strong> 9529203461 / 9822398641</p>
          <p>For all inquiries regarding our website, content, and legal matters, please contact us via the provided email or phone numbers.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-primary)' }}>3. Legal Disclaimer</h2>
          <p>The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
          <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-primary)' }}>4. Intellectual Property Rights</h2>
          <p>All content published on this website, including but not limited to text, graphics, logos, images, boat designs, product catalogues, and software, is the property of Swastik Fibchem Industry or its content suppliers and is protected by applicable intellectual property laws. Unauthorized reproduction, distribution, displaying, or transmission of any materials on this site is strictly prohibited without prior written consent from Swastik Fibchem Industry.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-primary)' }}>5. Terms of Use</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-primary)' }}>6. Privacy Notice</h2>
          <p>We are committed to protecting your privacy online. When you use our contact form or request a quote, we collect basic personal data necessary to respond to your inquiry (such as name, email address, and phone number). We do not share, sell, or lease your personal information to third parties unless we have your permission or are required by law to do so. We employ reasonable security measures to protect your submitted information.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-primary)' }}>7. Governing Law & Jurisdiction</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions or the use of this site will be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra, India.</p>
        </section>

      </div>

      <footer className="footer">
        © 2026 Swastik Boats. All rights reserved.
        <span style={{ margin: "0 10px" }}>|</span>
        <Link href="/site-notice">Site Notice</Link>
      </footer>
    </>
  );
}
