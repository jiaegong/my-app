import styled from '@emotion/styled';
import Navigator from '../molecules/Navigator';
import { motion } from 'framer-motion';
import useScrollUp from '../../hooks/useScrollUp';

function Header() {
  const { isScrollUp, scrollY } = useScrollUp();
  const show = scrollY < 60 || isScrollUp;

  return (
    <HeaderLayout animate={{ opacity: show ? 1 : 0 }}>
      <Logo>Jiae Gong</Logo>
      <Navigator />
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled(motion.header)`
  width: 100%;
  height: 60px;

  position: fixed;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

  font-family: 'Inter';
`;

const Logo = styled.div`
  font-weight: bold;
`;
