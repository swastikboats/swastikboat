import Link from "next/link";
import Header from "../../components/Header";

export const metadata = {
  title: "Privacy Policy | Swastik Boats",
  description:
    "How Swastik Fibchem Industry handles information submitted through Swastik Boats enquiry forms.",
};

const sectionHeadingStyle = {
  fontSize: "24px",
  marginBottom: "16px",
  color: "var(--color-primary)",
};

const sectionStyle = { marginBottom: "40px" };

export default function PrivacyPolicy() {
  return (
    <>
      <Header variant="dark" />
      <section className="pageHero" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
        <p className="hero-label">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>How we handle information shared through our enquiry forms</p>
      </section>

      <main
        className="sectionWrapper"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "60px 24px",
          lineHeight: "1.7",
          color: "var(--color-text-main)",
        }}
      >
        <p style={sectionStyle}>
          Swastik Fibchem Industry, operating as Swastik Boats, handles the
          information you provide when you contact us or request a quote. This
          policy explains what we collect, how we use it, and how to contact us
          about your information.
        </p>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Information you provide</h2>
          <p>
            Our Contact and Request Quote forms may collect your name, email
            address, country code, mobile number, boat interest, and message.
            Name and email address are required; the other fields are optional.
            Please provide only information relevant to your enquiry.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>How we use enquiry information</h2>
          <p>
            We use the information to receive, assess, respond to, and follow up
            on your enquiry. When you submit a form, the website sends the
            enquiry to our business Gmail mailbox. We also send an acknowledgement
            email to the email address you provide, containing your name, email
            address, and boat interest. Enquiry details are not routinely used
            for promotional marketing messages.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Service providers and access</h2>
          <p>
            The website is hosted on Vercel. Vercel may process technical request
            and hosting information as part of providing that service. We use
            Google Gmail, through Nodemailer, to deliver enquiry emails and keep
            them in the business mailbox. Only the business owner has access to
            that mailbox and handles replies. These providers may process information
            under their own service terms and privacy practices. We do not make
            claims here about provider data locations or their retention periods.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Storage and retention</h2>
          <p>
            The website does not maintain an application database of enquiries.
            Enquiry emails remain in the business Gmail mailbox. There is
            currently no fixed automatic deletion schedule, so emails may remain
            there indefinitely until manually deleted. You can ask the business
            owner to delete an enquiry by emailing{" "}
            <a href="mailto:swastikboats@gmail.com">swastikboats@gmail.com</a>;
            a request does not automatically delete the email.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Your requests</h2>
          <p>
            You may email <a href="mailto:swastikboats@gmail.com">swastikboats@gmail.com</a>
            to request access to information connected with your enquiry, ask for
            a correction, or request deletion where applicable. We will review
            and respond to requests through that mailbox.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Security</h2>
          <p>
            We use measures intended to protect enquiry information, including
            server-side validation and limiting access to the business mailbox.
            No method of sending or storing information can be guaranteed to be
            completely secure.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Cookies and website technology</h2>
          <p>
            The website code does not currently include analytics or advertising
            trackers. Limited checks of the live pages did not observe visible
            cookies or browser storage. The hosting provider may process
            technical information as part of operating the website. This may
            change if website services are added or updated.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Changes to this policy</h2>
          <p>
            If our enquiry handling changes, we will update this page to describe
            the current practice. Questions or requests about this policy may be
            sent to <a href="mailto:swastikboats@gmail.com">swastikboats@gmail.com</a>.
          </p>
        </section>

        <p>
          <Link href="/site-notice">Read the Site Notice</Link>
        </p>
      </main>

      <footer className="footer">
        © 2026 Swastik Boats. All rights reserved.
        <span style={{ margin: "0 10px" }}>|</span>
        <Link href="/site-notice">Site Notice</Link>
        <span style={{ margin: "0 10px" }}>|</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </footer>
    </>
  );
}
