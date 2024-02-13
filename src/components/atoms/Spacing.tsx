import styled from '@emotion/styled';

function Spacing({
  size,
  tabletSize,
  mobileSize,
  direction = 'vertical',
}: {
  size: string;
  tabletSize?: string;
  mobileSize?: string;
  direction?: 'vertical' | 'horizontal';
}) {
  return (
    <Container
      size={size}
      tablesize={tabletSize}
      direction={direction}
      mobilesize={mobileSize}
    />
  );
}

export default Spacing;

const Container = styled.div<{
  size: string;
  direction: 'vertical' | 'horizontal';
  mobilesize?: string;
  tablesize?: string;
}>`
  width: ${({ direction }) => (direction === 'vertical' ? '100%' : '0px')};
  height: ${({ direction }) => (direction === 'horizontal' ? '100%' : '0px')};
  ${({ size, direction }) => {
    if (direction === 'vertical') {
      return `height: ${size};`;
    } else {
      return `width: ${size};`;
    }
  }}
`;
