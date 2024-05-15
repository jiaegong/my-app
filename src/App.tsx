import styled from '@emotion/styled';
import Header from './components/organisms/Header';
import AboutSection from './components/organisms/AboutSection';
import PortfolioSection from './components/organisms/PortfolioSection';
import ContactSection from './components/organisms/ContactSection';

function App() {
  return (
    <PageLayout>
      <Header />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </PageLayout>
  );
}

export default App;

const PageLayout = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
`;
