import { useState, useEffect } from "react";
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const useObserver = (elementRef: React.MutableRefObject<Element>) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current);
        }
      });
    }, options);
    observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
    };
  }, [elementRef]);
  return isVisible;
};
export default useObserver;
