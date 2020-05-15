import Slider from 'react-slick';
import styled from '@emotion/styled';

const OurWorks = ({ ourWorks }) => {
  return (
    <OurWorksStyled>
      <Slider
        className='slider'
        dots={false}
        arrows={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={true}
        centerPadding={30}
      >
        {ourWorks.map((img) => (
          <div key={img.id}>
            <img src={img.url} alt=''/>
          </div>
        ))}
      </Slider>
    </OurWorksStyled>
  );
};

const OurWorksStyled = styled.div`
  img {
    width: 80%;
  }
`;

export default OurWorks;
