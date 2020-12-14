import styled from '@emotion/styled';
import { useBreakpoint } from '../../utils/breakpoint';
import Image from 'next/image';
import imageSizeHelper from '../../utils/imageSizeHelper';
// Components
import Slider from 'react-slick';
import SectionTitle from '@/UI/SectionTitle';
import Container from '@/Layouts/Container/Container';
import SlickArrow from '../SlickArrow';
import Anchor from '@/UI/Anchor';

const OurWorks = ({ ourWorks, headerHeight }) => {
  const breakpoint = useBreakpoint();

  const sliderSetting = breakpoint.mobile
    ? {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: false,
        centerPadding: 100,
      }
    : {
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        focusOnSelect: true,
        centerMode: true,
        nextArrow: <SlickArrow next />,
        prevArrow: <SlickArrow />,
      };

  return (
    <OurWorksStyled>
      <Anchor id="works" headerHeight={headerHeight} />
      <Container>
        <SectionTitle text="Nasze pracy" />
      </Container>

      <Slider {...sliderSetting}>
        {ourWorks.list.map((img) => (
          <div key={img.id} className="imgWrap">
            <Image
              src={
                breakpoint.mobile ? imageSizeHelper(img, 500, 500) : imageSizeHelper(img, 900, 900)
              }
              alt="tattoo photo"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="eager"
            />
          </div>
        ))}
      </Slider>
    </OurWorksStyled>
  );
};

const OurWorksStyled = styled.div`
  .slick-slide {
    margin-left: ${({ theme }) => theme.vw(30)};
    position: relative;

    > div {
      position: relative;
      ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        transition: all 1s ease;
        z-index: 2;
      }
    }
  }

  .slick-slide.slick-active > div {
    ::before {
      background-color: rgba(0, 0, 0, 0);
      transition: all 1s ease;
    }
  }

  .imgWrap {
    width: ${({ theme }) => theme.vw(250)} !important;
    height: ${({ theme }) => theme.vw(250)} !important;
    margin-bottom: ${({ theme }) => theme.vw(30)};
    display: block !important;
  }

  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: ${({ theme }) => theme.vw1920(100)};

    .slick-slider {
      background: ${({ theme }) => theme.colors.black};
      padding: ${({ theme }) => theme.vw1920(5)} 0;
    }
    .slick-slide {
      margin-left: revert;
      margin-right: revert;
      border: ${({ theme }) => theme.vw1920(15)} solid black;
    }

    .imgWrap {
      margin: 0;
      width: ${({ theme }) => theme.vw1920(900)} !important;
      height: ${({ theme }) => theme.vw1920(900)} !important;
    }

    .slick-arrow {
      width: revert;
      height: revert;
      z-index: 3;
    }

    .slick-next {
      right: ${({ theme }) => theme.vw1920(200)};
      ::before {
        content: '';
      }
    }

    .slick-prev {
      left: ${({ theme }) => theme.vw1920(200)};
      ::before {
        content: '';
      }
    }
  }
`;

export default OurWorks;
