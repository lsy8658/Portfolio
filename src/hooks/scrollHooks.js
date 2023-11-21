export const scrollHooks = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const elemScrollTop = (elem) => {
    if (elem.current) {
      elem.current.scrollTop = 0;
    }
  };

  return {
    scrollTop,
    elemScrollTop,
  };
};
