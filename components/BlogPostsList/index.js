import styled from '@emotion/styled';
import BlogPostCard from '../BlogPostCard';
import Container from '../../Layouts/Container/Container';
import Line from '../../UI/Line';
import PostsFilters from '../PostsFilters/PostsFilters';
import { useState, useEffect } from 'react';
import ShowMorePosts from '../../UI/ShowMorePosts';

const BlogPostsList = ({ postsData, API_URL, inputSearchValue, category }) => {
  const [postsAmount, setPostsAmount] = useState(10);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const dataWithSearchValue = () =>
      inputSearchValue &&
      postsData.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearchValue.toLowerCase()) != -1
      );

    const data = inputSearchValue ? dataWithSearchValue() : postsData;

    setPosts(
      data &&
        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    );
  }, [inputSearchValue, postsData]);

  const onLastFilter = () => {
    setPosts(
      data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    );
  };

  return (
    <BlogPostsListStyled>
      <Container>
        <div className='categoryAndFilters__wrap'>
          <h2>{category}</h2>
          <PostsFilters onLastFilter={onLastFilter} />
        </div>

        {posts &&
          posts.map((post, index) => {
            if (index < postsAmount) {
              return (
                <React.Fragment key={index}>
                  <BlogPostCard post={post} API_URL={API_URL} />
                  <Line />
                </React.Fragment>
              );
            }
          })}

        <div className='showMoreBtn__wrap'>
          <ShowMorePosts onClick={() => setPostsAmount(postsAmount + 10)} />
        </div>
      </Container>
    </BlogPostsListStyled>
  );
};

const BlogPostsListStyled = styled.section`
  .categoryAndFilters__wrap {
    font-weight: 600;
    ${(props) => props.theme.flexBetween};
    font-size: ${(props) => props.theme.pixelToVieWidth(8)};
    line-height: ${(props) => props.theme.pixelToVieWidth(12)};
    color: ${(props) => props.theme.colors.grey3};
  }

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
