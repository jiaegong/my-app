import styled from '@emotion/styled';
import Title from '../atoms/Title';
import ProjectCard from '../molecules/ProjectCard';
import Spacing from '../atoms/Spacing';
import { theme } from '../../styles/theme';

export type ProjectType = {
  title: string;
  description: string;
  link?: string;
  background: string;
};

const projects: ProjectType[] = [
  {
    title: 'Altava',
    description: 'description',
    link: 'https://altava.com/',
    background: theme.colors.yellow,
  },
  {
    title: 'Valla Lab',
    description: 'description',
    background: theme.colors.apricot,
  },
  {
    title: 'Windows95',
    description: 'description',
    background: theme.colors.mint,
  },
  {
    title: 'Friengls',
    description: 'description',
    background: theme.colors.skyblue,
  },
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
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
