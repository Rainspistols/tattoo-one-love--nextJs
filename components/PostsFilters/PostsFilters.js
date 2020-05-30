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
    font-size: 14px;
    line-height: 21px;
    padding: 10px;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.grey1};
    color: ${(props) => props.theme.colors.grey3};
    &:not(:first-of-type) {
      border-left: none;
    }
  }
`;

export default PostsFilters;
