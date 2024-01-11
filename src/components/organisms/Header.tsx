import styled from '@emotion/styled';
import React from 'react';
import Navigator from '../molecules/Navigator';

function Header() {
  return (
    <HeaderLayout>
      <Logo>Jiae Gong</Logo>
      <Navigator />
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.div`
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
