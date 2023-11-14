import React, { useEffect, useState } from "react";

const useIntersectionObserverHook = (targetRef, observerFnc, observerOt) => {
  useEffect(() => {
    let observer;

    if (targetRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          }
        });
      }, observerOt);
    }
    observer.observe(targetRef.current);
    return () => observer.current && observer.current.disconnect();
  }, [targetRef]);
  return <div>useIntersectionObserverHook</div>;
};

export default useIntersectionObserverHook;
/*
  options

    root: null,
    rootMargin: "0px",
    threshold: 0.4,
*/
