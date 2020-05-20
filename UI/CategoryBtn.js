import styled from '@emotion/styled';
import Link from 'next/link';

const CategoryBtn = ({ text, slug }) => {
  return (
    <CategoryBtnStyled className='CategoryBtn'>
      <Link href={slug}>
        <a>{text}</a>
      </Link>
    </CategoryBtnStyled>
  );
};

const CategoryBtnStyled = styled.div`
  color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.pixelToVieWidth(1)} solid
    ${(props) => props.theme.colors.grey2};
  font-size: ${(props) => props.theme.pixelToVieWidth(10)};
  height: ${(props) => props.theme.pixelToVieWidth(20)};
  text-transform: uppercase;
  font-weight: 400;
  border-radius: ${(props) => props.theme.pixelToVieWidth(4)};

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default CategoryBtn;
