import styled from '@emotion/styled';

const ShowMore = ({ onClick }) => {
  return <ShowMoreStyled onClick={() => onClick()}>Show more</ShowMoreStyled>;
};

const ShowMoreStyled = styled.button`
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
  border: none;
  width: 100%;
`;

export default ShowMore;
