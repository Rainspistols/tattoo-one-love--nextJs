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
        infinite={true}
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
`;

export default OurWorks;
