import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import { bgMobile, bgTablet, logo, bgDesktop } from './images';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <img className='logo' src={logo} alt='one love tattoo logo' />
        <p className='text1'>Bodies are not born. Bodies are made.</p>
        <p className='text2'>Studio tatuażu, w którym znajdziesz sposób na wyrażenia siebie.</p>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-weight: 500;

  .logo {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(25)};
    width: ${(props) => props.theme.pixelToVieWidth(100)};
    height: ${(props) => props.theme.pixelToVieWidth(100)};
    margin-left: auto;
    margin-right: auto;
  }

  .Container {
    padding-bottom: ${(props) => props.theme.pixelToVieWidth(57)};
    padding-top: ${(props) => props.theme.pixelToVieWidth(35)};
  }

  .text1 {
    font-size: ${(props) => props.theme.pixelToVieWidth(38)};
    line-height: ${(props) => props.theme.pixelToVieWidth(50)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};

    text-transform: uppercase;
    padding-left: ${(props) => props.theme.pixelToVieWidth(10)};
    padding-right: ${(props) => props.theme.pixelToVieWidth(10)};
  }

  .text2 {
    font-size: ${(props) => props.theme.pixelToVieWidth(18)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    text-transform: uppercase;
    padding-left: ${(props) => props.theme.pixelToVieWidth(50)};
    padding-right: ${(props) => props.theme.pixelToVieWidth(50)};
  }
  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    background-image: url(${bgTablet});
    margin-bottom:  ${(props) => props.theme.pixelToVieWidth1920(134)};

    ${(props) => props.theme.mediaDesktop} {
      background-image: url(${bgDesktop});
      padding: ${(props) => props.theme.pixelToVieWidth1920(150)} 0
        ${(props) => props.theme.pixelToVieWidth1920(150)};

      .logo {
        width: ${(props) => props.theme.pixelToVieWidth1920(350)};
        height: ${(props) => props.theme.pixelToVieWidth1920(350)};
        margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(50)};
      }

      .Container {
        padding: 0;
      }

      .text1 {
        font-size: ${(props) => props.theme.pixelToVieWidth1920(40)};
        line-height: ${(props) => props.theme.pixelToVieWidth1920(50)};
        margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(20)};
      }

      .text2 {
        font-size: ${(props) => props.theme.pixelToVieWidth1920(24)};
        line-height: ${(props) => props.theme.pixelToVieWidth1920(34)};
      }
    }
  }
`;

export default Hero;
