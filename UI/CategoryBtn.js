import styled from '@emotion/styled';
import Link from 'next/link';

const CategoryBtn = ({ text, slug }) => {
  return (
    <CategoryBtnStyled className='CategoryBtn'>
      <Link href={'/blog/[slug]'} as={`/blog/${slug}`}>
        <a>{text}</a>
      </Link>
    </CategoryBtnStyled>
  );
};

const CategoryBtnStyled = styled.div`
  color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.pixelToVieWidth(1)} solid
    ${(props) => props.theme.colors.grey2};
  text-transform: uppercase;
  font-weight: 400;
  border-radius: ${(props) => props.theme.pixelToVieWidth(4)};
  margin-right: ${(props) => props.theme.pixelToVieWidth(10)};

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.pixelToVieWidth(2.5)}
      ${(props) => props.theme.pixelToVieWidth(22)};
    box-sizing: border-box;
    font-size: ${(props) => props.theme.pixelToVieWidth(10)};
    line-height: ${(props) => props.theme.pixelToVieWidth(12)};
  }
`;

export default CategoryBtn;
