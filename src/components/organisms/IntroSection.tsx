import styled from '@emotion/styled';
import { motion } from 'framer-motion';

function IntroSection() {
  return (
    <Layout>
      <TitleWrapper>JIAE</TitleWrapper>
      <TitleWrapper>GONG</TitleWrapper>
    </Layout>
  );
}

export default IntroSection;

const Layout = styled.div``;

const TitleWrapper = styled(motion.span)`
  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 4rem;
  -webkit-text-stroke: 2px black; /* Chrome, Safari, Opera */
  text-stroke: 2px black; /* Firefox, Edge */
`;
