import styled from '@emotion/styled';
import CategoryBtn from '../../UI/CategoryBtn';
import Container from '../../Layouts/Container/Container';
import Link from 'next/link';

const BlogPostPreview = ({ post, API_URL }) => {
  return (
    <BlogPostPreviewStyled className='BlogPostPreview'>
      <Link
        href='/blog/[category]/[slug]'
        as={`/blog/${post.post_categories[0].slug}/${post.slug}`}
      >
        <a>
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
    </BlogPostPreviewStyled>
  );
};

const BlogPostPreviewStyled = styled.div`
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
    height: ${(props) => props.theme.pixelToVieWidth(210)};
  }

  h3 {
    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(48)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
    font-weight: 600;
    color: ${(props) => props.theme.colors.darkBlue};
    display: inline-block;
  }
`;

export default BlogPostPreview;
