import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function Badge({ children }: { children: string }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Badge;

const Wrapper = styled.div`
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
