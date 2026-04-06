"use client";

import { useState, useEffect } from "react";

export default function QuotePopup({ productTitle, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    mobileNumber: "",
    boatInterest: productTitle || "Elite Scull Boat",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setShowConfirmation(true);
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

  // Confirmation popup
  if (showConfirmation) {
    return (
      <div className="quotePopupBackdrop" onClick={onClose}>
        <div className="quoteConfirmationBox" onClick={(e) => e.stopPropagation()}>
          <button className="quotePopupClose" onClick={onClose} aria-label="Close">✕</button>
          <div className="successIcon">✓</div>
          <h3>Quote Request Sent!</h3>
          <p>Thank you for your interest in <strong>{productTitle}</strong>. Our team will review your request and contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quotePopupBackdrop" onClick={onClose}>
      <div className="quotePopupBox" onClick={(e) => e.stopPropagation()}>
        <button className="quotePopupClose" onClick={onClose} aria-label="Close">✕</button>

        <form onSubmit={handleSubmit} className="quotePopupForm">
          <h2>Request a Quote</h2>
          <p className="quotePopupSubtitle">for <strong>{productTitle}</strong></p>

          <div className="formGroup">
            <label htmlFor="popupName">Full Name *</label>
            <input type="text" id="popupName" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
          </div>

          <div className="formGroup">
            <label htmlFor="popupEmail">Email Address *</label>
            <input type="email" id="popupEmail" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
          </div>

          <div className="formGroupRow">
            <div className="formGroup">
              <label htmlFor="popupCountryCode">Country Code</label>
              <select id="popupCountryCode" name="countryCode" value={formData.countryCode} onChange={handleChange}>
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code} {item.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="popupMobile">Mobile Number</label>
              <input type="tel" id="popupMobile" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="9876543210" />
            </div>
          </div>

          <div className="formGroup">
            <label htmlFor="popupMessage">Additional Message</label>
            <textarea id="popupMessage" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows="3" />
          </div>

          <button type="submit" className="cta formSubmitBtn" disabled={loading}>
            {loading ? "Sending..." : "Send Quote Request"}
          </button>

          <p className="formNote">* Required fields. We typically respond within 24 hours.</p>
        </form>
      </div>
    </div>
  );
}
