import styled from '@emotion/styled';
import Slider from 'react-slick';
import BlogPostCard from '../BlogPostCard';
import Line from '../../../UI/Line';
import Container from '../../../Layouts/Container/Container';
import { useState, useEffect } from 'react';

const Mobile = ({ fiveLastPosts, API_URL }) => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    setPosts(fiveLastPosts);
  }, [fiveLastPosts]);

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
        {posts &&
          posts.map((post) => (
            <BlogPostCard
              imgHeight={210}
              imgWidth={300}
              key={post.id}
              post={post}
              API_URL={API_URL}
            />
          ))}
      </Slider>

      <Container>
        <Line />
      </Container>
    </MobileStyled>
  );
};

const MobileStyled = styled.section`
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(30)};

  .slick-slide {
    margin-left: ${(props) => props.theme.pixelToVieWidth(30)};
  }
`;

export default Mobile;
