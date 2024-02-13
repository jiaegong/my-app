import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { ProjectType } from '../organisms/PortfolioSection';

function ProjectCard({ data }: { data: ProjectType }) {
  return <CardLayout>ProjectCard</CardLayout>;
}

export default ProjectCard;

const CardLayout = styled(motion.div)`
  aspect-ratio: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 12px;
  border: 5px solid transparent;
  background: linear-gradient(${theme.colors.white}, ${theme.colors.white}),
    linear-gradient(
      92deg,
      ${theme.colors.pink} 0%,
      ${theme.colors.apricot} 100%
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;
