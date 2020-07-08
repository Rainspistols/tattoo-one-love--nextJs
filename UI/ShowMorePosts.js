import styled from '@emotion/styled';

const ShowMorePosts = ({ onClick }) => {
  return (
    <ShowMorePostsStyled onClick={onClick.bind(this)} className='ShowMorePosts'>
      Pokaż więcej
    </ShowMorePostsStyled>
  );
};

const ShowMorePostsStyled = styled.button`
  height: ${(props) => props.theme.pixelToVieWidth(34)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.pixelToVieWidth(5)};
  background: ${(props) => props.theme.colors.pinkGradient};
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: ${(props) => props.theme.pixelToVieWidth(12)};
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  width: 100%;
  margin: ${(props) => props.theme.pixelToVieWidth(30)} 0
    ${(props) => props.theme.pixelToVieWidth(30)};
  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    margin: 0 auto ${(props) => props.theme.pixelToVieWidth1920(43)} auto;
    width: 31%;
    height: ${(props) => props.theme.pixelToVieWidth1920(50)};
    border-radius: ${(props) => props.theme.pixelToVieWidth1920(5)};
    font-weight: 500;
    font-size: ${(props) => props.theme.pixelToVieWidth1920(12)};
    line-height: ${(props) => props.theme.pixelToVieWidth1920(18)};
    transition: all 0.3s ease-out;

    :hover,
    :focus {
      opacity: 0.8;
    }
  }
`;

export default ShowMorePosts;
