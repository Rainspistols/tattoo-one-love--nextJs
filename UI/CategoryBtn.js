import styled from '@emotion/styled';
import Link from 'next/link';

const CategoryBtn = ({ text, slug, isLink }) => {
  return isLink ? (
    <Link href={'/blog/[slug]'} as={`/blog/${slug}`} passHref>
      <CategoryBtnStyled isLink={isLink}>{text}</CategoryBtnStyled>
    </Link>
  ) : (
    <CategoryBtnStyled as='li'>{text}</CategoryBtnStyled>
  );
};

const CategoryBtnStyled = styled.a`
  color: ${({ theme }) => theme.colors.grey2};
  border: ${({ theme }) =>
    `${theme.pixelToVieWidth(1)} solid ${theme.colors.grey2}`};
  text-transform: uppercase;
  font-weight: 400;
  border-radius: ${({ theme }) => theme.pixelToVieWidth(4)};
  display: block;
  ${(theme) => theme.flexCenter};
  padding: ${({ theme, isLink }) =>
    isLink
      ? theme.pixelToVieWidth(10)
      : `${theme.pixelToVieWidth(2.5)} ${theme.pixelToVieWidth(22)} `};

  box-sizing: border-box;
  font-size: ${({ theme, isLink }) =>
    isLink ? theme.pixelToVieWidth(18) : theme.pixelToVieWidth(10)};
  line-height: ${({ theme, isLink }) =>
    isLink ? theme.pixelToVieWidth(27) : theme.pixelToVieWidth(12)};
  margin-bottom: ${({ theme }) => theme.pixelToVieWidth(7)};

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
      margin: ${({ theme }) => `0 ${theme.pixelToVieWidth1920(20)} 0 0`};
    }
  }
`;

export default CategoryBtn;
