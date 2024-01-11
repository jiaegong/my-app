import styled from '@emotion/styled';
import MenuItem from '../atoms/MenuItem';

const menuItems = [
  {
    name: 'Portfolio',
  },
  {
    name: 'Contact',
  },
  {
    name: 'About',
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
  gap: 20px;
`;
