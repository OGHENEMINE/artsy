import { useState, useEffect } from "react";

const useWindowScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    // Function to update the scroll height
    const updateScrollHeight = () => {
      setScrollHeight(window.scrollY);
    };

    // Add event listener for scroll and resize events
    window.addEventListener("scroll", updateScrollHeight);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", updateScrollHeight);
    };
  }, []); // Empty array ensures this effect runs once when the component mounts

  return scrollHeight;
};

export default useWindowScrollHeight;
