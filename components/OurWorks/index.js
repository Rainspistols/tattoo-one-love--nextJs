import styled from '@emotion/styled';
import Slider from 'react-slick';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import Container from '../../Layouts/Container/Container';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const OurWorks = ({ ourWorks }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState();

  useEffect(() => {
    setStateWidth(width);
  }, []);

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
        <SectionTitle text='our works' />
      </Container>

      <Slider {...sliderSetting}>
        {ourWorks.map((img) => (
          <div key={img.id} className='imgWrap'>
            <img src={img.url} alt='' />
          </div>
        ))}
      </Slider>
    </OurWorksStyled>
  );
};

const OurWorksStyled = styled.div`
  .slick-slide {
    margin-left: ${(props) => props.theme.pixelToVieWidth(30)};
  }

  .imgWrap {
    width: ${(props) => props.theme.pixelToVieWidth(250)};
    height: ${(props) => props.theme.pixelToVieWidth(250)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(30)};
    display: block !important;
    img {
      object-fit: cover;
      width: ${(props) => props.theme.pixelToVieWidth(250)};
      height: ${(props) => props.theme.pixelToVieWidth(250)};
    }
  }

  ${(props) => props.theme.mediaDesktop} {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(100)};

    .slick-slider {
      background: ${(props) => props.theme.colors.black};
      padding: ${(props) => props.theme.pixelToVieWidth1920(25)} 0;
    }
    .slick-slide {
      margin-left: 0;
    }

    .imgWrap {
      margin: 0;
      height: auto;

      img {
        width: ${(props) => props.theme.pixelToVieWidth1920(900)};
        height: ${(props) => props.theme.pixelToVieWidth1920(900)};
        border-left: ${(props) => props.theme.pixelToVieWidth1920(36)} solid
          ${(props) => props.theme.colors.black};
        border-right: ${(props) => props.theme.pixelToVieWidth1920(36)} solid
          ${(props) => props.theme.colors.black};
      }
    }
  }
`;

export default OurWorks;
