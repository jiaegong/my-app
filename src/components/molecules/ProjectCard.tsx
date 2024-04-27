import styled from '@emotion/styled';
import { ProjectType } from '../organisms/PortfolioSection';

function ProjectCard({ data }: { data: ProjectType }) {
  return (
    <CardLayout background={data.background}>
      <ContentBox>
        <TitleWrapper>{data.title}</TitleWrapper>
        <DescriptionWrapper>{data.description}</DescriptionWrapper>
      </ContentBox>
    </CardLayout>
  );
}

export default ProjectCard;

const CardLayout = styled.article<{ background: string }>`
  background: ${({ background }) => background};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
`;

const TitleWrapper = styled.h2`
  font-family: 'BungeeShade';
  font-size: 3rem;
`;

const DescriptionWrapper = styled.h3`
  font-family: 'Pretendard';
  font-size: 1rem;
`;
