import styled from '@emotion/styled';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';
import CategoryAndDateRow from './CategoryAndDateRow';
import Container from '../../Layouts/Container/Container';
import Header from './Header';
import Content from './Content';
import RecommendedPosts from '../RecommendedPosts/RecommendedPosts';
import ShareBtn from '../ShareBtn/ShareBtn';

const Post = ({ postBySlug, relevantPostsData, allCategories, API_URL }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  return (
    <PostStyled>
      <Header postBySlug={postBySlug} />

      <Container>
        <div className='ShareBtnAndContent__wrap'>
          <ShareBtn />
          <Content postBySlug={postBySlug} />
        </div>

        <RecommendedPosts posts={relevantPostsData} API_URL={API_URL} />
      </Container>
    </PostStyled>
  );
};

const PostStyled = styled.div`
  ${({ theme }) => theme.mediaDesktop} {
    padding-bottom: ${({ theme }) => theme.pixelToVieWidth1920(40)};
    .ShareBtnAndContent__wrap {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Post;
