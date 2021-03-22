import styled from '@emotion/styled';
import Container from '@/Layouts/Container/Container';
import Image from 'next/image';
import { useBreakpoint } from '../../../utils/breakpoint';

const Hero = ({ children, bgImageData, title, subtitle }) => {
  const breakpoint = useBreakpoint();

  return (
    <StyledHero>
      <ImageWrap>
        <Image
          src={breakpoint.mobile ? bgImageData.src.mobile : bgImageData.src.desktop}
          alt={bgImageData.alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          objectPosition={bgImageData.objectPosition}
        />
      </ImageWrap>

      <SloganContainer>
        <Container>
          {children}
          <p className="text1">{title}</p>
          <h2 className="text2">{subtitle}</h2>
        </Container>
      </SloganContainer>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: 500;
  position: relative;
  height: ${({ theme }) => theme.vw(433)};

  .logo {
    margin-bottom: ${({ theme }) => theme.vw(25)};
    width: ${({ theme }) => theme.vw(100)};
    height: ${({ theme }) => theme.vw(100)};
    margin-left: auto;
    margin-right: auto;
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

  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: ${({ theme }) => theme.vw1920(134)};
    /* padding: ${({ theme }) => theme.vw1920(150)} 0 ${({ theme }) => theme.vw1920(150)}; */

    height: ${({ theme }) => theme.vw1920(760)};

    .logo {
      width: ${({ theme }) => theme.vw1920(350)};
      height: ${({ theme }) => theme.vw1920(350)};
      margin-bottom: ${({ theme }) => theme.vw1920(50)};
    }

    /* .Container {
      padding: 0;
    } */

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
`;

const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const SloganContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hero;
