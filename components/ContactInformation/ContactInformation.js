import styled from '@emotion/styled';
import FollowUs from '../FollowUs/FollowUs';
import Subscribe from '../Subscribe/Subscribe';

const ContactInformation = () => {
  return (
    <ContactInformationStyled>
    <section className="contact">
      <h2>Contact</h2>
    </section>
      <FollowUs />
      <Subscribe />
    </ContactInformationStyled>
  );
};

const ContactInformationStyled = styled.section`
  background: grey;
`;

export default ContactInformation;
