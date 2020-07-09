import styled from '@emotion/styled';
import Slider from 'react-slick';
import BlogPostCard from '../BlogPostCard';
import Line from '../../../UI/Line';
import Container from '../../../Layouts/Container/Container';

const Mobile = ({ fiveLastPosts, API_URL }) => {
  return (
    <MobileStyled>
      <Slider
        slidesToScroll={1}
        slidesToShow={1}
        dots={false}
        arrows={false}
        variableWidth={true}
        infinite={true}
      >
        {fiveLastPosts?.map((post) => (
          <BlogPostCard key={post.id} post={post} API_URL={API_URL} />
        ))}
      </Slider>

      <Container>
        <Line />
      </Container>
    </MobileStyled>
  );
};

const MobileStyled = styled.section`
  margin-bottom: ${({ theme }) => theme.pixelToVieWidth(30)};

  .slick-slide {
    margin-left: ${({ theme }) => theme.pixelToVieWidth(30)};
  }
`;

export default Mobile;
