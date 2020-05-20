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
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 400;
  border-radius: ${(props) => props.theme.pixelToVieWidth(4)};
`;

export default CategoryBtn;
