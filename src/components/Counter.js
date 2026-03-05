"use client";

import { useState, useEffect } from "react";

export default function Counter({ finalNumber, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= finalNumber) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        const increment = Math.ceil(finalNumber / 50);
        return Math.min(prev + increment, finalNumber);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [count, finalNumber]);

  return (
    <div className="statItem">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}
