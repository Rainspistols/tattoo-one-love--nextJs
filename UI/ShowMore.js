import styled from '@emotion/styled';
import Link from 'next/link';

const ShowMore = () => {
  return (
    <Link href='/blog'>
      <ShowMoreStyled>Show more</ShowMoreStyled>
    </Link>
  );
};

const ShowMoreStyled = styled.a`
  height: ${(props) => props.theme.pixelToVieWidth(34)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.pixelToVieWidth(5)};
  background: ${(props) => props.theme.colors.pinkGradient};
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: ${(props) => props.theme.pixelToVieWidth(12)};
  margin-top: ${(props) => props.theme.pixelToVieWidth(30)};
  cursor: pointer;
  text-transform: uppercase;
`;

export default ShowMore;
