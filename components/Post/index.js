import styled from '@emotion/styled';
import CategoryAndDateRow from './CategoryAndDateRow';
import Container from '../../Layouts/Container/Container';
import Header from './Header';
import Content from './Content';
import RecommendedPosts from '../RecommendedPosts/RecommendedPosts';
import ShareBtn from '../../UI/ShareBtn/ShareBtn';
import CategoriesAndFilters from '../CategoriesAndFilters';

const Post = ({ postBySlug, relevantPostsData, allCategories, API_URL }) => {
  return (
    <PostStyled>
      <CategoriesAndFilters allCategories={allCategories} />
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
