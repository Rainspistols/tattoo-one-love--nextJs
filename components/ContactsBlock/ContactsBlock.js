import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
// Components
import FollowUs from '../FollowUs/FollowUs';
import Subscribe from '../Subscribe/Subscribe';
import Contact from './Contact';
import Container from '../../Layouts/Container/Container';

const ContactsBlock = () => {
  const [stateWidth, setStateWidth] = useState(null);

  if (process.browser) {
    useEffect(() => {
      setStateWidth(window.innerWidth);
    }, [window.innerWidth]);
  }

  return (
    stateWidth >= 1280 && (
      <Container>
        <ContactsBlockStyled>
          <div className='Contact__wrap' id={'contact'}>
            <h2>Kontakt</h2>
            <Contact iconsColor='#F11E9C' textColor='#6C737E' />
          </div>

          <FollowUs />
          <Subscribe />
        </ContactsBlockStyled>
      </Container>
    )
  );
};

const ContactsBlockStyled = styled.section`
  width: calc(100% + ${({ theme }) => theme.pixelToVieWidth1920(40)});
  transform: translateX(${({ theme }) => theme.pixelToVieWidth1920(-40)});
  padding: ${({ theme }) => theme.pixelToVieWidth1920(20)};
  background: ${({ theme }) => theme.colors.grey1};
  display: flex;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(100)};

  .Contact__wrap {
    h2 {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
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
