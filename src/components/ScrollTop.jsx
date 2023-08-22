import React from "react";
import { useState, useEffect } from "react";
const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="top-to-button"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={goTop}
    >
      <i class="bi bi-chevron-up"></i>
    </div>
  );
};

export default ScrollTop;
