import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import Badge from '../atoms/Badge';
import { theme } from '../../styles/theme';

const stackList = [
  'React',
  'Next.js',
  'Javascript',
  'Typescript',
  'Emotion',
  'Tailwind css',
  'gsap',
  'framer-motion',
  'react-query',
  'zustand',
  'recoil',
];

function ProfileContainer({ progress }: { progress: number }) {
  return (
    <AnimatePresence>
      <Layout
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 0.3 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Greeting>
          안녕하세요! 제 웹사이트에 방문해주셔서 감사합니다!
          <br />
          저는 프론트엔드 개발자 공지애입니다.
        </Greeting>
        <Intro>
          사용자 경험을 생각하고 비즈니스를 이해하며 개발하려고 노력합니다.
          <br />
          기능 구현에만 그치지 않고 클린코드를 작성하고자 고민합니다.
          <br />
          고민하면서 새로 알게 된 내용은 블로그에 꾸준히 기록해 정리하고
          있습니다.
        </Intro>
        <SkillContainer>
          <SkillWrapper>Skills</SkillWrapper>
          <StackList>
            {stackList.map((stack) => (
              <Badge>{stack}</Badge>
            ))}
          </StackList>
        </SkillContainer>
      </Layout>
    </AnimatePresence>
  );
}

export default ProfileContainer;

const Layout = styled(motion.div)`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  font-family: 'Pretendard';
  font-size: 1.25rem;
  line-height: 150%;
  text-align: center;
`;

const Greeting = styled.h3``;

const Intro = styled.h3``;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkillWrapper = styled.p`
  font-family: 'Urbanist';
  font-weight: bold;
`;

const StackList = styled.div`
  width: 600px;

  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
