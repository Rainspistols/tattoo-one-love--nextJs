import styled from '@emotion/styled';
import Main from '../../../../Layouts/Main/Main';
import CategoryBtn from '../../../../UI/CategoryBtn';
import Container from '../../../../Layouts/Container/Container';
import Moment from 'react-moment';
import ShareBtn from '../../../../components/ShareBtn/ShareBtn';
import MarkdownView from 'react-showdown';
import RecommendedPosts from '../../../../components/RecommendedPosts/RecommendedPosts';
import StrapiService from '../../../../components/StrapiService/StrapiService';
import { useState, useEffect } from 'react';

const BlogPost = ({ postBySlug, relevantPostsData, API_URL }) => {
  const [statePost, setStatePost] = useState(null);

  useEffect(() => {
    setStatePost(postBySlug[0]);
  }, [postBySlug]);

  return (
    <BlogPostStyled>
      {statePost && (
        <Main headTitle={statePost.title}>
          <Container>
            <div className='categoryAndDate'>
              <ul>
                {statePost.post_categories.map(({ name, slug, id }) => (
                  <li key={id}>
                    <CategoryBtn text={name} slug={slug} />
                  </li>
                ))}
              </ul>

              <Moment className='date' format='MMMM DD, YYYY'>
                {statePost.updated_at}
              </Moment>
            </div>

            <h1 className='post-title'>{statePost.title}</h1>
          </Container>
          <div className='post-img'>
            <img src={statePost.href} alt='' />
          </div>

          <div className='social-likes'>
            <ShareBtn postHref={statePost.linkToThisPost} />
          </div>

          <Container>
            <MarkdownView className='postText' markdown={statePost.content} />

            <RecommendedPosts posts={relevantPostsData} API_URL={API_URL} />
          </Container>
        </Main>
      )}
    </BlogPostStyled>
  );
};

export const getStaticPaths = async () => {
  const strapiService = new StrapiService();
  const allPosts = await strapiService.getAllPosts();

  const paths = allPosts.map((item) => ({
    params: {
      post: item.slug,
      category: item.post_categories[0].slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { category, post } = context.params;
  const { API_URL } = process.env;

  const strapiService = new StrapiService();
  const postBySlug = await strapiService.getPostBySlug(post, category);
  const relevantPosts = await strapiService.getRelevantPosts(postBySlug, post);

  return {
    props: {
      postBySlug,
      relevantPostsData: relevantPosts,
      API_URL,
    },
  };
};

const BlogPostStyled = styled.section`
  padding-top: ${(props) => props.theme.pixelToVieWidth(20)};

  .categoryAndDate {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      flex-wrap: wrap;

      .CategoryBtn {
        font-size: ${(props) => props.theme.pixelToVieWidth(10)};
        line-height: ${(props) => props.theme.pixelToVieWidth(12)};
        margin-bottom: ${(props) => props.theme.pixelToVieWidth(12)};
      }
    }

    .date {
      font-size: ${(props) => props.theme.pixelToVieWidth(10)};
      line-height: ${(props) => props.theme.pixelToVieWidth(12)};
      font-weight: 400;
      color: ${(props) => props.theme.colors.grey2};
    }
  }

  .post-title {
    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(48)};
    color: ${(props) => props.theme.colors.darkBlue};
    font-weight: 600;
  }

  .post-img {
    height: ${(props) => props.theme.pixelToVieWidth(210)};
    overflow: hidden;
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};

    img {
      width: 100%;
    }
  }

  .social-likes {
    text-align: center;
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
  }

  .postText {
    padding-bottom: ${(props) => props.theme.pixelToVieWidth(35)};
    .short-description {
      font-size: ${(props) => props.theme.pixelToVieWidth(12)};
      line-height: ${(props) => props.theme.pixelToVieWidth(18)};
      font-weight: 400;
      padding: ${(props) => props.theme.pixelToVieWidth(15)};
      background: ${(props) => props.theme.colors.grey1};
      color: ${(props) => props.theme.colors.grey3};
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
    }

    .normal-text,
    .normal-text .pink-link {
      font-size: ${(props) => props.theme.pixelToVieWidth(16)};
      line-height: ${(props) => props.theme.pixelToVieWidth(25)};
      color: ${(props) => props.theme.colors.darkBlue};
    }

    .normal-text {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    }

    .normal-text .pink-link {
      display: inline;
    }

    .pink-link {
      border-bottom: 1px solid ${(props) => props.theme.colors.pink};
      display: inline-block;
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    }

    .person-comment {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: ${(props) => props.theme.pixelToVieWidth(1)} solid
        ${(props) => props.theme.colors.grey1};
      padding: ${(props) => props.theme.pixelToVieWidth(20)};
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};

      .photo-and-name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};

        img {
          border-radius: 50%;
          width: ${(props) => props.theme.pixelToVieWidth(90)};
          margin-right: ${(props) => props.theme.pixelToVieWidth(30)};
        }

        .name-and-profession {
          display: flex;
          flex-direction: column;
          b {
            font-size: ${(props) => props.theme.pixelToVieWidth(18)};
            line-height: ${(props) => props.theme.pixelToVieWidth(27)};
            font-weight: 600;
            color: ${(props) => props.theme.colors.darkBlue};
          }

          span {
            font-size: ${(props) => props.theme.pixelToVieWidth(12)};
            line-height: ${(props) => props.theme.pixelToVieWidth(18)};
            font-weight: 400;
            color: ${(props) => props.theme.colors.grey4};
          }
        }
      }

      .comment-text {
        font-size: ${(props) => props.theme.pixelToVieWidth(12)};
        line-height: ${(props) => props.theme.pixelToVieWidth(18)};
        font-weight: 400;
        color: ${(props) => props.theme.colors.darkBlue};
      }
    }

    h2,
    h3 {
      font-weight: 600;
      color: ${(props) => props.theme.colors.darkBlue};
      line-height: ${(props) => props.theme.pixelToVieWidth(30)};
    }

    h2 {
      font-size: ${(props) => props.theme.pixelToVieWidth(26)};
    }

    h3 {
      font-size: ${(props) => props.theme.pixelToVieWidth(22)};
    }

    blockquote {
      margin: 0 0 ${(props) => props.theme.pixelToVieWidth(10)};
      padding-left: ${(props) => props.theme.pixelToVieWidth(10)};
      border-left: ${(props) => props.theme.pixelToVieWidth(2)} solid
        ${(props) => props.theme.colors.grey4};
      font-style: italic;
      font-weight: 300;
      font-size: ${(props) => props.theme.pixelToVieWidth(17)};
      line-height: ${(props) => props.theme.pixelToVieWidth(26)};
    }
  }
`;

export default BlogPost;
