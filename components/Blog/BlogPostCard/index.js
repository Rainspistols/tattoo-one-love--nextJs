import styled from '@emotion/styled';
import Link from 'next/link';
// Components
import CategoryBtn from '../../../UI/CategoryBtn';

const BlogPostCard = ({ post, API_URL, imgWidth }) => {
  const categorySlug = `/blog/${post.post_categories[0].slug}/${post.slug}`;
  const imgUrl = API_URL + post.img.url;
  const linkToPost = '/blog/[category]/[slug]';

  return (
    <BlogPostCardStyled className='BlogPostCard' imgWidth={imgWidth}>
      <Link href={linkToPost} as={categorySlug}>
        <a>
          <div className='imgWrap'>
            <img src={imgUrl} alt='' />
          </div>

          <div className='categoriesTitleWrap'>
            <ul className='categories'>
              {post?.post_categories.map((category) => (
                <CategoryBtn key={category.id} text={category.name} />
              ))}
            </ul>

            <h2 className='post__title'>{post.title}</h2>
          </div>
        </a>
      </Link>
    </BlogPostCardStyled>
  );
};

const BlogPostCardStyled = styled.div`
  .imgWrap {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};
    width: ${({ theme, imgWidth }) =>
      imgWidth ? theme.pixelToVieWidth(imgWidth) : '100%'};
    height: ${({ theme }) => theme.pixelToVieWidth(207)};

    img {
      display: block;
      object-fit: cover;
      object-position: top;
      width: 100%;
      height: 100%;
    }
  }

  .categoriesTitleWrap {
    padding: 0 ${({ theme }) => theme.pixelToVieWidth(20)};
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
  }

  .post__title {
    font-size: ${({ theme }) => theme.pixelToVieWidth(32)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(48)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(20)};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkBlue};
    box-sizing: border-box;
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    background: ${({ theme }) => theme.colors.grey1};
    width: 31.5%;
    transition: box-shadow 0.3s ease-out;
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(20)};

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
      padding: 30px;
      width: 100%;
      box-sizing: border-box;
    }

    .imgWrap {
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
