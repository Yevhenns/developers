export const handleScroll = (ref: { offsetTop: number }) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
};
