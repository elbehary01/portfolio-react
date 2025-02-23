export const scrollToSection = (id) => {
  if (!id) {
    console.warn('No ID provided for scrolling.');
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const yOffset = -70;
    const yPosition = element.offsetTop + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  } else {
    console.warn(`Element with ID "${id}" not found.`);
  }
};
