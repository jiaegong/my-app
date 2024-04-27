import styled from '@emotion/styled';
import { motion } from 'framer-motion';

function Title({
  children,
  initial,
  animate,
  transition,
}: {
  children: string;
  initial?: { [key: string]: any };
  animate?: { [key: string]: any };
  transition?: { [key: string]: any };
}) {
  return (
    <Wrapper initial={initial} animate={animate} transition={transition}>
      {children}
    </Wrapper>
  );
}

export default Title;

const Wrapper = styled(motion.div)`
  font-family: 'BungeeShade';
  font-size: 112px;
`;
