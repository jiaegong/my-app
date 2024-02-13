import styled from '@emotion/styled';
import Title from '../atoms/Title';
import ProjectCard from '../molecules/ProjectCard';
import Spacing from '../atoms/Spacing';

export type ProjectType = { title: string; date: string; description: string };

const projects: ProjectType[] = [
  { title: 'title', date: 'date', description: 'description' },
  { title: 'title', date: 'date', description: 'description' },
  { title: 'title', date: 'date', description: 'description' },
  { title: 'title', date: 'date', description: 'description' },
  { title: 'title', date: 'date', description: 'description' },
];

function PortfolioSection() {
  return (
    <SectionLayout>
      <Title>Project</Title>
      <Spacing size='20px' />
      <PortfolioContainer>
        {projects.map((item, idx) => (
          <ProjectCard key={idx} data={item} />
        ))}
      </PortfolioContainer>
    </SectionLayout>
  );
}

export default PortfolioSection;

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px;
  max-width: 1600px;
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`;
