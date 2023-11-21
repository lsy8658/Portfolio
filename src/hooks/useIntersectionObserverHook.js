import React, { useEffect, useRef, useState } from "react";

const useIntersectionObserverHook = (targetRef) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const observer = useRef();

  useEffect(() => {
    if (!observer.current) {
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
          } else {
            setIsInViewport(false);
          }
        });
      };

      observer.current = new window.IntersectionObserver(observerCallback, {
        threshold: 0.3,
      });
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef]);

  return isInViewport;
};

export default useIntersectionObserverHook;
// https://www.youtube.com/watch?v=WFw_SgVlXUY&t=52s
/*
  options
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
*/
