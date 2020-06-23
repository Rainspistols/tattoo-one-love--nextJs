import styled from '@emotion/styled';
import BlogPostCard from '../BlogPostCard';
import Container from '../../../Layouts/Container/Container';
import Line from '../../../UI/Line';
import { useState, useEffect } from 'react';
import ShowMorePosts from '../../../UI/ShowMorePosts';
import useWindowDimensions from '../../../hooks/useWindowDimension';
import CategoriesAndFilters from '../../CategoriesAndFilters';

const BlogPostsList = ({
  postsData,
  API_URL,
  inputSearchValue,
  activeCategory,
  allCategories,
}) => {
  const [postsAmount, setPostsAmount] = useState(10);
  const [posts, setPosts] = useState(null);
  const { width } = useWindowDimensions();
  const [isShowMoreVisible, setShowMoreVisible] = useState(false);

  useEffect(() => {
    const sortPosts = () => {
      const dataWithSearchValue = () =>
        inputSearchValue &&
        postsData.filter(
          (item) =>
            item.title.toLowerCase().search(inputSearchValue.toLowerCase()) !=
            -1
        );

      const data = inputSearchValue ? dataWithSearchValue() : postsData;

      setPosts(
        data &&
          data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      );
    };
    const controlShowMoreVisibility = () => {
      setShowMoreVisible(posts && posts.length > postsAmount ? true : false);
    };

    sortPosts();
    controlShowMoreVisibility();
  }, [inputSearchValue, postsData, width, postsAmount, posts]);

  // const onLastFilter = () => {
  //   setPosts(
  //     data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  //   );
  // };

  return (
    <BlogPostsListStyled>
      <Container>
        <CategoriesAndFilters
          allCategories={allCategories}
          activeCategory={activeCategory}
        />

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

        {isShowMoreVisible && (
          <ShowMorePosts onClick={() => setPostsAmount(postsAmount + 10)} />
        )}
      </Container>
    </BlogPostsListStyled>
  );
};

const BlogPostsListStyled = styled.section`
  .Line {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
  }

  .BlogPostCard {
    .imgWrap {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    }
    > .Container {
      padding: 0;
    }
  }

  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    .blogAllPostsList {
      display: flex;
      flex-wrap: wrap;

      .BlogPostCard {
        margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(40)};
        .imgWrap {
          margin: 0;
        }

        :not(:nth-of-type(3n + 1)) {
          margin-right: 2.75%;
        }

        :first-of-type {
          width: 100%;
          display: flex;

          .imgLink {
            order: 2;
            width: 80%;
            height: ${(props) => props.theme.pixelToVieWidth1920(500)};

            ~ .Container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin: 0;
              width: 20%;
            }
          }
          .categories {
            padding: 0;
            margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(25)};
            .CategoryBtn {
              a {
                margin: 0;
              }
            }
          }
          h3 {
            order: 1;
            padding: 0;
          }
          .imgWrap {
            height: 100%;
          }
        }
      }
    }
  }
`;

export default BlogPostsList;
