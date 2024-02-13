import styled from '@emotion/styled';

type TextProps = {
  color: string;
  weight: number;
  children: React.ReactNode;
};

function Text({ children, color, weight }: TextProps) {
  return <TextWrapper>{children}</TextWrapper>;
}

export default Text;

const TextWrapper = styled.div``;
