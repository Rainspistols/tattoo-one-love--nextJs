import styled from '@emotion/styled';
import BlogPostPreview from '../BlogPostPreview/BlogPostPreview';
import Container from '../../Layouts/Container/Container';
import Line from '../../UI/Line';
import PostsFilters from '../PostsFilters/PostsFilters';
import { useState, useEffect } from 'react';
import ShowMorePosts from '../../UI/ShowMorePosts';

const BlogPostsList = ({ postsData, API_URL, inputSearchValue }) => {
  const [postsAmount, setPostsAmount] = useState(10);
  const [posts, setPosts] = useState(
    [...postsData].sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    )
  );

  useEffect(() => {
    const dataWithSearchValue = () =>
      inputSearchValue &&
      postsData.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearchValue.toLowerCase()) != -1
      );
    const data = inputSearchValue ? dataWithSearchValue() : postsData;

    setPosts(
      [...data].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    );
  }, [inputSearchValue]);

  const onLastFilter = () => {
    setPosts(
      [...postsData].sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      )
    );
  };

  const onShowMore = () => {
    setPostsAmount(postsAmount + 10);
  };

  return (
    <BlogPostsListStyled>
      <Container>
        <PostsFilters onLastFilter={onLastFilter} />
        {posts &&
          posts.map((post, index) => {
            if (index < postsAmount) {
              return (
                <React.Fragment key={index}>
                  <BlogPostPreview post={post} API_URL={API_URL} />
                  <Line />
                </React.Fragment>
              );
            }
          })}
        <div className='showMoreBtn__wrap' onClick={() => onShowMore()}>
          <ShowMorePosts onClick={onShowMore} />
        </div>
      </Container>
    </BlogPostsListStyled>
  );
};

const BlogPostsListStyled = styled.section`
  .BlogPostPreview {
    .imgWrap {
      height: ${(props) => props.theme.pixelToVieWidth(210)};
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    }

    .Container {
      padding: 0;
    }
  }

  .Line {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
  }

  .showMoreBtn__wrap {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(30)};
  }
`;

export default BlogPostsList;
