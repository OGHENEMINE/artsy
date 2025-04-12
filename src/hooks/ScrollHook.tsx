import { useState, useEffect } from "react";

// Custom hook to track the scroll height of the window
const useWindowScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    // Function to update the scroll height
    const updateScrollHeight = () => {
      setScrollHeight(window.scrollY);
    };

    // Call the function initially to set the scroll height
    updateScrollHeight();

    // Add event listener for scroll and resize events
    window.addEventListener("scroll", updateScrollHeight);
    window.addEventListener("resize", updateScrollHeight);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", updateScrollHeight);
      window.removeEventListener("resize", updateScrollHeight);
    };
  }, []); // Empty array ensures this effect runs once when the component mounts

  return scrollHeight;
};

export default useWindowScrollHeight;
