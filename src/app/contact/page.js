"use client";

import { useState } from "react";
import Header from "../../components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    mobileNumber: "",
    boatInterest: "Elite Scull Boat",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const countryCodes = [
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+39", country: "Italy" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
  ];

  const boatOptions = [
    "Elite Scull Boat",
    "Carbon Racing Shell",
    "Professional Rowing Boat",
    "Coastal Double Scull",
    "Quad Scull Trainer",
    "Junior Training Scull",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          countryCode: "+1",
          mobileNumber: "",
          boatInterest: "Elite Scull Boat",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header variant="dark" />

      {/* ── Page Hero ─────────────────────── */}
      <section className="pageHero">
        <span className="hero-label">Get in Touch</span>
        <h1>Contact Us</h1>
        <p>
          Have questions? Ready to order? Fill out the form below and our team
          will get back to you shortly.
        </p>
      </section>

      {/* ── Quick Contact Buttons ──────────── */}
      <div className="contactQuickBar">
        <a
          href="https://wa.me/919529203461?text=Hi, I'm interested in learning more about Swastik Boats and would like to request a quote."
          target="_blank"
          rel="noopener noreferrer"
          className="contactQuickBtn"
        >
          <span className="quickIcon">💬</span> WhatsApp
        </a>
        <a href="tel:+919822398641" className="contactQuickBtn">
          <span className="quickIcon">☎️</span> Call
        </a>
        <a href="mailto:swastikboats@gmail.com" className="contactQuickBtn">
          <span className="quickIcon">📧</span> Email
        </a>
        <span className="contactQuickBtn contactQuickBtnStatic">
          <span className="quickIcon">📍</span> Bangalore, India
        </span>
      </div>

      {/* ── Contact Section ───────────────── */}
      <section className="contactSection">
        <div className="contactContainer">
          {/* ── Contact Info ──────────────────── */}
          <div className="contactInfo text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#0F172A]">How We Can Help</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Whether you&apos;re a competitive rower, training academy, or rowing
              club, Swastik Boats is here to help you find the perfect vessel for
              your needs. Reach out anytime.
            </p>
          </div>

          {/* ── Contact Form ──────────────────── */}
          <div className="contactFormWrapper">
            {submitted ? (
              <div className="successMessage">
                <div className="successIcon">✓</div>
                <h3>Quote Request Sent!</h3>
                <p>
                  Thank you for your interest. Our team will review your request
                  and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contactForm">
                <h2>Request a Quote</h2>

                <div className="formGroup">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="formGroupRow">
                  <div className="formGroup">
                    <label htmlFor="countryCode">Country Code</label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code} {item.country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="formGroup">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div className="formGroup">
                  <label htmlFor="boatInterest">Which Boat Interests You? *</label>
                  <select
                    id="boatInterest"
                    name="boatInterest"
                    value={formData.boatInterest}
                    onChange={handleChange}
                    required
                  >
                    {boatOptions.map((boat) => (
                      <option key={boat} value={boat}>
                        {boat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className="cta formSubmitBtn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Ask for Quote"}
                </button>

                <p className="formNote">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────── */}
      <footer className="footer">© 2026 Swastik Boats. All rights reserved.</footer>
    </>
  );
}
