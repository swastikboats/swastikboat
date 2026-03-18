"use client";

import { useState } from "react";
import QuotePopup from "./QuotePopup";

export default function RequestQuoteButton({ productTitle }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button className="cta" onClick={() => setShowPopup(true)}>
        Request Quote
      </button>
      {showPopup && (
        <QuotePopup
          productTitle={productTitle}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
