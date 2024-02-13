import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Spacing from './Spacing';
import { theme } from '../../styles/theme';
import Title from './Title';

function DividedText({ progress }: { progress: number }) {
  console.log(progress);
  return (
    <TextLayout>
      <Title
        initial={{ y: 0 }}
        animate={{
          x: `${
            progress > 0.1 ? -25 * Math.min(Math.sqrt(progress) + 0.3, 1) : 0
          }vw`,
          y: `${
            progress > 0.2 ? -40 * Math.min(Math.sqrt(progress) + 0.4, 1) : 0
          }vh`,
        }}
        transition={{ duration: 0.1 }}
      >
        Hello I am
      </Title>
      <Spacing size='20px' direction='horizontal' />
      <Title
        initial={{ y: 0 }}
        animate={{
          x: `${
            progress > 0.1 ? +25 * Math.min(Math.sqrt(progress) + 0.3, 1) : 0
          }vw`,
          y: `${
            progress > 0.2 ? +40 * Math.min(Math.sqrt(progress) + 0.4, 1) : 0
          }vh`,
        }}
        transition={{ duration: 0.1 }}
      >
        Jiae Gong
      </Title>
    </TextLayout>
  );
}

export default DividedText;

const TextLayout = styled.div`
  display: flex;
  justify-content: center;
  algin-items: center;
`;