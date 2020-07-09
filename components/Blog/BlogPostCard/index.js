import styled from '@emotion/styled';
import Link from 'next/link';
// Components
import Container from '../../../Layouts/Container/Container';
import CategoriesList from './CategoriesList';

const BlogPostCard = ({ post, API_URL }) => {
  const categorySlug = `/blog/${post.post_categories[0].slug}/${post.slug}`;
  const imgUrl = API_URL + post.img.url;

  return (
    <BlogPostCardStyled className='BlogPostCard'>
      <Link href='/blog/[category]/[slug]' as={categorySlug}>
        <a className='imgLink'>
          <img src={imgUrl} alt='' />
        </a>
      </Link>

      <Container>
        <div className='categoriesTitleWrap'>
          <CategoriesList post={post} />

          <h3 className='post__title'>
            <Link
              href='/blog/[category]/[slug]'
              as={`/blog/${categorySlug}/${post.slug}`}
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
      height: ${({ theme }) => theme.pixelToVieWidth(210)};
    }
  }

  .post__title {
    font-size: ${({ theme }) => theme.pixelToVieWidth(32)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(48)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(20)};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkBlue};
    box-sizing: border-box;
  }

  ${({ theme }) => theme.mediaDesktop} {
    background: ${({ theme }) => theme.colors.grey1};
    width: 31.5%;
    transition: box-shadow 0.3s ease-out;

    :hover,
    :focus {
      box-shadow: 0 ${({ theme }) => theme.pixelToVieWidth1920(2.8)}
          ${({ theme }) => theme.pixelToVieWidth1920(2.2)} rgba(0, 0, 0, 0.034),
        0 ${({ theme }) => theme.pixelToVieWidth1920(6.7)}
          ${({ theme }) => theme.pixelToVieWidth1920(5.3)} rgba(0, 0, 0, 0.048),
        0 ${({ theme }) => theme.pixelToVieWidth1920(12.5)}
          ${({ theme }) => theme.pixelToVieWidth1920(10)} rgba(0, 0, 0, 0.06),
        0 ${({ theme }) => theme.pixelToVieWidth1920(22.3)}
          ${({ theme }) => theme.pixelToVieWidth1920(17.9)} rgba(0, 0, 0, 0.072),
        0 ${({ theme }) => theme.pixelToVieWidth1920(41.8)}
          ${({ theme }) => theme.pixelToVieWidth1920(33.4)} rgba(0, 0, 0, 0.086);
    }

    .categoriesTitleWrap {
      padding: ${({ theme }) => theme.pixelToVieWidth1920(30)} 0;
    }

    .imgLink {
      height: ${({ theme }) => theme.pixelToVieWidth1920(300)};
      margin: 0;

      img {
        height: 100%;
      }
    }

    .post__title {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(17)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(31)};
      width: 100%;
      font-weight: 500;
      text-align: center;
      margin: 0;
      ${({ theme }) => theme.pixelToVieWidth1920(20)};
    }
  }
`;

export default BlogPostCard;
