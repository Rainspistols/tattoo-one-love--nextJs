import styled from '@emotion/styled';
import Link from 'next/link';

const CategoryBtn = ({ text, slug, border = true }) => {
  return (
    <Link href={'/blog/[category]'} as={`/blog/${slug}`} passHref>
      <CategoryBtnStyled>{text}</CategoryBtnStyled>
    </Link>
  );
};

const CategoryBtnStyled = styled.a`
  color: ${({ theme }) => theme.colors.grey2};
  border: ${({ theme }) => theme.pixelToVieWidth(1)} solid
    ${({ theme }) => theme.colors.grey2};
  text-transform: uppercase;
  font-weight: 400;
  border-radius: ${({ theme }) => theme.pixelToVieWidth(4)};
  display: block;
  ${(theme) => theme.flexCenter};
  padding: ${({ theme }) => theme.pixelToVieWidth(2.5)}
    ${({ theme }) => theme.pixelToVieWidth(22)};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.pixelToVieWidth(10)};
  line-height: ${({ theme }) => theme.pixelToVieWidth(12)};

  :not(:last-of-type) {
    margin-right: ${({ theme }) => theme.pixelToVieWidth(15)};
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
      margin: 0 ${({ theme }) => theme.pixelToVieWidth1920(20)} 0 0;
    }
  }
`;

export default CategoryBtn;
