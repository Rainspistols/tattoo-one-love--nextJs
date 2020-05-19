import styled from '@emotion/styled';
import BlogPostPreview from '../BlogPostPreview/BlogPostPreview';
import Container from '../../Layouts/Container/Container';
import Line from '../../UI/Line';

const BlogPostsList = ({ postsData }) => {
  return (
    <BlogPostsListStyled>
      <Container>
        {postsData.map((post, index) => {
          return (
            <React.Fragment key={index}>
              <BlogPostPreview post={post} />
              <Line />
            </React.Fragment>
          );
        })}
      </Container>
    </BlogPostsListStyled>
  );
};

const BlogPostsListStyled = styled.section`
  padding-top: 20px;

  .BlogPostPreview {
    .imgWrap {
      height: 210px;
      margin-bottom: 10px;
    }

    .Container {
      padding: 0;
    }
  }

  .Line {
    margin-bottom: 20px;
  }
`;

export default BlogPostsList;
