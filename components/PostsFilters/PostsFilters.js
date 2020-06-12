import styled from '@emotion/styled';

const PostsFilters = ({ onLastFilter }) => {
  return (
    <PostsFiltersStyled>
      <button onClick={() => onLastFilter()}>Last</button>
      <button>Popular</button>
    </PostsFiltersStyled>
  );
};

const PostsFiltersStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  button {
    font-size: ${(props) => props.theme.pixelToVieWidth(14)};
    line-height: ${(props) => props.theme.pixelToVieWidth(21)};
    padding: ${(props) => props.theme.pixelToVieWidth(10)};
    text-transform: uppercase;
    background: transparent;
    border: ${(props) => props.theme.pixelToVieWidth(1)} solid
      ${(props) => props.theme.colors.grey1};
    color: ${(props) => props.theme.colors.grey3};
    &:not(:first-of-type) {
      border-left: none;
    }
  }
`;

export default PostsFilters;
