import styled from '@emotion/styled';
import FollowUs from '../FollowUs/FollowUs';
import Subscribe from '../Subscribe/Subscribe';
import Contact from './Contact';
import useWidthDimesion from '../../hooks/useWindowDimension';
import Container from '../../Layouts/Container/Container';
import { useState, useEffect } from 'react';

const ContactsBlock = () => {
  const { width } = useWidthDimesion();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  return (
    stateWidth >= 1280 && (
      <Container>
        <ContactsBlockStyled>
          <div className='Contact__wrap'>
            <h2>Contact</h2>
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
  width: calc(100% + ${(props) => props.theme.pixelToVieWidth1920(40)});
  transform: translateX(${(props) => props.theme.pixelToVieWidth1920(-40)});
  padding: ${(props) => props.theme.pixelToVieWidth1920(20)};
  background: ${(props) => props.theme.colors.grey1};
  display: flex;
  justify-content: space-between;

  margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(100)};

  .Contact__wrap {
    h2 {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(10)};
      font-weight: 500;
      color: ${(props) => props.theme.colors.pink};
      text-transform: uppercase;
    }
  }
  /* Container in SUBCRIBE */
  .Container {
    margin: 0;
  }
`;

export default ContactsBlock;
