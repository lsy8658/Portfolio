export const scrollHooks = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollAnimation = () => {};
  return {
    scrollTop,
  };
};
