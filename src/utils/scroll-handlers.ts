export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollHandlers = {
  handleDonateClick: () => scrollToElement('donate-form'),
  handleDonateClick2: () => scrollToElement('donate-form-2'),
  handleLearnMoreClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('learn-more');
  }
}; 
