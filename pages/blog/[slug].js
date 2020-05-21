import styled from '@emotion/styled';
import Main from '../../Layouts/Main/Main';

const BlogPost = () => {
  return (
    <Main
      headTitle='Tattoo one love blog'
      importantMessageData={importantMessageData}
      categories={categories}
    ></Main>
  );
};

const BlogPostStyled = styled.section``;

export default BlogPost;
