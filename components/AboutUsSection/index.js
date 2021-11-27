import styled from '@emotion/styled';
import Image from 'next/image';
import Slider from 'react-slick';
import SectionTitle from '~/UI/SectionTitle';
import Container from '~/Layouts/Container/Container';
import Anchor from '~/UI/Anchor';
import SlickArrow from '../SlickArrow';
import { useBreakpoint } from '../../utils/breakpoint';
import { useEffect, useState } from 'react';
import CloseIcon from './close.svg';

const AboutUsSection = () => {
  const breakpoint = useBreakpoint();
  const [isActive, setActive] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const data = [
    { srcDesktop: '/AboutUsSection/tattoo-studio-1.jpeg' },
    { srcDesktop: '/AboutUsSection/tattoo-studio-2.jpeg' },
    { srcDesktop: '/AboutUsSection/tattoo-studio-3.jpeg' },
  ];

  const defaultSlider = breakpoint.mobile
    ? {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        pauseOnFocus: true,
      }
    : {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        pauseOnFocus: true,
        beforeChange: (current, next) => setSlideIndex(next),
      };

  const fixedSlider = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    initialSlide: slideIndex,
    nextArrow: <SlickArrow next />,
    prevArrow: <SlickArrow />,
  };

  const onImageClick = (e) => {
    setActive(true);
  };

  const addEventListenerForEsc = (e) => {
    if (e.key === 'Escape') {
      setActive(false);
    }
  };

  const onOverlayClick = (e) => {
    if (e.target.classList.contains('fixed-slider')) {
      setActive(false);
    }
  };

  // Control slider events
  useEffect(() => {
    if (breakpoint.desktop) {
      if (isActive) {
        document.body.addEventListener('keydown', addEventListenerForEsc);
        document.body.style.overflow = 'hidden';
        document.body.addEventListener('click', onOverlayClick);
      } else {
        document.body.style.overflow = 'visible';
        document.body.removeEventListener('click', onOverlayClick);
      }
    }

    return () => {
      document.body.removeEventListener('keydown', addEventListenerForEsc);
      document.body.removeEventListener('click', onOverlayClick);
    };
  }, [isActive]);

  return (
    <AboutUsSectionStyled>
      <Anchor id="about-us" />

      <Container>
        <SectionTitle text="O nas" />
        <h3 className="title">Wyjątkowe studio tatuażu na Woli</h3>

        {/* Default Slider */}
        <Slider {...defaultSlider} className="default-slider">
          {data.map((item, index) => (
            <div className="image-wrapper" key={index} onClick={onImageClick}>
              <Image
                src={item.srcDesktop}
                alt="tattoo one love studio tattoo example"
                layout="fill"
                objectFit="contain"
                quality={100}
                loading="eager"
              />
            </div>
          ))}
        </Slider>

        {/* Desktop slider. Active after click on default slider */}
        {breakpoint.desktop && isActive && (
          <>
            <Slider {...fixedSlider} className="fixed-slider">
              {data.map((item, index) => (
                <div className="image-wrapper" key={index}>
                  <Image
                    src={item.srcDesktop}
                    alt="tattoo one love studio tattoo example"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                  />
                </div>
              ))}
            </Slider>
            <CloseBtn onClick={() => setActive(false)}>
              <CloseIcon width="20" height="20" />
            </CloseBtn>
          </>
        )}
        <p className="text">
          Mocno wierzymy, że tatuaż jest jedną z najlepszych rzeczy, jaka kiedykolwiek nas spotkała. Dlatego, kiedy
          wybierasz nasze studio tatuażu, jesteśmy z tobą od etapu pomysłu do momentu pełnego wygojenia tatuażu. W
          Tattoo One Love przechodzimy przez cały proces razem, żeby stworzyć idealne warunki dla tatuażu twoich marzeń.
          Dlatego też korzystamy z <strong>najlepszego hipoalergicznego tuszu na rynku</strong> (World Famous, Eternal
          Ink) i <strong>igieł najwyższej jakości</strong> (Cheyenne, Kwadron). Co więcej,{' '}
          <strong>indywidualnie dobieramy sposób gojenia tatuażu pod każdego klienta</strong> (zależnie od typu skóry,
          warunków w pracy i w domu). Wysokie standardy higieny i sterylności są zawsze na pierwszym miejscu. Przyjdź do
          naszego studia i się o tym przekonaj.
        </p>
      </Container>
    </AboutUsSectionStyled>
  );
};

const AboutUsSectionStyled = styled.section`
  padding: ${({ theme }) => theme.vw(50)} 0;

  .title {
    font-weight: 700;
    font-size: ${({ theme }) => theme.vw(20)};
    line-height: ${({ theme }) => theme.vw(20)};
    padding-right: 40%;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.vw(25)};
    height: ${({ theme }) => theme.vw(225)};
  }

  .text {
    font-size: ${({ theme }) => theme.vw(13)};
    line-height: ${({ theme }) => theme.vw(20)};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: justify;
  }

  .default-slider {
    .slick-dots {
      bottom: ${({ theme }) => theme.vw(5)};

      li {
        margin: 0 ${({ theme }) => theme.vw(5)};

        button::before {
          font-size: ${({ theme }) => theme.vw(6)};
          color: ${({ theme }) => theme.colors.pink};

          :hover::before {
            color: ${({ theme }) => theme.colors.pink};
          }
        }
      }
    }
  }

  /* Media */
  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(26)};
    line-height: ${({ theme }) => theme.vw1920(30)};
    padding: 0 ${({ theme }) => theme.vw1920(100)};
    margin-bottom: ${({ theme }) => theme.vw1920(100)};

    > .Container {
      padding-right: ${({ theme }) => theme.vw1920(650)};
      box-sizing: border-box;
      position: relative;
    }

    .title {
      font-size: ${({ theme }) => theme.vw1920(34)};
      line-height: ${({ theme }) => theme.vw1920(40)};
      margin-bottom: ${({ theme }) => theme.vw1920(20)};
      padding-right: 0;
    }

    .default-slider {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      margin: 0;
      cursor: zoom-in;

      .slick-list,
      .slick-track,
      .slick-slide > div {
        height: 100%;
      }

      .slick-dots {
        bottom: ${({ theme }) => theme.vw1920(-40)};

        li {
          margin: 0 ${({ theme }) => theme.vw1920(5)};

          button {
            ::before {
              font-size: ${({ theme }) => theme.vw1920(10)};
            }
          }
        }
      }
    }

    .text {
      font-size: ${({ theme }) => theme.vw1920(17)};
      line-height: ${({ theme }) => theme.vw1920(28)};
      order: 1;
      padding-right: ${({ theme }) => theme.vw1920(50)};
      box-sizing: border-box;
    }

    .image-wrapper {
      margin-bottom: 0;
      max-height: 100%;
    }

    .slick-slider.fixed-slider {
      position: fixed;
      width: 75%;
      height: 95%;
      right: 12.5%;
      top: 2.5%;
      z-index: 100;
      .slick-list {
        top: 50%;
        transform: translateY(-50%);
      }

      /* overlay */
      :before {
        position: fixed;
        content: '';
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.95);
      }

      .slick-arrow {
        width: revert;
        height: revert;
        z-index: 3;
      }

      .slick-next {
        right: ${({ theme }) => theme.vw1920(-100)};
        ::before {
          content: '';
        }
      }

      .slick-prev {
        left: ${({ theme }) => theme.vw1920(-100)};
        ::before {
          content: '';
        }
      }
    }
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  width: ${({ theme }) => theme.vw1920(70)};
  height: ${({ theme }) => theme.vw1920(70)};
  background: transparent;
  z-index: 101;
  right: 2vw;
  top: 2vh;
  box-sizing: border-box;
  /* transform: translate(0, -50%); */
  border: none;
  display: block;
  border-radius: 50%;
  padding: ${({ theme }) => theme.vw1920(15)};
  transition: all 0.3s ease-in-out;
  border: ${({ theme }) => theme.vw1920(5)} solid transparent;

  svg {
    width: 100%;
    height: 100%;
    path {
      fill: rgba(255, 255, 255, 0.4);
    }
  }

  :hover,
  :focus {
    border: ${({ theme }) => theme.vw1920(5)} solid rgba(255, 255, 255, 0.4);
  }
`;

export default AboutUsSection;
