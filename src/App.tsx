import styled from '@emotion/styled';
import Header from './components/organisms/Header';
import { useRef } from 'react';
import { sectionList } from './utils/sectionList';

function App() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      <Header scrollToSection={scrollToSection} />
      {sectionList.map((section, idx) => (
        <SectionWrapper key={idx} ref={(el) => (sectionRefs.current[idx] = el)}>
          {section.component}
        </SectionWrapper>
      ))}
    </PageLayout>
  );
}

export default App;

const PageLayout = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
`;

const SectionWrapper = styled.div``;
