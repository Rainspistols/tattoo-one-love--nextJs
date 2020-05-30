import styled from '@emotion/styled';
import Main from '../../../Layouts/Main/Main';
import CategoryBtn from '../../../UI/CategoryBtn';
import Container from '../../../Layouts/Container/Container';
import Moment from 'react-moment';
import ShareBtn from '../../../components/ShareBtn/ShareBtn';
import MarkdownView from 'react-showdown';
import RecommendedPosts from '../../../components/RecommendedPosts/RecommendedPosts';

const BlogPost = ({ post, relevantPosts, API_URL }) => {
  const { content, title, updated_at, href, post_categories, postHref } = post;

  return (
    <BlogPostStyled>
      <Main headTitle={title}>
        <Container>
          <div className='categoryAndDate'>
            <ul>
              {post_categories.map(({ name, slug, id }) => (
                <li key={id}>
                  <CategoryBtn text={name} slug={slug} />
                </li>
              ))}
            </ul>

            <Moment className='date' format='MMMM DD, YYYY'>
              {updated_at}
            </Moment>
          </div>

          <h1 className='post-title'>{title}</h1>
        </Container>
        <div className='post-img'>
          <img src={href} alt='' />
        </div>

        <div className='social-likes'>
          <ShareBtn postHref={postHref} />
        </div>

        <Container>
          <MarkdownView className='postText' markdown={content} />

          <RecommendedPosts posts={relevantPosts} API_URL={API_URL} />
        </Container>
      </Main>
    </BlogPostStyled>
  );
};

export const getServerSideProps = async (context) => {
  const { category, slug } = context.query;
  const { API_URL } = process.env;

  const postHref = 'https://tattoo-one-love.com/blog/' + category + '/' + slug;

  const res = await fetch(`${API_URL}/posts?slug=${slug}`);
  const postJson = await res.json();

  const relevantCategories = postJson[0].post_categories.map(
    (item) => item.slug
  );

  const resReleventPosts = await fetch(
    `${API_URL}/posts?post_categories.slug=${relevantCategories[0]}&post_categories.slug=${relevantCategories[1]}&_limit=3&slug_ncontains=${slug}`
  );
  const jsonRelevantPosts = await resReleventPosts.json();

  return {
    props: {
      post: {
        title: postJson[0].title,
        content: postJson[0].content,
        updated_at: postJson[0].updated_at,
        href: API_URL + postJson[0].img.url,
        post_categories: postJson[0].post_categories,
        postHref,
      },
      lastPosts: {},
      relevantPosts: jsonRelevantPosts,
      API_URL: API_URL,
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
