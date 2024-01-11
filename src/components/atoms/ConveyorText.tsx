import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

function ConveyorText({
  children,
  hover,
}: {
  children: string;
  hover: boolean;
}) {
  return (
    <Wrapper>
      {children.split('').map((item, idx) => (
        <CharWrapper key={idx}>
          <motion.span
            initial={{ transform: 'translate(0, 0)' }}
            animate={{
              transform: hover ? 'translate(0, -100%)' : 'translate(0, 0)',
            }}
            transition={{
              duration: 0.3,
              delay: [0.3, 0.1, 0.2][idx % 3],
            }}
            style={{ position: 'absolute' }}
          >
            {item}
          </motion.span>
          <motion.span
            initial={{ transform: 'translate(0, 100%)' }}
            animate={{
              transform: hover ? 'translate(0, 0)' : 'translate(0, 100%)',
            }}
            transition={{
              duration: 0.3,
              delay: [0.3, 0.1, 0.2][idx % 3],
            }}
          >
            {item}
          </motion.span>
        </CharWrapper>
      ))}
    </Wrapper>
  );
}

export default ConveyorText;

const Wrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  white-space: pre-wrap;
`;

const CharWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
