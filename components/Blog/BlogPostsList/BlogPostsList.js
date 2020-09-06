import styled from '@emotion/styled';
// Components
import BlogPostCard from '../BlogPostCard';
import Container from '../../../Layouts/Container/Container';
import Line from '../../../UI/Line';
import ShowMorePosts from '../../../UI/ShowMorePosts';
import CategoriesAndFilters from '../../CategoriesAndFilters';

const BlogPostsList = ({
  postsData,
  API_URL,
  inputSearchValue,
  activeCategory,
  allCategories,
  onShowMeroButton,
  allPostsCount,
  postsAmount,
}) => {
  return (
    <BlogPostsListStyled>
      <CategoriesAndFilters
        allCategories={allCategories}
        activeCategory={activeCategory}
      />
      <Container>
        <ul className='blogAllPostsList'>
          {postsData.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <BlogPostCard post={post} API_URL={API_URL} />
                <Line />
              </React.Fragment>
            );
          })}
        </ul>
        {allPostsCount > postsAmount && (
          <ShowMorePosts onShowMeroButton={onShowMeroButton} />
        )}
      </Container>
    </BlogPostsListStyled>
  );
};

const BlogPostsListStyled = styled.section`
  .Line {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(20)};
  }

  .BlogPostCard {
    .imgWrap {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};
    }
    > .Container {
      padding: 0;
    }
  }

  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    .blogAllPostsList {
      display: flex;
      flex-wrap: wrap;

      .BlogPostCard {
        margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(40)};
        .imgWrap {
          margin: 0;
        }

        :not(:nth-of-type(3n + 1)) {
          margin-right: 2.75%;
        }

        :first-of-type {
          width: 100%;

          a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .imgWrap {
            order: 2;
            width: 80%;
            height: ${({ theme }) => theme.pixelToVieWidth1920(500)};
          }

          .categoriesTitleWrap {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .categories {
            padding: 0;
            margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
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
