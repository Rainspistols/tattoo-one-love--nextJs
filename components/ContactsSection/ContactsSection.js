import styled from '@emotion/styled';
import { useBreakpoint } from 'utils/breakpoint';
// Components
import FollowUs from '../FollowUs/FollowUs';
import Subscribe from '../Subscribe/Subscribe';
import Contacts from '../Contacts/Contacts';
import Container from '@/Layouts/Container/Container';

const ContactsBlock = () => {
  const breakpoint = useBreakpoint();

  return breakpoint.desktop ? (
    <Container>
      <ContactsBlockStyled>
        <div className='Contact__wrap' id='contact'>
          <h2>Kontakt</h2>
          <Contacts iconsColor='#F11E9C' textColor='#6C737E' />
        </div>

        <FollowUs />
        <Subscribe />
      </ContactsBlockStyled>
    </Container>
  ) : null;
};

const ContactsBlockStyled = styled.section`
  width: calc(100% + ${({ theme }) => theme.vw1920(40)});
  transform: translateX(${({ theme }) => theme.vw1920(-40)});
  padding: ${({ theme }) => theme.vw1920(20)};
  background: ${({ theme }) => theme.colors.grey1};
  display: flex;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.vw1920(100)};

  .Contact__wrap {
    h2 {
      margin-bottom: ${({ theme }) => theme.vw1920(10)};
      font-weight: 500;
      color: ${({ theme }) => theme.colors.pink};
      text-transform: uppercase;
    }
  }
  /* Container in SUBCRIBE */
  .Container {
    margin: 0;
  }
`;

export default ContactsBlock;
