import styled from '@emotion/styled';
import CategoryBtn from '../../UI/CategoryBtn';
import Container from '../../Layouts/Container/Container';
import Link from 'next/link';

const BlogPostPreview = ({ post: { src, title, category, slug } }) => {
  return (
    <BlogPostPreviewStyled>
      <Link href={slug}>
        <a>
          <div className='imgWrap'>
            <img src={src} alt='' />
          </div>

          <Container>
            <CategoryBtn text={category} />
            <h3>{title}</h3>
          </Container>
        </a>
      </Link>
    </BlogPostPreviewStyled>
  );
};

const BlogPostPreviewStyled = styled.div`
  .imgWrap {
    width: ${(props) => props.theme.pixelToVieWidth(300)};
    height: ${(props) => props.theme.pixelToVieWidth(210)};
    overflow: hidden;
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
  }

  .CategoryBtn {
    width: ${(props) => props.theme.pixelToVieWidth(96)};
    height: ${(props) => props.theme.pixelToVieWidth(20)};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(48)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
    font-weight: 600;
    color: ${props=>props.theme.colors.darkBlue}
  }
`;

export default BlogPostPreview;
