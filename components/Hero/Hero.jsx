import styled from '@emotion/styled';
import Image from 'next/image';
import Container from '~/Layouts/Container/Container';
import { useBreakpoint } from '~/utils/breakpoint';

const Hero = ({ type, text1, text2 }) => {
  const breakpoint = useBreakpoint();

  return (
    <StyledHero type={type}>
      <ImageWrap>
        <Image
          src={breakpoint.mobile ? '/Hero/bg--tablet.jpg' : '/Hero/bg--desktop.jpg'}
          alt="background image"
          layout="fill"
          objectFit="cover"
          priority="true"
          objectPosition="center 60%"
        />
      </ImageWrap>

      <SloganContainer>
        <Container>
          {type === 'main' && (
            <img
              className="logo"
              src="/Hero/logo.svg"
              alt="tattooonelove logo"
              width="200px"
              height="200px"
            />
          )}
          <p className="text1">{text1}</p>
          <h2 className="text2">{text2}</h2>
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
    margin-bottom: ${(props) =>
      props.type === 'main' ? props.theme.vw1920(134) : props.theme.vw1920(50)};

    height: ${({ theme }) => theme.vw1920(760)};

    .logo {
      width: ${({ theme }) => theme.vw1920(350)};
      height: ${({ theme }) => theme.vw1920(350)};
      margin-bottom: ${({ theme }) => theme.vw1920(50)};
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
`;

const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
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
