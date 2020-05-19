import styled from '@emotion/styled';
import CategoryBtn from '../../UI/CategoryBtn';
import Container from '../../Layouts/Container/Container';
import Link from 'next/link';

const BlogPostPreview = ({
  post: { postTitle, postSlug, categories, postImgHref },
}) => {
  return (
    <BlogPostPreviewStyled className='BlogPostPreview'>
      <Link href={'/blog/' + postSlug}>
        <a>
          <div className='imgWrap'>
            <img src={postImgHref} alt='' />
          </div>
        </a>
      </Link>

      <Container>
        <div className='categories'>
          {categories.map((item, index) => (
            <Link href={'/blog/' + item.slug} key={index}>
              <a>
                <CategoryBtn text={item.category} />
              </a>
            </Link>
          ))}
        </div>

        <h3>
          <Link href={'/blog/' + postSlug}>
            <a>{postTitle}</a>
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
    a {
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
