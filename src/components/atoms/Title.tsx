import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
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
  font-family: 'Chubby';
  font-size: 60px;
  color: ${theme.colors.pink};
  -webkit-text-stroke: 2px ${theme.colors.black};
  text-stroke: 2px ${theme.colors.black};
`;
