import styled from '@emotion/styled';
import Link from 'next/link';

const CategoryBtn = ({ text, slug, border = true }) => {
  return (
    <Link href={'/blog/[slug]'} as={`/blog/${slug}`} passHref>
      <CategoryBtnStyled>{text}</CategoryBtnStyled>
    </Link>
  );
};

const CategoryBtnStyled = styled.a`
  color: ${({ theme }) => theme.colors.grey2};
  border: ${(props) => props.theme.pixelToVieWidth(1)} solid
    ${(props) => props.theme.colors.grey2};
  text-transform: uppercase;
  font-weight: 400;
  border-radius: ${(props) => props.theme.pixelToVieWidth(4)};
  display: block;
  ${(theme) => theme.flexCenter};
  padding: ${(props) => props.theme.pixelToVieWidth(2.5)}
    ${(props) => props.theme.pixelToVieWidth(22)};
  box-sizing: border-box;
  font-size: ${(props) => props.theme.pixelToVieWidth(10)};
  line-height: ${(props) => props.theme.pixelToVieWidth(12)};

  :not(:last-of-type) {
    margin-right: ${(props) => props.theme.pixelToVieWidth(15)};
  }

  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.pixelToVieWidth1920(12)};
    line-height: ${({ theme }) => theme.pixelToVieWidth1920(12)};
    padding: 0;
    color: ${({ theme }) => theme.colors.grey4};
    text-transform: uppercase;
    border: none;

    :not(:last-of-type) {
      margin: 0 ${(props) => props.theme.pixelToVieWidth1920(20)} 0 0;
    }
  }
`;

export default CategoryBtn;
