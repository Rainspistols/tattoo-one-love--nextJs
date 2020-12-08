import styled from '@emotion/styled';
import { useBreakpoint } from '../../utils/breakpoint';
// Components
import Slider from 'react-slick';
import SectionTitle from '@/UI/SectionTitle';
import Container from '@/Layouts/Container/Container';
import imageSizeHelper from '../../utils/imageSizeHelper';
import SlickArrow from '../SlickArrow';
import Anchor from '@/UI/Anchor';

const OurWorks = ({ ourWorks, API_URL, headerHeight }) => {
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
        centerPadding: 50,
        centerMode: true,
        focusOnSelect: true,
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
            <picture>
              <source
                media="(min-width: 768px) and (max-width: 1920px)"
                srcSet={imageSizeHelper(img, 900, 900)}
              />
              <source media="(max-width: 767px)" srcSet={imageSizeHelper(img, 600, 600)} />
              <img src={API_URL + img.url} alt={img.name} />
            </picture>
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
    width: ${({ theme }) => theme.vw(250)};
    height: ${({ theme }) => theme.vw(250)};
    margin-bottom: ${({ theme }) => theme.vw(30)};
    display: block !important;
    img {
      object-fit: cover;
      width: ${({ theme }) => theme.vw(250)};
      height: ${({ theme }) => theme.vw(250)};
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: ${({ theme }) => theme.vw1920(100)};

    .slick-slider {
      background: ${({ theme }) => theme.colors.black};
      padding: ${({ theme }) => theme.vw1920(25)} 0;
    }
    .slick-slide {
      margin-left: 0;
    }

    .imgWrap {
      margin: 0;
      height: auto;

      img {
        width: ${({ theme }) => theme.vw1920(900)};
        height: ${({ theme }) => theme.vw1920(900)};
        border-left: ${({ theme }) => theme.vw1920(36)} solid ${({ theme }) => theme.colors.black};
        border-right: ${({ theme }) => theme.vw1920(36)} solid ${({ theme }) => theme.colors.black};
      }
    }

    .slick-arrow {
      width: revert;
      height: revert;
      z-index: 3;
    }

    .slick-next {
      right: ${({ theme }) => theme.vw1920(40)};
      ::before {
        content: '';
      }
    }

    .slick-prev {
      left: ${({ theme }) => theme.vw1920(40)};
      ::before {
        content: '';
      }
    }
  }
`;

export default OurWorks;
