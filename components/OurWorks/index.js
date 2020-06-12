import styled from '@emotion/styled';
import Slider from 'react-slick';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import Container from '../../Layouts/Container/Container';

const OurWorks = ({ ourWorks }) => {
  return (
    <OurWorksStyled id='works'>
      <Container>
        <SectionTitle text='our works' />
      </Container>

      <Slider
        dots={false}
        arrows={false}
        infinite={false}
        slidesToScroll={1}
        slidesToShow={1}
        variableWidth={true}
        centerPadding={50}
        infinite={true}
        centerMode={true}
        responsive={[
          {
            breakpoint: 1280,
            settings: {
              centerMode: false,
              centerPadding: 100,
            },
          },
        ]}
      >
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
    margin-bottom: 100px;

    .slick-slider {
      background: ${(props) => props.theme.colors.black};
      padding: 25px 0;
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
