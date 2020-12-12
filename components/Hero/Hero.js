import styled from '@emotion/styled';
import Container from '@/Layouts/Container/Container';
import Image from 'next/image';
import { useBreakpoint } from '../../utils/breakpoint';

const Hero = () => {
  const breakpoint = useBreakpoint();

  return (
    <StyledHero>
      <Image
        src={breakpoint.mobile ? '/Hero/bg--mobile.jpg' : '/Hero/bg--desktop.jpg'}
        alt="tattoo one love bg image"
        layout="fill"
        objectFit="cover"
        className="bgImage"
        quality={100}
      />
      <Container>
        <img
          className="logo"
          src="/Hero/logo.svg"
          alt="one love tattoo logo"
          width="200px"
          height="200px"
        />
        <p className="text1">Bodies are not born. Bodies are made.</p>
        <h2 className="text2">Studio tatuażu, w którym znajdziesz sposób na wyrażenia siebie.</h2>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: 500;
  position: relative;

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
    z-index: 1;
    position: relative;
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
  .bgImage {
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: ${({ theme }) => theme.vw1920(134)};

    ${({ theme }) => theme.mediaDesktop} {
      padding: ${({ theme }) => theme.vw1920(150)} 0 ${({ theme }) => theme.vw1920(150)};

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
