import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Badge({
  children,
  icon,
  link = false,
}: {
  children: string;
  icon?: React.ReactNode;
  link?: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper
      link={link}
      onMouseEnter={() => {
        if (link) setHover(true);
      }}
      onMouseLeave={() => {
        if (link) setHover(false);
      }}
      animate={{
        boxShadow: hover ? '0 0 0 2px #000' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      {icon && (
        <motion.span
          animate={{
            transform: hover ? 'translate(8%, -8%)' : 'translate(0%, 0%)',
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      {children}
    </Wrapper>
  );
}

export default Badge;

const Wrapper = styled(motion.div)<{ link: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: ${({ link }) => link && '0px 5px'};

  font-family: 'Urbanist';
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: bold;
  line-height: 13px;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  text-transform: uppercase;
  text-wrap: nowrap;
`;
