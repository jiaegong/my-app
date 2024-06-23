import React, { useState } from 'react';
import ConveyorText from './ConveyorText';
import styled from '@emotion/styled';

function MenuItem({
  item,
  onClick,
}: {
  item: { name: string };
  onClick: () => void;
}) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <ItemWrapper
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ConveyorText hover={hover}>{item.name}</ConveyorText>
    </ItemWrapper>
  );
}

export default MenuItem;

const ItemWrapper = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
`;
