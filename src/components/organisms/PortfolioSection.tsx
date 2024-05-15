import styled from '@emotion/styled';
import Title from '../atoms/Title';
import ProjectCard from '../molecules/ProjectCard';
import Spacing from '../atoms/Spacing';
import { theme } from '../../styles/theme';
import React from 'react';

export type ProjectType = {
  title: string;
  description: React.ReactNode;
  thumbnail: string;
  stack: string[];
  link?: string;
  github?: string;
  background: string;
};

const projects: ProjectType[] = [
  {
    title: 'Altava',
    description: (
      <p>
        3D 의상을 직접 디자인하고 컨버전 할 수 있는 툴을 위한 웹페이지입니다.
        <br />
        유저가 사이트에 머무르는 시간을 늘리고 더 편하게 정보를 습득할 수 있도록
        gsap, framer-motion을 활용해 마우스 스크롤 이벤트, 호버 이벤트 등의
        다양한 인터랙션을 개발했습니다.
        <br />
        모노레포를 구축하고 tailwind로 공용 컴포넌트를 만들어서 관리한
        프로젝트입니다. 페이지네이션 시 쿼리 파라미터에 필터 및 정렬 정보를 담아
        라우팅을 한다거나 Next.js 13의 Next/Image를 적극 사용하여 이미지
        최적화를 하는 등 유저의 편의성을 많이 생각하며 개발했습니다.
      </p>
    ),
    stack: [
      'Nextjs',
      'Typescript',
      'Tailwind css',
      'gsap',
      'framer-motion',
      'React-query',
      'zustand',
    ],
    thumbnail: '/images/altava.png',
    link: 'https://altava.com/',
    background: theme.colors.yellow,
  },
  {
    title: 'Valla Lab',
    description: (
      <p>
        뷰티 서비스를 간편하게 예약할 수 있는 모바일 어플리케이션 서비스에
        입점할 파트너를 모집하기 위한 웹페이지입니다. 어플리케이션 내 웹뷰로
        보여지기 때문에 모바일 사이즈로만 제작되었습니다.
        <br />
        기존에는 사내 운영팀에서 구글폼을 통해 받은 정보를 수기로 입력했었는데,
        웹페이지 개발 후 입점 신청 및 샵 운영 정보, 파트너 포트폴리오 이미지 등
        정보 입력이 자동화되어 업무 시간 감소하고 업무 효율성이 증대되었습니다.
        또한, 파트너가 직접 가입이 가능해져 웹페이지 개발 후 기존 파트너 수
        443명에서 두 달만에 359명이 추가로 입점해 802명으로 증가하는 성과가
        있었습니다.
      </p>
    ),
    stack: [
      'Nextjs',
      'Typescript',
      'Emotion',
      'React-query',
      'Recoil',
      'react-hook-form',
    ],
    thumbnail: '/images/valla.png',
    link: 'https://partner-entry.valla.kr/shop/terms',
    background: theme.colors.apricot,
  },
  {
    title: 'Windows95',
    description: (
      <p>
        윈도우95를 재현해본 프로젝트입니다. 그림판, 메모장, 지뢰찾기를
        구현해봤습니다.
        <br />
        UI를 atom 단위로 모듈화해서 최대한 윈도우95와 비슷하게 구현하려고
        노력했습니다. 현재는 기본 기능만 있는 상태로, 더 디테일한 기능들을
        추가해 개선해나가고 있습니다.
      </p>
    ),
    stack: ['Nextjs', 'Typescript', 'Emotion', 'zustand'],
    thumbnail: '/images/windows.png',
    link: 'https://windows95-kohl.vercel.app/',
    github: 'https://github.com/jiaegong/windows95',
    background: theme.colors.mint,
  },
  {
    title: 'Friengls',
    description: (
      <p>
        일본인에게 한국어를 가르치는 일을 한 적이 있는데, 그때 수업 예약이나
        변경 등을 학생이 직접 문의를 줘서 처리해야 했던 점이 불편하다고 느꼈던
        경험이 있어, 학생이 직접 온라인으로 튜터 선택, 수업 예약/변경할 수 있고
        튜터 입장에서도 스케줄을 캘린더로 바로 확인할 수 있는 프로젝트를 만들어
        보았습니다.
        <br />
        스케줄 확인 후 웹사이트 내에서 바로 수업을 진행할 수 있도록 Socket.io와
        WebRTC를 이용한 화상통화 기능과 화면 공유 기능이 있으며 수업을 들으면서
        모르는 단어는 검색할 수 있도록 번역기도 추가했습니다. 프로젝트 성격에
        맞게 다국어 지원(한국어, 영어, 일본어)을 하고 있습니다.
      </p>
    ),
    stack: [
      'React',
      'Javascript',
      'styled-component',
      'redux',
      'PeerJS',
      'Socket.io',
      'i18next',
    ],
    thumbnail: '/images/friengls.png',
    github: 'https://github.com/jiaegong/Friengls',
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
          <ProjectCard key={idx} data={item} index={idx} />
        ))}
      </PortfolioContainer>
    </SectionLayout>
  );
}

export default PortfolioSection;

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px;
  max-width: 1600px;
  margin: 0 auto;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
