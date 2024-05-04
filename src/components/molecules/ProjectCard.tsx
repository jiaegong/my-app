import styled from '@emotion/styled';
import { ProjectType } from '../organisms/PortfolioSection';
import Badge from '../atoms/Badge';

function ProjectCard({ data, index }: { data: ProjectType; index: number }) {
  return (
    <CardLayout background={data.background} index={index}>
      <ContentBox>
        <TextContainer>
          <TitleWrapper>{data.title}</TitleWrapper>
          <DescriptionWrapper>{data.description}</DescriptionWrapper>
        </TextContainer>
        <LinkContainer>
          {data.link && (
            <a
              href={data.link}
              target='_blank'
              rel='noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <Badge>VIEW WEBSITE</Badge>
            </a>
          )}
          {data.github && (
            <a
              href={data.github}
              target='_blank'
              rel='noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <Badge>GITHUB</Badge>
            </a>
          )}
        </LinkContainer>
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleWrapper = styled.h2`
  font-family: 'BungeeShade';
  font-size: 3rem;
`;

const DescriptionWrapper = styled.h3`
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
  height: 100%;
  object-fit: cover;
  object-position: left top;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 6px;
`;
