import styled from '@emotion/styled';
import MenuItem from '../atoms/MenuItem';

const menuItems = [
  {
    name: 'About',
  },
  {
    name: 'Portfolio',
  },
  {
    name: 'Contact',
  },
];

function Navigator() {
  return (
    <Layout>
      {menuItems.map((item, idx) => (
        <MenuItem key={idx} item={item} />
      ))}
    </Layout>
  );
}

export default Navigator;

const Layout = styled.div`
  display: flex;
  gap: 40px;
`;
