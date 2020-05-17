import styled from '@emotion/styled';
import Slider from 'react-slick';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import Container from '../../Layouts/Container/Container';

const OurWorks = ({ ourWorks }) => {
  return (
    <OurWorksStyled>
      <Container>
        <SectionTitle text='our works' />
      </Container>

      <Slider
        className='slider'
        dots={false}
        arrows={false}
        infinite={false}
        slidesToScroll={1}
        slidesToShow={1}
        variableWidth={true}
        infinite={true}
      >
        {ourWorks.map((img) => (
          <div key={img.id}>
            <img src={img.url} alt='' />
          </div>
        ))}
      </Slider>
    </OurWorksStyled>
  );
};

const OurWorksStyled = styled.div`
  img {
    width: ${(props) => props.theme.pixelToVieWidth(250)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(30)};
  }

  .slick-slide {
    margin-left: ${(props) => props.theme.pixelToVieWidth(30)};
  }
`;

export default OurWorks;
