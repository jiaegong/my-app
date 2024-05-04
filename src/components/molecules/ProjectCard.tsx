import styled from '@emotion/styled';
import { ProjectType } from '../organisms/PortfolioSection';
import Badge from '../atoms/Badge';
import GithubIcon from '../atoms/icons/GithubIcon';
import LinkIcon from '../atoms/icons/LinkIcon';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function ProjectCard({ data, index }: { data: ProjectType; index: number }) {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef);

  return (
    <CardLayout background={data.background} index={index}>
      <ContentBox>
        <InfoContainer>
          <div style={{ overflow: 'hidden' }} ref={titleRef}>
            <TitleWrapper
              initial={{ x: -100, y: 50 }}
              animate={{
                x: titleInView ? 0 : -100,
                y: titleInView ? 0 : 50,
              }}
              transition={{ duration: 0.4 }}
            >
              {data.title}
            </TitleWrapper>
          </div>
          <DescriptionWrapper>{data.description}</DescriptionWrapper>
          <BadgeContainer>
            Stack:
            {data.stack.map((stack) => (
              <Badge>{stack}</Badge>
            ))}
          </BadgeContainer>
        </InfoContainer>
        <BadgeContainer>
          {data.link && (
            <a
              href={data.link}
              target='_blank'
              rel='noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <Badge link icon={<LinkIcon />}>
                VIEW WEBSITE
              </Badge>
            </a>
          )}
          {data.github && (
            <a
              href={data.github}
              target='_blank'
              rel='noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <Badge link icon={<GithubIcon />}>
                GITHUB
              </Badge>
            </a>
          )}
        </BadgeContainer>
      </ContentBox>
      {data.thumbnail && (
        <ImageWrapper>
          <Image src={data.thumbnail} alt='thumbnail' />
        </ImageWrapper>
      )}
    </CardLayout>
  );
}

export default ProjectCard;

const CardLayout = styled.article<{ background: string; index: number }>`
  background: ${({ background }) => background};
  height: 600px;
  display: flex;
  flex-direction: ${({ index }) => (index % 2 !== 0 ? 'row-reverse' : 'row')};
`;

const ContentBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleWrapper = styled(motion.h2)`
  font-family: 'BungeeShade';
  font-size: 3rem;
`;

const DescriptionWrapper = styled(motion.h3)`
  font-family: 'Pretendard';
  font-size: 1rem;
  line-height: 150%;
`;

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: left top;
`;

const BadgeContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;

  font-family: 'Pretendard';
  font-weight: 700;
`;
