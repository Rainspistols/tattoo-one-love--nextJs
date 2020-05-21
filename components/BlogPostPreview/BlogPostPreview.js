import styled from '@emotion/styled';
import CategoryBtn from '../../UI/CategoryBtn';
import Container from '../../Layouts/Container/Container';
import Link from 'next/link';

const BlogPostPreview = ({ post }) => {
  return (
    <BlogPostPreviewStyled className='BlogPostPreview'>
      <Link href={'/blog/' + post.categories[0].slug + '/' + post.slug}>
        <a>
          <div className='imgWrap'>
            <img src={post.href} alt='' />
          </div>
        </a>
      </Link>

      <Container>
        <div className='categories'>
          {post.categories.map((category) => (
            <CategoryBtn
              text={category.category}
              slug={category.slug}
              key={category.id}
            />
          ))}
        </div>

        <h3>
          <Link href={post.slug}>
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
    position: relative;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    .CategoryBtn {
      margin-right: ${(props) => props.theme.pixelToVieWidth(10)};
    }
  }

  .CategoryBtn {
    width: ${(props) => props.theme.pixelToVieWidth(96)};
    height: ${(props) => props.theme.pixelToVieWidth(20)};
  }

  img {
    width: 100%;
    object-fit: cover;
    position: absolute;
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
`;

export default BlogPostPreview;
