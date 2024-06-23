import Title from '../atoms/Title';
import styled from '@emotion/styled';
import CharacterContainer from '../molecules/CharacterContainer';

function ContactSection() {
  return (
    <SectionLayout>
      <Title>Contact</Title>
      <ContentBox>
        <ContactInfoContainer>
          Email: jiaetiagong@gmail.com
        </ContactInfoContainer>
        <CharacterWrapper>
          <CharacterContainer />
        </CharacterWrapper>
      </ContentBox>
    </SectionLayout>
  );
}

export default ContactSection;

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px;
  max-width: 1600px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterWrapper = styled.div`
  width: 600px;
  height: 400px;
`;

const ContactInfoContainer = styled.div`
  font-family: 'Urbanist';
  font-size: 36px;
`;
