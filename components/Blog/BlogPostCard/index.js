import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../../Layouts/Container/Container';
import CategoriesList from './CategoriesList';

const BlogPostCard = ({ post, API_URL }) => {
  return (
    <BlogPostCardStyled className='BlogPostCard'>
      <Link
        href='/blog/[category]/[slug]'
        as={`/blog/${post.post_categories[0].slug}/${post.slug}`}
      >
        <a className='imgLink'>
          <img src={API_URL + post.img.url} alt='' />
        </a>
      </Link>

      <Container>
        <div className='categoriesTitleWrap'>
          <CategoriesList post={post} />

          <h3 className='post__title'>
            <Link
              href='/blog/[category]/[slug]'
              as={`/blog/${post.post_categories[0].slug}/${post.slug}`}
            >
              <a>{post.title}</a>
            </Link>
          </h3>
        </div>
      </Container>
    </BlogPostCardStyled>
  );
};

const BlogPostCardStyled = styled.div`
  .imgLink {
    display: block;
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};

    img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      height: ${(props) => props.theme.pixelToVieWidth(210)};
    }
  }

  .post__title {
    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(48)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
    font-weight: 600;
    color: ${(props) => props.theme.colors.darkBlue};
    box-sizing: border-box;
  }

  ${({ theme }) => theme.mediaDesktop} {
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

    .categoriesTitleWrap {
      padding: ${(props) => props.theme.pixelToVieWidth1920(30)} 0;
    }

    .imgLink {
      height: ${(props) => props.theme.pixelToVieWidth1920(300)};
      margin: 0;

      img {
        height: 100%;
      }
    }

    .post__title {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(17)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(31)};
      width: 100%;
      font-weight: 500;
      text-align: center;
      margin: 0;
      ${(props) => props.theme.pixelToVieWidth1920(20)};
    }
  }
`;

export default BlogPostCard;
