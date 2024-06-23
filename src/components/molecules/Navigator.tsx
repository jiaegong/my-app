import styled from '@emotion/styled';
import MenuItem from '../atoms/MenuItem';
import { sectionList } from '../../utils/sectionList';

function Navigator({
  scrollToSection,
}: {
  scrollToSection: (idx: number) => void;
}) {
  return (
    <Layout>
      {sectionList.map((item, idx) => (
        <MenuItem key={idx} item={item} onClick={() => scrollToSection(idx)} />
      ))}
    </Layout>
  );
}

export default Navigator;

const Layout = styled.div`
  display: flex;
  gap: 40px;
`;
