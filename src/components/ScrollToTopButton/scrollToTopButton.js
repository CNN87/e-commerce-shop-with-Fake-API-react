import React from "react";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className={`fixed bottom-8 right-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} z-50`}>
      <button
        onClick={scrollToTop}
        className="bg-purple-500 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-lg focus:outline-none"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
