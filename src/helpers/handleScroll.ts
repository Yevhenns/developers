export const handleScroll = (ref: HTMLDivElement | null) => {
  if (ref !== null) {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  }
};
