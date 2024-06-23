import AboutSection from '../components/organisms/AboutSection';
import ContactSection from '../components/organisms/ContactSection';
import PortfolioSection from '../components/organisms/PortfolioSection';

export const sectionList = [
  {
    name: 'About',
    component: <AboutSection />,
  },
  {
    name: 'Portfolio',
    component: <PortfolioSection />,
  },
  {
    name: 'Contact',
    component: <ContactSection />,
  },
];
