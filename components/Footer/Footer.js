import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import Line from '../../UI/Line';
import FooterCopyRight from './FooterCopyRight';
import Contact from '../ContactsBlock/Contact';
import FooterInformation from './FooterInformation';
import FooterSubscripion from './FooterSubscripion';
import FooterRules from './FooterRules';
import FooterTitle from './FooterTitle';
import useDimensionWidth from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const Footer = () => {
  const { width } = useDimensionWidth();
  const [stateWidth, setStateWidth] = useState(null);
  const [isRendered, setRendered] = useState(false);
  useEffect(() => {
    setStateWidth(width);
    setRendered(true);
  }, [width]);

  return (
    isRendered && (
      <FooterStyled id='contact'>
        <Container>
          <FooterInformation />
          <FooterSubscripion />
          <FooterRules />

          <div className='contact_wrap'>
            <FooterTitle text='Kontakt' />
            <Contact iconsColor='white' textColor='#E8ECF1' />
          </div>

          {stateWidth < 1280 && <Line />}

          <FooterCopyRight />
        </Container>
      </FooterStyled>
    )
  );
};

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.grey4};
  padding: ${(props) => props.theme.pixelToVieWidth(20)} 0;

  .contact_wrap {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
  }

  ${(props) => props.theme.mediaDesktop} {
    padding: ${(props) => props.theme.pixelToVieWidth1920(50)} 0;

    > .Container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .contact_wrap {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(40)};

      .Contact {
        li {
          :not(:last-child) {
            margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(10)};
          }
        }
      }

      .Contact a {
        font-size: ${(props) => props.theme.pixelToVieWidth1920(15)};
        line-height: ${(props) => props.theme.pixelToVieWidth1920(23)};
      }
    }

    .FooterSubscripion {
      order: 5;
    }
  }
`;

export default Footer;
