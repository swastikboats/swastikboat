"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after page fully loads
    const handleLoad = () => {
      setIsVisible(false);
    };

    window.addEventListener("load", handleLoad);
    // Also hide after 2 seconds max to ensure it doesn't stay forever
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loadingScreen">
      <div className="loadingContent">
        <div className="loadingLogo">🚣</div>
        <h1>Swastik Boats</h1>
        <p>Precision Boats Built for Performance</p>
        <div className="loadingBar">
          <div className="loadingFill"></div>
        </div>
      </div>
    </div>
  );
}
