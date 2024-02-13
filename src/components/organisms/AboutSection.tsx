import styled from '@emotion/styled';
import DividedText from '../atoms/DividedText';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfileBox from '../molecules/ProfileBox';

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState<number>(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'none', duration: 2 });

    ScrollTrigger.normalizeScroll(true);

    ScrollTrigger.create({
      trigger: ref.current,
      pin: true,
      start: 'center center',
      end: '+=4000',
      markers: false,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <SectionLayout ref={ref}>
      <DividedText progress={progress} />
      <ProfileBox progress={progress} />
    </SectionLayout>
  );
}

export default AboutSection;

const SectionLayout = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
