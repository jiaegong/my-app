import Title from '../atoms/Title';
import styled from '@emotion/styled';
import CharacterContainer from '../molecules/CharacterContainer';

function ContactSection() {
  return (
    <SectionLayout>
      <Title>Contact</Title>
      <Wrapper>
        <CharacterContainer />
      </Wrapper>
    </SectionLayout>
  );
}

export default ContactSection;

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px;
  max-width: 1600px;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
`;
