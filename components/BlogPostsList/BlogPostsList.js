import styled from '@emotion/styled';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import Container from '../../Layouts/Container/Container';
import Line from '../../UI/Line';
import PostsFilters from './PostsList';
import { useState, useEffect } from 'react';
import ShowMorePosts from '../../UI/ShowMorePosts';
import CategoriesButtonsList from './CategoriesButtonsList';
import useWindowDimensions from '../../hooks/useWindowDimension';

const BlogPostsList = ({
  postsData,
  API_URL,
  inputSearchValue,
  category,
  allCategories,
}) => {
  const [postsAmount, setPostsAmount] = useState(10);
  const [posts, setPosts] = useState(null);
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);

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
          {stateWidth < 1280 && category && <h2>{category}</h2>}
          <CategoriesButtonsList allCategories={allCategories} />
          <PostsFilters onLastFilter={onLastFilter} />
        </div>

        {posts && (
          <ul className='blogAllPostsList'>
            {posts.map((post, index) => {
              if (index < postsAmount) {
                return (
                  <React.Fragment key={index}>
                    <BlogPostCard post={post} API_URL={API_URL} />
                    <Line />
                  </React.Fragment>
                );
              }
            })}
          </ul>
        )}

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

  ${(props) => props.theme.mediaDesktop} {
    .blogAllPostsList {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(40)};

        :not(:nth-of-type(3n+1)) {
          margin-right: 2.75%;
        }
        :first-of-type {
          width: 100%;
          display: flex;

          .imgLink {
            order: 2;
            width: 80%;
            height: ${(props) => props.theme.pixelToVieWidth1920(500)};
          }
          .categories {
            .CategoryBtn {
              margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(25)};
              a {
                margin: 0;
              }
            }
          }

          .imgLink ~ .Container {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .imgWrap {
            margin: 0;
            height: 100%;
          }

          h3 {
            order: 1;
          }
        }
      }
    }
    .showMoreBtn__wrap {
      margin-bottom: 43px;
    }
  }
`;

export default BlogPostsList;
