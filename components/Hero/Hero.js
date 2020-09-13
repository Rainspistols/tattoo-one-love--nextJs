import styled from '@emotion/styled';
import Container from '@/Layouts/Container/Container';
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
    margin-bottom: ${({ theme }) => theme.vw(25)};
    width: ${({ theme }) => theme.vw(100)};
    height: ${({ theme }) => theme.vw(100)};
    margin-left: auto;
    margin-right: auto;
  }

  .Container {
    padding-bottom: ${({ theme }) => theme.vw(57)};
    padding-top: ${({ theme }) => theme.vw(35)};
  }

  .text1 {
    font-size: ${({ theme }) => theme.vw(38)};
    line-height: ${({ theme }) => theme.vw(50)};
    margin-bottom: ${({ theme }) => theme.vw(20)};

    text-transform: uppercase;
    padding-left: ${({ theme }) => theme.vw(10)};
    padding-right: ${({ theme }) => theme.vw(10)};
  }

  .text2 {
    font-size: ${({ theme }) => theme.vw(18)};
    line-height: ${({ theme }) => theme.vw(20)};
    text-transform: uppercase;
    padding-left: ${({ theme }) => theme.vw(50)};
    padding-right: ${({ theme }) => theme.vw(50)};
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    background-image: url(${bgTablet});
    margin-bottom: ${({ theme }) => theme.vw1920(134)};

    ${({ theme }) => theme.mediaDesktop} {
      background-image: url(${bgDesktop});
      padding: ${({ theme }) => theme.vw1920(150)} 0
        ${({ theme }) => theme.vw1920(150)};

      .logo {
        width: ${({ theme }) => theme.vw1920(350)};
        height: ${({ theme }) => theme.vw1920(350)};
        margin-bottom: ${({ theme }) => theme.vw1920(50)};
      }

      .Container {
        padding: 0;
      }

      .text1 {
        font-size: ${({ theme }) => theme.vw1920(40)};
        line-height: ${({ theme }) => theme.vw1920(50)};
        margin-bottom: ${({ theme }) => theme.vw1920(20)};
      }

      .text2 {
        font-size: ${({ theme }) => theme.vw1920(24)};
        line-height: ${({ theme }) => theme.vw1920(34)};
      }
    }
  }
`;

export default Hero;
