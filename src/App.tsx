import styled from '@emotion/styled';
import React from 'react';
import Header from './components/organisms/Header';
import IntroSection from './components/organisms/IntroSection';

function App() {
  return (
    <PageLayout>
      <Header />
      {/* <IntroSection /> */}
    </PageLayout>
  );
}

export default App;

const PageLayout = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: #faf0e6;
`;
