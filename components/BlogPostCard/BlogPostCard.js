import styled from '@emotion/styled';
import CategoryBtn from '../../UI/CategoryBtn';
import Link from 'next/link';
import Container from '../../Layouts/Container/Container';

const BlogPostCard = ({ post, API_URL }) => {
  return (
    <BlogPostCardStyled className='BlogPostCard'>
      <Link
        href='/blog/[category]/[slug]'
        as={`/blog/${post.post_categories[0].slug}/${post.slug}`}
      >
        <a className='imgLink'>
          <div className='imgWrap'>
            <img src={API_URL + post.img.url} alt='' />
          </div>
        </a>
      </Link>

      <Container>
        <div className='categories'>
          {post.post_categories.map((category) => (
            <CategoryBtn
              text={category.name}
              slug={category.slug}
              key={category.id}
            />
          ))}
        </div>

        <h3>
          <Link
            href='/blog/[category]/[slug]'
            as={`/blog/${post.post_categories[0].slug}/${post.slug}`}
          >
            <a>{post.title}</a>
          </Link>
        </h3>
      </Container>
    </BlogPostCardStyled>
  );
};

const BlogPostCardStyled = styled.li`
  .imgWrap {
    overflow: hidden;
    display: flex;
    align-items: center;
    height: ${(props) => props.theme.pixelToVieWidth(210)};
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    height: ${(props) => props.theme.pixelToVieWidth(210)};
    top: 0;
  }

  h3 {
    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(48)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
    font-weight: 600;
    color: ${(props) => props.theme.colors.darkBlue};
    display: inline-block;
  }

  ${(props) => props.theme.mediaDesktop} {
    background: ${(props) => props.theme.colors.grey1};
    width: 31.5%;
    transition: box-shadow 0.3s ease-out;

    :hover,
    :focus {
      box-shadow: 0 ${(props) => props.theme.pixelToVieWidth1920(2.8)}
          ${(props) => props.theme.pixelToVieWidth1920(2.2)}
          rgba(0, 0, 0, 0.034),
        0 ${(props) => props.theme.pixelToVieWidth1920(6.7)}
          ${(props) => props.theme.pixelToVieWidth1920(5.3)}
          rgba(0, 0, 0, 0.048),
        0 ${(props) => props.theme.pixelToVieWidth1920(12.5)}
          ${(props) => props.theme.pixelToVieWidth1920(10)} rgba(0, 0, 0, 0.06),
        0 ${(props) => props.theme.pixelToVieWidth1920(22.3)}
          ${(props) => props.theme.pixelToVieWidth1920(17.9)}
          rgba(0, 0, 0, 0.072),
        0 ${(props) => props.theme.pixelToVieWidth1920(41.8)}
          ${(props) => props.theme.pixelToVieWidth1920(33.4)}
          rgba(0, 0, 0, 0.086);
    }

    .imgWrap {
      width: 100%;
      height: ${(props) => props.theme.pixelToVieWidth1920(300)};
      margin: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .categories {
      ${(props) => props.theme.flexCenter};
      padding-top: ${(props) => props.theme.pixelToVieWidth1920(25)};
    }

    .CategoryBtn {
      border: none;
      margin: 0 ${(props) => props.theme.pixelToVieWidth1920(20)} 0;

      a {
        text-align: center;
        color: ${(props) => props.theme.colors.grey4};
        text-transform: uppercase;
        font-size: ${(props) => props.theme.pixelToVieWidth1920(12)};
        line-height: ${(props) => props.theme.pixelToVieWidth1920(12)};
        margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(7)};
        padding: 0;
      }
    }

    h3 {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(17)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(31)};
      width: 100%;
      box-sizing: border-box;
      font-weight: 500;
      text-align: center;
      color: ${(props) => props.theme.colors.darkBlue};
      margin: 0;
      padding: 0 ${(props) => props.theme.pixelToVieWidth1920(45)}
        ${(props) => props.theme.pixelToVieWidth1920(20)};
    }
  }
`;

export default BlogPostCard;
