import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import { bgMobile, bgTablet, logo, bgDesktop } from './images';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <img className='logo' src={logo} alt='one love tattoo logo' />
        <p className='text1'>Bodies are not born. Bodies are made.</p>
        <p className='text2'>
          Studio tatuażu, w którym znajdziesz sposób na wyrażenia siebie.
        </p>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: 500;

  .logo {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(25)};
    width: ${({ theme }) => theme.pixelToVieWidth(100)};
    height: ${({ theme }) => theme.pixelToVieWidth(100)};
    margin-left: auto;
    margin-right: auto;
  }

  .Container {
    padding-bottom: ${({ theme }) => theme.pixelToVieWidth(57)};
    padding-top: ${({ theme }) => theme.pixelToVieWidth(35)};
  }

  .text1 {
    font-size: ${({ theme }) => theme.pixelToVieWidth(38)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(50)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(20)};

    text-transform: uppercase;
    padding-left: ${({ theme }) => theme.pixelToVieWidth(10)};
    padding-right: ${({ theme }) => theme.pixelToVieWidth(10)};
  }

  .text2 {
    font-size: ${({ theme }) => theme.pixelToVieWidth(18)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(20)};
    text-transform: uppercase;
    padding-left: ${({ theme }) => theme.pixelToVieWidth(50)};
    padding-right: ${({ theme }) => theme.pixelToVieWidth(50)};
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    background-image: url(${bgTablet});
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(134)};

    ${({ theme }) => theme.mediaDesktop} {
      background-image: url(${bgDesktop});
      padding: ${({ theme }) => theme.pixelToVieWidth1920(150)} 0
        ${({ theme }) => theme.pixelToVieWidth1920(150)};

      .logo {
        width: ${({ theme }) => theme.pixelToVieWidth1920(350)};
        height: ${({ theme }) => theme.pixelToVieWidth1920(350)};
        margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(50)};
      }

      .Container {
        padding: 0;
      }

      .text1 {
        font-size: ${({ theme }) => theme.pixelToVieWidth1920(40)};
        line-height: ${({ theme }) => theme.pixelToVieWidth1920(50)};
        margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(20)};
      }

      .text2 {
        font-size: ${({ theme }) => theme.pixelToVieWidth1920(24)};
        line-height: ${({ theme }) => theme.pixelToVieWidth1920(34)};
      }
    }
  }
`;

export default Hero;
