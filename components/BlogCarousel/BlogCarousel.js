import styled from '@emotion/styled';
import Slider from 'react-slick';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import BlogPostPreview from '../BlogPostPreview/BlogPostPreview';
import Line from '../../UI/Line';
import Container from '../../Layouts/Container/Container';
import ShowMore from '../../UI/ShowMore';

const BlogCarousel = ({ postsData }) => {
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
        {postsData.map((post, index) => {
          if (index < 5) {
            return <BlogPostPreview key={post.postId} post={post} />;
          }
        })}
      </Slider>

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
`;

export default BlogCarousel;
