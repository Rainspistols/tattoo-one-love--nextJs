import styled from '@emotion/styled';
// Components
import Slider from 'react-slick';
import SectionTitle from '@/UI/SectionTitle';
import Container from '@/Layouts/Container/Container';
import { useState, useEffect } from 'react';
import imageSizeHelper from '../../utils/imageSizeHelper';

const OurWorks = ({ ourWorks }) => {
  const [stateWidth, setStateWidth] = useState();

  if (process.browser) {
    useEffect(() => {
      setStateWidth(window.innerWidth);
    }, [window.innerWidth]);
  }

  const sliderSetting =
    stateWidth < 1280
      ? {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          variableWidth: true,
          infinite: true,
          centerMode: false,
          centerPadding: 100,
        }
      : {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          variableWidth: true,
          centerPadding: 50,
          infinite: true,
          centerMode: true,
        };

  return (
    <OurWorksStyled id='works'>
      <Container>
        <SectionTitle text='Nasze pracy' />
      </Container>

      <Slider {...sliderSetting}>
        {ourWorks.map((img) => (
          <div key={img.id} className='imgWrap'>
            <picture>
              <source
                media='(min-width: 768px) and (max-width: 1920px)'
                srcSet={imageSizeHelper(img, 900, 900)}
              />
              <source
                media='(max-width: 767px)'
                srcSet={imageSizeHelper(img, 600, 600)}
              />
              <img src={img.url} alt={img.name} />
            </picture>
          </div>
        ))}
      </Slider>
    </OurWorksStyled>
  );
};

const OurWorksStyled = styled.div`
  .slick-slide {
    margin-left: ${({ theme }) => theme.pixelToVieWidth(30)};
  }

  .imgWrap {
    width: ${({ theme }) => theme.pixelToVieWidth(250)};
    height: ${({ theme }) => theme.pixelToVieWidth(250)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(30)};
    display: block !important;
    img {
      object-fit: cover;
      width: ${({ theme }) => theme.pixelToVieWidth(250)};
      height: ${({ theme }) => theme.pixelToVieWidth(250)};
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(100)};

    .slick-slider {
      background: ${({ theme }) => theme.colors.black};
      padding: ${({ theme }) => theme.pixelToVieWidth1920(25)} 0;
    }
    .slick-slide {
      margin-left: 0;
    }

    .imgWrap {
      margin: 0;
      height: auto;

      img {
        width: ${({ theme }) => theme.pixelToVieWidth1920(900)};
        height: ${({ theme }) => theme.pixelToVieWidth1920(900)};
        border-left: ${({ theme }) => theme.pixelToVieWidth1920(36)} solid
          ${({ theme }) => theme.colors.black};
        border-right: ${({ theme }) => theme.pixelToVieWidth1920(36)} solid
          ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

export default OurWorks;
