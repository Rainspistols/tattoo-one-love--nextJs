import styled from '@emotion/styled';
import Slider from 'react-slick';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import BlogPostPreview from '../BlogPostPreview/BlogPostPreview';
import Line from '../../UI/Line';
import Container from '../../Layouts/Container/Container';
import ShowMore from '../../UI/ShowMore';
import BlogDesktop from './BlogDesktop';

const BlogCarousel = ({ postsData, API_URL }) => {

  return (
    <BlogCarouselStyled>
      <Container>
        <SectionTitle text='blog' />
      </Container>

      <Slider
        slidesToScroll={1}
        slidesToShow={1}
        dots={false}
        arrows={false}
        variableWidth={true}
        infinite={true}
      >
        {postsData.map((post) => (
          <BlogPostPreview key={post.id} post={post} API_URL={API_URL} />
        ))}
      </Slider>

      <BlogDesktop postsData={postsData} API_URL={API_URL } />
      <Container>
        <Line />
        <ShowMore />
      </Container>
    </BlogCarouselStyled>
  );
};

const BlogCarouselStyled = styled.section`
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(30)};

  .imgWrap {
    width: ${(props) => props.theme.pixelToVieWidth(300)};
    height: ${(props) => props.theme.pixelToVieWidth(210)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
  }

  .slick-slide {
    margin-left: ${(props) => props.theme.pixelToVieWidth(30)};
  }

  ${(props) => props.theme.mediaDesktop} {
    .slick-slider,
    .Line {
      display: none;
    }
  }
`;

export default BlogCarousel;
