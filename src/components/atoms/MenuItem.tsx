import React, { useState } from 'react';
import ConveyorText from './ConveyorText';

function MenuItem({ item }: { item: { name: string } }) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ConveyorText hover={hover}>{item.name}</ConveyorText>
    </div>
  );
}

export default MenuItem;
