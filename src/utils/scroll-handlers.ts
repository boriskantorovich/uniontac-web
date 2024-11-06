import { analytics } from '@/utils/analytics'

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollHandlers = {
  handleDonateClick: () => {
    analytics.trackHero('Donate Button Click');
    scrollToElement('donate-form');
  },
  handleDonateClick2: () => {
    analytics.trackHero('Donate Button Click');
    scrollToElement('donate-form-2');
  },
  handleLearnMoreClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    analytics.trackHero('Learn More Click');
    scrollToElement('learn-more');
  }
}; 
